import { Component, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class PaymentCardDetailsComponent {
    constructor(fb) {
        this.fb = fb;
        this.payEmitter = new EventEmitter();
        this.storedCards = [];
        this.cardType = '';
        this.card = false;
        this.cardwidth = 350;
        this.messages = { validDate: 'valid\ndate', monthYear: 'mm/yy' }; //Strings for translation
        this.placeholders = { number: '•••• •••• •••• ••••', name: 'Full Name', expiry: '••/••', cvc: '•••' }; // Placeholders for rendered fields
        this.formatting = true;
        this.debug = true; // If true, will log helpful messages for setting up Card
        this.companyNameSelected = false;
        this.isCardNumberLength = true;
    }
    ngOnInit() {
        this.payEmitter.emit(true);
    }
    dropdown(val) {
        this.cardType = false;
        this.payEmitter.emit(false);
        if (val == 'Set up new debit or credit card') {
            this.card = false;
            this.buildCreditForms();
        }
        // this.translate.get("Use existing credit card").subscribe(translations => {
        //   if(val.value== translations){
        //     this.card=true
        //     if(this.storedCards.length == 1){
        //       this.cardSelected(this.storedCards[0].id,'ts')
        //     }
        //   }
        //   else{
        //     this.card=false
        //     this.buildCreditForms()
        //   }
        // })
    }
    buildCreditForms() {
        let date = new Date().toISOString().slice(0, 10);
        this.creditForm = this.fb.group({
            payment: this.fb.group({
                'amount': [,],
                'cardCharge': [this.userData.cardCharges[this.userData.cardCharges.length - 1].charge,],
                'cardName': [this.userData.customerDetails.customerName, [Validators.required]],
                'cardNumber': ['', [Validators.required, 'c']],
                'cardCvc': ['', [Validators.required, Validators.maxLength(3), Validators.maxLength(4)]],
                'paymentDate': [date,],
                'description': ["Invoice no : #" + this.userData.invoiceDetails.invoiceNumber],
                'isportal': [true,],
                'reference': ['Invoice no : #' + this.userData.invoiceDetails.invoiceNumber,],
                'email': [this.userData.customerDetails.emailId, [Validators.required, Validators.email]],
                'expiry': ['', [Validators.required, '']],
                "paymentMethod": [this.userData.cardCharges[this.userData.cardCharges.length - 1].paymentMethodId],
                "dontSendToAccounts": [''],
            })
        });
        this.placeholders = { name: this.userData.customerDetails.customerName ? this.userData.customerDetails.customerName : 'Full Name' };
    }
    companyNameClick() {
        this.companyNameSelected = !this.companyNameSelected;
        this.creditForm.patchValue({ 'payment': { 'cardName': '' } });
    }
    keypress() {
        this.payEmitter.emit(this.creditForm);
    }
    setCardType() {
        this.cardType = this.detectCardType(this.creditForm.value.payment.cardNumber.replace(/\s/g, ""));
        var cardStatus = this.creditForm.get('payment.cardNumber');
        if (this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "INVALID")
            this.isCardNumberLength = false;
        if (!this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "VALID")
            this.isCardNumberLength = true;
        this.payEmitter.emit(this.creditForm);
    }
    cardSelected(val, from) {
        val = from == 'html' ? val.value : val;
        var storedCard = this.storedCards.find((x) => x.id == val).description;
        this.cardType = storedCard.substring(0, storedCard.indexOf('ending') - 1);
        let date = new Date().toISOString().slice(0, 10);
        this.creditForm = this.fb.group({
            'paymentDate': [date, [Validators.required]],
            'description': ["Invoice no : #" + this.userData.invoiceDetails.invoiceNumber],
            'reference': ['Invoice no : #' + this.userData.invoiceDetails.invoiceNumber,],
            'paymentMethod': [this.userData.cardCharges[this.userData.cardCharges.length - 1].paymentMethodId, [Validators.required]],
            'storedCard': [val, [Validators.required]],
            'cardName': [this.userData.customerDetails.customerName, [Validators.required]],
            'amount': [],
            'cardCharge': [this.userData.cardCharges[this.userData.cardCharges.length - 1].charge,],
            'isPortal': [true],
        });
        setTimeout(() => {
            this.payEmitter.emit(this.creditForm);
        }, 100);
    }
    detectCardType(number) {
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
            'MasterCard': /^5[1-5][0-9]{14}$/,
            'American Express': /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        };
        for (var key in re) {
            if (re[key].test(number)) {
                return key;
            }
        }
        return false;
    }
}
PaymentCardDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCardDetailsComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PaymentCardDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"content-group\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form card container=\".card-container\">\n        <div>\n        <div class=\"row\">\n            <div class=\"col-md-6 credit-card-hide\">\n                <div class=\"card-container\">\n\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"content-group\">\n                    <div class=\"lable\">Cardholder\u2019s name</div>\n                    <!-- <div *ngIf=\"companyNameSelected\" class=\"lable\">Company name</div> -->\n                    <input class=\"field\" type=\"text\" card-name (keyup)=\"keypress()\" >\n                    <div class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                    <!-- <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div> -->\n                </div>\n\n\n                <div class=\"content-group\">\n                    <div class=\"lable\">Card number</div>\n                    <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number placeholder=\"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\" (keyup)=\"setCardType()\">\n                    <img *ngIf=\"cardType\" class=\"icon-align\" src=\"\" alt=\"\">\n                </div>\n                <div class=\"row row-group\">\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">CVC</div>\n                        <input class=\"field\" type=\"password\" autocomplete=\"new-password\" card-cvc placeholder=\"CVC\"\n                            (keyup)=\"keypress()\">\n                    </div>\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">Exp date</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry placeholder=\"MM/YY\" (keyup)=\"keypress()\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"content-group\" style=\"margin: 0;\">\n        <div class=\"lable\">Email address</div>\n        <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\">\n        <div class=\"email-info\">This email will only be used to keep the customer updated about their payments</div>\n    </div>\n</div>\n</form>\n</div>", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCardDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-card-details',
                    templateUrl: './payment-card-details.component.html',
                    styleUrls: ['./payment-card-details.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFyZW50cGF5bWVudC9zcmMvbGliL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU9qRixNQUFNLE9BQU8sMkJBQTJCO0lBUXRDLFlBQ1UsRUFBZTtRQUFmLE9BQUUsR0FBRixFQUFFLENBQWE7UUFQZixlQUFVLEdBQXFCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHakUsZ0JBQVcsR0FBTSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFNLEVBQUUsQ0FBQztRQUtqQixTQUFJLEdBQVMsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsYUFBUSxHQUFRLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBRSx5QkFBeUI7UUFDMUYsaUJBQVksR0FBUSxFQUFDLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFBLENBQUMsbUNBQW1DO1FBRXZJLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsVUFB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NEZEcERPLDJCQUEyQjtrQkFMdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztpQkFDckQ7a0dBR1csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dCAsT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGF5bWVudC1jYXJkLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRDYXJkRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG4gIHVzZXJEYXRhOiBhbnk7XG4gIHN0b3JlZENhcmRzOiBhbnk9W107XG4gIGNhcmRUeXBlOiBhbnk9Jyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICkgeyB9XG4gIGNhcmQ6Ym9vbGVhbj1mYWxzZTtcbiAgY29udGFpbmVyOiBhbnk7XG4gIGNhcmR3aWR0aDogTnVtYmVyID0gMzUwO1xuICBtZXNzYWdlczogYW55ID0ge3ZhbGlkRGF0ZTogJ3ZhbGlkXFxuZGF0ZScsIG1vbnRoWWVhcjogJ21tL3l5J307ICAvL1N0cmluZ3MgZm9yIHRyYW5zbGF0aW9uXG4gIHBsYWNlaG9sZGVyczogYW55ID0ge251bWJlcjogJ+KAouKAouKAouKAoiDigKLigKLigKLigKIg4oCi4oCi4oCi4oCiIOKAouKAouKAouKAoicsIG5hbWU6ICdGdWxsIE5hbWUnLCBleHBpcnk6ICfigKLigKIv4oCi4oCiJywgY3ZjOiAn4oCi4oCi4oCiJ30gLy8gUGxhY2Vob2xkZXJzIGZvciByZW5kZXJlZCBmaWVsZHNcbiAgbWFza3M6IGFueTtcbiAgZm9ybWF0dGluZzogYm9vbGVhbiA9IHRydWU7XG4gIGRlYnVnOiBib29sZWFuID0gdHJ1ZTsgLy8gSWYgdHJ1ZSwgd2lsbCBsb2cgaGVscGZ1bCBtZXNzYWdlcyBmb3Igc2V0dGluZyB1cCBDYXJkXG4gIGNyZWRpdEZvcm0hOiBGb3JtR3JvdXA7XG4gIHN1bW1hcnk6IGFueTtcbiAgY29tcGFueU5hbWVTZWxlY3RlZDpib29sZWFuPWZhbHNlO1xuICBpc0NhcmROdW1iZXJMZW5ndGg6IGJvb2xlYW49dHJ1ZTtcblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHRydWUpO1xuICB9XG5cbiAgZHJvcGRvd24odmFsOmFueSl7XG4gICAgdGhpcy5jYXJkVHlwZT1mYWxzZTtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdChmYWxzZSk7XG4gICAgaWYodmFsID09ICdTZXQgdXAgbmV3IGRlYml0IG9yIGNyZWRpdCBjYXJkJyl7XG4gICAgICAgIHRoaXMuY2FyZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkQ3JlZGl0Rm9ybXMoKVxuICAgIH1cbiAgICAvLyB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJVc2UgZXhpc3RpbmcgY3JlZGl0IGNhcmRcIikuc3Vic2NyaWJlKHRyYW5zbGF0aW9ucyA9PiB7XG4gICAgLy8gICBpZih2YWwudmFsdWU9PSB0cmFuc2xhdGlvbnMpe1xuICAgIC8vICAgICB0aGlzLmNhcmQ9dHJ1ZVxuICAgIC8vICAgICBpZih0aGlzLnN0b3JlZENhcmRzLmxlbmd0aCA9PSAxKXtcbiAgICAvLyAgICAgICB0aGlzLmNhcmRTZWxlY3RlZCh0aGlzLnN0b3JlZENhcmRzWzBdLmlkLCd0cycpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2V7XG4gICAgLy8gICAgIHRoaXMuY2FyZD1mYWxzZVxuICAgIC8vICAgICB0aGlzLmJ1aWxkQ3JlZGl0Rm9ybXMoKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG5cbiAgfVxuIFxuICBidWlsZENyZWRpdEZvcm1zKCl7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApOyAgXG4gICAgdGhpcy5jcmVkaXRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBwYXltZW50OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICdhbW91bnQnOiBbLCBdLFxuICAgICAgJ2NhcmRDaGFyZ2UnOiBbdGhpcy51c2VyRGF0YS5jYXJkQ2hhcmdlc1t0aGlzLnVzZXJEYXRhLmNhcmRDaGFyZ2VzLmxlbmd0aC0xXS5jaGFyZ2UsIF0sXG4gICAgICAnY2FyZE5hbWUnOiBbdGhpcy51c2VyRGF0YS5jdXN0b21lckRldGFpbHMuY3VzdG9tZXJOYW1lLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0gXSxcbiAgICAgICdjYXJkTnVtYmVyJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgJ2MnXV0sXG4gICAgICAnY2FyZEN2Yyc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxuICAgICAgJ3BheW1lbnREYXRlJzogW2RhdGUsIF0sXG4gICAgICAnZGVzY3JpcHRpb24nOiBbXCJJbnZvaWNlIG5vIDogI1wiK3RoaXMudXNlckRhdGEuaW52b2ljZURldGFpbHMuaW52b2ljZU51bWJlcl0sXG4gICAgICAnaXNwb3J0YWwnOiBbdHJ1ZSwgXSxcbiAgICAgICdyZWZlcmVuY2UnOiBbJ0ludm9pY2Ugbm8gOiAjJyt0aGlzLnVzZXJEYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXIsIF0sXG4gICAgICAnZW1haWwnOiBbdGhpcy51c2VyRGF0YS5jdXN0b21lckRldGFpbHMuZW1haWxJZCxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgJ2V4cGlyeSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsICcnXV0sXG4gICAgICBcInBheW1lbnRNZXRob2RcIjpbdGhpcy51c2VyRGF0YS5jYXJkQ2hhcmdlc1t0aGlzLnVzZXJEYXRhLmNhcmRDaGFyZ2VzLmxlbmd0aC0xXS5wYXltZW50TWV0aG9kSWRdLFxuICAgICAgXCJkb250U2VuZFRvQWNjb3VudHNcIjpbJyddLFxuICAgICAgfSlcblxuICAgIH0pO1xuICAgIHRoaXMucGxhY2Vob2xkZXJzID0ge25hbWU6IHRoaXMudXNlckRhdGEuY3VzdG9tZXJEZXRhaWxzLmN1c3RvbWVyTmFtZT90aGlzLnVzZXJEYXRhLmN1c3RvbWVyRGV0YWlscy5jdXN0b21lck5hbWU6J0Z1bGwgTmFtZSd9O1xuICB9XG5cbiAgY29tcGFueU5hbWVDbGljaygpe1xuICAgIHRoaXMuY29tcGFueU5hbWVTZWxlY3RlZD0hdGhpcy5jb21wYW55TmFtZVNlbGVjdGVkO1xuICAgIHRoaXMuY3JlZGl0Rm9ybS5wYXRjaFZhbHVlKHsncGF5bWVudCc6eydjYXJkTmFtZSc6Jyd9fSk7XG4gIH1cbiAga2V5cHJlc3MoKXtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0aGlzLmNyZWRpdEZvcm0pO1xuICB9XG4gIHNldENhcmRUeXBlKCl7XG4gICAgdGhpcy5jYXJkVHlwZT10aGlzLmRldGVjdENhcmRUeXBlKHRoaXMuY3JlZGl0Rm9ybS52YWx1ZS5wYXltZW50LmNhcmROdW1iZXIucmVwbGFjZSgvXFxzL2csIFwiXCIpKVxuICAgIHZhciBjYXJkU3RhdHVzID0gdGhpcy5jcmVkaXRGb3JtLmdldCgncGF5bWVudC5jYXJkTnVtYmVyJylcbiAgICBpZih0aGlzLmlzQ2FyZE51bWJlckxlbmd0aCAmJiBjYXJkU3RhdHVzPy5zdGF0dXMgPT0gXCJJTlZBTElEXCIpdGhpcy5pc0NhcmROdW1iZXJMZW5ndGg9ZmFsc2U7XG4gICAgaWYoIXRoaXMuaXNDYXJkTnVtYmVyTGVuZ3RoICYmIGNhcmRTdGF0dXM/LnN0YXR1cyA9PSBcIlZBTElEXCIpdGhpcy5pc0NhcmROdW1iZXJMZW5ndGg9dHJ1ZTtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0aGlzLmNyZWRpdEZvcm0pO1xuICB9XG4gIGNhcmRTZWxlY3RlZCh2YWw6YW55LGZyb206c3RyaW5nKXtcbiAgICB2YWw9IGZyb209PSdodG1sJyA/dmFsLnZhbHVlOnZhbDtcbiAgICB2YXIgc3RvcmVkQ2FyZCA9IHRoaXMuc3RvcmVkQ2FyZHMuZmluZCgoeDphbnkpID0+IHguaWQgPT0gdmFsKS5kZXNjcmlwdGlvblxuICAgIHRoaXMuY2FyZFR5cGU9c3RvcmVkQ2FyZC5zdWJzdHJpbmcoMCwgc3RvcmVkQ2FyZC5pbmRleE9mKCdlbmRpbmcnKS0xKVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTsgIFxuICAgIHRoaXMuY3JlZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAncGF5bWVudERhdGUnIDogW2RhdGUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSBdLFxuICAgICAgICAnZGVzY3JpcHRpb24nIDogW1wiSW52b2ljZSBubyA6ICNcIit0aGlzLnVzZXJEYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXJdLFxuICAgICAgICAncmVmZXJlbmNlJyA6IFsnSW52b2ljZSBubyA6ICMnK3RoaXMudXNlckRhdGEuaW52b2ljZURldGFpbHMuaW52b2ljZU51bWJlciwgXSxcbiAgICAgICAgJ3BheW1lbnRNZXRob2QnIDogW3RoaXMudXNlckRhdGEuY2FyZENoYXJnZXNbdGhpcy51c2VyRGF0YS5jYXJkQ2hhcmdlcy5sZW5ndGgtMV0ucGF5bWVudE1ldGhvZElkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnc3RvcmVkQ2FyZCcgOiBbdmFsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnY2FyZE5hbWUnIDogW3RoaXMudXNlckRhdGEuY3VzdG9tZXJEZXRhaWxzLmN1c3RvbWVyTmFtZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ2Ftb3VudCcgOiBbXSxcbiAgICAgICAgJ2NhcmRDaGFyZ2UnIDogW3RoaXMudXNlckRhdGEuY2FyZENoYXJnZXNbdGhpcy51c2VyRGF0YS5jYXJkQ2hhcmdlcy5sZW5ndGgtMV0uY2hhcmdlLCBdLFxuICAgICAgICAnaXNQb3J0YWwnIDogW3RydWVdLFxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodGhpcy5jcmVkaXRGb3JtKTtcbiAgICAgIH0sIDEwMCk7XG59XG5cbmRldGVjdENhcmRUeXBlKG51bWJlcjpudW1iZXIpIHtcbiAgdmFyIHJlIDphbnkgPSB7XG4gICAgICBlbGVjdHJvbjogL14oNDAyNnw0MTc1MDB8NDQwNXw0NTA4fDQ4NDR8NDkxM3w0OTE3KVxcZCskLyxcbiAgICAgIG1hZXN0cm86IC9eKDUwMTh8NTAyMHw1MDM4fDU2MTJ8NTg5M3w2MzA0fDY3NTl8Njc2MXw2NzYyfDY3NjN8MDYwNHw2MzkwKVxcZCskLyxcbiAgICAgIGRhbmtvcnQ6IC9eKDUwMTkpXFxkKyQvLFxuICAgICAgaW50ZXJwYXltZW50OiAvXig2MzYpXFxkKyQvLFxuICAgICAgdW5pb25wYXk6IC9eKDYyfDg4KVxcZCskLyxcbiAgICAgICdWaXNhJzogL140WzAtOV17MTJ9KD86WzAtOV17M30pPyQvLFxuICAgICAgJ01hc3RlckNhcmQnOiAvXjVbMS01XVswLTldezE0fSQvLFxuICAgICAgJ0FtZXJpY2FuIEV4cHJlc3MnOiAvXjNbNDddWzAtOV17MTN9JC8sXG4gICAgICBkaW5lcnM6IC9eMyg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9JC8sXG4gICAgICBkaXNjb3ZlcjogL142KD86MDExfDVbMC05XXsyfSlbMC05XXsxMn0kLyxcbiAgICAgIGpjYjogL14oPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSQvXG4gIH1cblxuICBmb3IodmFyIGtleSBpbiByZSkge1xuICAgICAgaWYocmVba2V5XS50ZXN0KG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIGtleVxuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTotMTZweFwiPlxuICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJkcm9wZG93bigkZXZlbnQudGFyZ2V0KVwiPlxuICAgICAgICA8b3B0aW9uPlVzZSBleGlzdGluZyBjcmVkaXQgY2FyZDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPlNldCB1cCBuZXcgZGViaXQgb3IgY3JlZGl0IGNhcmQ8L29wdGlvbj5cbiAgICA8L3NlbGVjdD48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInZoXCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiIHN0eWxlPVwibWFyZ2luLXRvcDozMnB4O21hcmdpbi1ib3R0b206IDA7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPlNlbGVjdCBjYXJkPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJjYXJkU2VsZWN0ZWQoJGV2ZW50LnRhcmdldCwnaHRtbCcpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPlBsZWFzZSBzZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiIWNhcmRcIj5cbiAgICA8Zm9ybSBjYXJkIGNvbnRhaW5lcj1cIi5jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY3JlZGl0LWNhcmQtaGlkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPkNhcmRob2xkZXLigJlzIG5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwiY29tcGFueU5hbWVTZWxlY3RlZFwiIGNsYXNzPVwibGFibGVcIj5Db21wYW55IG5hbWU8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZpZWxkXCIgdHlwZT1cInRleHRcIiBjYXJkLW5hbWUgKGtleXVwKT1cImtleXByZXNzKClcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LW5hbWUtbGlua1wiIChjbGljayk9XCJjb21wYW55TmFtZUNsaWNrKClcIj5PciBjbGljayBoZXJlIHRvIHVzZSBhIGNvbXBhbnkgbmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJjb21wYW55TmFtZVNlbGVjdGVkXCIgY2xhc3M9XCJjb21wYW55LW5hbWUtbGlua1wiIChjbGljayk9XCJjb21wYW55TmFtZUNsaWNrKClcIj5PciBjbGljayBoZXJlIHRvIHVzZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj5DYXJkIG51bWJlcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmaWVsZFwiIHR5cGU9XCJ0ZWxcIiBhdXRvY29tcGxldGU9XCJjYy1udW1iZXJcIiBjYXJkLW51bWJlciBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAoiDigKLigKLigKLigKIg4oCi4oCi4oCi4oCiIOKAouKAouKAouKAolwiIChrZXl1cCk9XCJzZXRDYXJkVHlwZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJjYXJkVHlwZVwiIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29udGVudC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlXCI+Q1ZDPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmaWVsZFwiIHR5cGU9XCJwYXNzd29yZFwiIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiIGNhcmQtY3ZjIHBsYWNlaG9sZGVyPVwiQ1ZDXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5cHJlc3MoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb250ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwidGVsXCIgYXV0b2NvbXBsZXRlPVwiY2MtZXhwXCIgY2FyZC1leHBpcnkgcGxhY2Vob2xkZXI9XCJNTS9ZWVwiIChrZXl1cCk9XCJrZXlwcmVzcygpXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWdyb3VwXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPkVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRS5nLiAxMjM0NTY3OFwiIChrZXl1cCk9XCJrZXlwcmVzcygpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1pbmZvXCI+VGhpcyBlbWFpbCB3aWxsIG9ubHkgYmUgdXNlZCB0byBrZWVwIHRoZSBjdXN0b21lciB1cGRhdGVkIGFib3V0IHRoZWlyIHBheW1lbnRzPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvZm9ybT5cbjwvZGl2PiJdfQ==