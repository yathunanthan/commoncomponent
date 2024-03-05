import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { CreditCardValidators } from 'angular-cc-library';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "ngx-card";
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
        this.cardLogo = '';
        this.cardImg = "";
    }
    ngOnInit() {
        this.payEmitter.emit(true);
    }
    dropdown(val) {
        this.cardType = false;
        this.payEmitter.emit(false);
        if (val == 'Set up new debit or credit card') {
            setTimeout(() => {
                this.card = false;
                this.buildCreditForms();
            }, 100);
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
                'amount': [],
                'cardCharge': [this.cardPaymentData.cardCharges['']],
                'cardName': [this.cardPaymentData.customerDetails.customerName, [Validators.required]],
                'cardNumber': ['', [Validators.required, CreditCardValidators.validateCCNumber]],
                'cardCvc': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]],
                'paymentDate': [date],
                'description': ["Invoice no : " + this.cardPaymentData.invoiceDetails.invoiceNumber],
                'isportal': [true],
                'reference': ['Invoice no : ' + this.cardPaymentData.invoiceDetails.invoiceNumber,],
                'email': [this.cardPaymentData.customerDetails.emailId, [Validators.required, Validators.email]],
                'expiry': ['', [Validators.required, CreditCardValidators.validateExpDate]],
                "paymentMethod": [this.cardPaymentData.cardCharges['']],
                "dontSendToAccounts": [''],
            })
        });
        this.placeholders = { name: this.cardPaymentData.customerDetails.customerName ? this.cardPaymentData.customerDetails.customerName : 'Full Name' };
    }
    companyNameClick() {
        this.companyNameSelected = !this.companyNameSelected;
        this.creditForm.patchValue({ 'payment': { 'cardName': '' } });
    }
    keypress() {
        this.payEmitter.emit(this.creditForm);
    }
    setCardType() {
        this.cardLogo = this.detectCardType(this.creditForm.value.payment.cardNumber.replace(/\s/g, ""));
        var cardStatus = this.creditForm.get('payment.cardNumber');
        if (this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "INVALID")
            this.isCardNumberLength = false;
        if (!this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "VALID")
            this.isCardNumberLength = true;
        this.payEmitter.emit(this.creditForm);
        this.cardImg = "assets/paymentType/" + this.cardLogo + ".svg";
    }
    defaultCard() {
        this.cardImg = "assets/paymentType/card.svg";
    }
    cardSelected(val, from) {
        val = from == 'html' ? val.value : val;
        var storedCard = this.storedCards.find((x) => x.id == val).description;
        this.cardType = storedCard.substring(0, storedCard.indexOf('ending') - 1);
        let date = new Date().toISOString().slice(0, 10);
        this.creditForm = this.fb.group({
            'paymentDate': [date, [Validators.required]],
            'description': ["Invoice no : #" + this.cardPaymentData.invoiceDetails.invoiceNumber],
            'reference': ['Invoice no : #' + this.cardPaymentData.invoiceDetails.invoiceNumber,],
            'paymentMethod': [this.cardPaymentData.cardCharges[this.cardPaymentData.cardCharges.length - 1].paymentMethodId, [Validators.required]],
            'storedCard': [val, [Validators.required]],
            'cardName': [this.cardPaymentData.customerDetails.customerName, [Validators.required]],
            'amount': [],
            'cardCharge': [this.cardPaymentData.cardCharges[this.cardPaymentData.cardCharges.length - 1].charge,],
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
PaymentCardDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", inputs: { cardPaymentData: "cardPaymentData" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"content-group\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form [formGroup]=\"creditForm\" card container=\".card-container\" [card-width]=\"410\" [messages]=\"messages\"\n        [placeholders]=\"placeholders\" [masks]=\"masks\" [formatting]=\"formatting\" [debug]=\"debug\">\n         <!-- <div formGroupName=\"payment\"> -->\n            <div class=\"row\">\n                <div class=\"col-md-6 credit-card-hide\">\n                    <div class=\"card-container\">\n\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"content-group\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"lable required\">Cardholder's name\n                        </div>\n                        <div *ngIf=\"companyNameSelected\" class=\"lable required\">Company name</div>\n                        <input class=\"field\" type=\"text\" card-name formControlName=\"cardName\" (keyup)=\"keypress()\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                        <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div>\n                    </div>\n                    <div class=\"content-group\">\n                        <div class=\"lable required\">Card number</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number\n                            formControlName=\"cardNumber\" maxlength=\"19\" placeholder=\"xxxx xxxx xxxx xxxx\"\n                            (keyup)=\"setCardType()\" [class.error_field]=\"!isCardNumberLength\">\n                        <img *ngIf=\"cardLogo\" class=\"icon-align\" src=\"{{cardImg}}\" (error)=\"defaultCard()\"\n                            alt=\"card name\">\n                    </div>\n                    <div class=\"row row-group\">\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">CVC</div>\n                            <input class=\"field\" type=\"password\" autocomplete=\"new-password\" pattern=\"[0-9]*\"\n                                inputmode=\"numeric\" card-cvc placeholder=\"xxx\" formControlName=\"cardCvc\"\n                                (keyup)=\"keypress()\">\n                        </div>\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">Exp date</div>\n                            <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry formControlName=\"expiry\"\n                                placeholder=\"MM / YY\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-group\" style=\"margin-bottom: 0;\">\n                <div class=\"lable required\">Email address</div>\n                <input class=\"field\" formControlName=\"email\" type=\"email\" (keyup)=\"keypress()\">\n                <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n            </div>\n        <!-- </div> -->\n    </form>\n</div>\n", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"], directives: [{ type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.NgxCard, selector: "[card]", inputs: ["formatting", "debug", "messages", "placeholders", "container", "card-width", "masks"] }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgxCardNameTemplate, selector: "[card-name]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.NgxCardNumberTemplate, selector: "[card-number]" }, { type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i3.NgxCardCvcTemplate, selector: "[card-cvc]" }, { type: i3.NgxCardExpiryTemplate, selector: "[card-expiry]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCardDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-card-details',
                    templateUrl: './payment-card-details.component.html',
                    styleUrls: ['./payment-card-details.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { payEmitter: [{
                type: Output
            }], cardPaymentData: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFyZW50cGF5bWVudC9zcmMvbGliL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPMUQsTUFBTSxPQUFPLDJCQUEyQjtJQVN0QyxZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUmYsZUFBVSxHQUFxQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLGdCQUFXLEdBQU0sRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBTSxFQUFFLENBQUM7UUFNakIsU0FBSSxHQUFTLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGFBQVEsR0FBUSxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUUseUJBQXlCO1FBQzFGLGlCQUFZLEdBQVEsRUFBQyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVB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QyxDQUFBO1FBRUQsS0FBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLEVBQUU7WUFDZixJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxDQUFBO2FBQ1g7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7eUhBNUlZLDJCQUEyQjs2R0FBM0IsMkJBQTJCLHVKQ1R4QywwNkhBa0VBOzRGRHpEYSwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztvQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7aUJBQ3JEO2tHQUdXLFVBQVU7c0JBQW5CLE1BQU07Z0JBS0UsZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dCAsT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ3JlZGl0Q2FyZFZhbGlkYXRvcnMgfSBmcm9tICdhbmd1bGFyLWNjLWxpYnJhcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGF5bWVudC1jYXJkLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRDYXJkRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB1c2VyRGF0YTogYW55O1xuICBzdG9yZWRDYXJkczogYW55PVtdO1xuICBjYXJkVHlwZTogYW55PScnO1xuICBASW5wdXQoKSBjYXJkUGF5bWVudERhdGE6YW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICApIHsgfVxuICBjYXJkOmJvb2xlYW49ZmFsc2U7XG4gIGNvbnRhaW5lcjogYW55O1xuICBjYXJkd2lkdGg6IE51bWJlciA9IDM1MDtcbiAgbWVzc2FnZXM6IGFueSA9IHt2YWxpZERhdGU6ICd2YWxpZFxcbmRhdGUnLCBtb250aFllYXI6ICdtbS95eSd9OyAgLy9TdHJpbmdzIGZvciB0cmFuc2xhdGlvblxuICBwbGFjZWhvbGRlcnM6IGFueSA9IHtudW1iZXI6ICfigKLigKLigKLigKIg4oCi4oCi4oCi4oCiIOKAouKAouKAouKAoiDigKLigKLigKLigKInLCBuYW1lOiAnRnVsbCBOYW1lJywgZXhwaXJ5OiAn4oCi4oCiL+KAouKAoicsIGN2YzogJ+KAouKAouKAoid9IC8vIFBsYWNlaG9sZGVycyBmb3IgcmVuZGVyZWQgZmllbGRzXG4gIG1hc2tzOiBhbnk7XG4gIGZvcm1hdHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBkZWJ1ZzogYm9vbGVhbiA9IHRydWU7IC8vIElmIHRydWUsIHdpbGwgbG9nIGhlbHBmdWwgbWVzc2FnZXMgZm9yIHNldHRpbmcgdXAgQ2FyZFxuICBjcmVkaXRGb3JtITogRm9ybUdyb3VwO1xuICBzdW1tYXJ5OiBhbnk7XG4gIGNvbXBhbnlOYW1lU2VsZWN0ZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgaXNDYXJkTnVtYmVyTGVuZ3RoOiBib29sZWFuPXRydWU7XG4gIGNhcmRMb2dvOiBhbnk9Jyc7XG4gIGNhcmRJbWc6IHN0cmluZyA9IFwiXCI7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGRyb3Bkb3duKHZhbDphbnkpe1xuICAgIHRoaXMuY2FyZFR5cGU9ZmFsc2U7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQoZmFsc2UpO1xuICAgIGlmKHZhbCA9PSAnU2V0IHVwIG5ldyBkZWJpdCBvciBjcmVkaXQgY2FyZCcpe1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgdGhpcy5jYXJkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5idWlsZENyZWRpdEZvcm1zKClcbiAgICAgICAgfSwxMDApO1xuICAgIH1cbiAgICAvLyB0aGlzLnRyYW5zbGF0ZS5nZXQoXCJVc2UgZXhpc3RpbmcgY3JlZGl0IGNhcmRcIikuc3Vic2NyaWJlKHRyYW5zbGF0aW9ucyA9PiB7XG4gICAgLy8gICBpZih2YWwudmFsdWU9PSB0cmFuc2xhdGlvbnMpe1xuICAgIC8vICAgICB0aGlzLmNhcmQ9dHJ1ZVxuICAgIC8vICAgICBpZih0aGlzLnN0b3JlZENhcmRzLmxlbmd0aCA9PSAxKXtcbiAgICAvLyAgICAgICB0aGlzLmNhcmRTZWxlY3RlZCh0aGlzLnN0b3JlZENhcmRzWzBdLmlkLCd0cycpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGVsc2V7XG4gICAgLy8gICAgIHRoaXMuY2FyZD1mYWxzZVxuICAgIC8vICAgICB0aGlzLmJ1aWxkQ3JlZGl0Rm9ybXMoKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG5cbiAgfVxuXG4gIGJ1aWxkQ3JlZGl0Rm9ybXMoKXtcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5jcmVkaXRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBwYXltZW50OiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICdhbW91bnQnOiBbXSxcbiAgICAgICdjYXJkQ2hhcmdlJzogW3RoaXMuY2FyZFBheW1lbnREYXRhLmNhcmRDaGFyZ2VzWycnXSBdLC8vaW5kZXggVUkgbmVlZGVkXG4gICAgICAnY2FyZE5hbWUnOiBbdGhpcy5jYXJkUGF5bWVudERhdGEuY3VzdG9tZXJEZXRhaWxzLmN1c3RvbWVyTmFtZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdIF0sXG4gICAgICAnY2FyZE51bWJlcic6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIENyZWRpdENhcmRWYWxpZGF0b3JzLnZhbGlkYXRlQ0NOdW1iZXJdXSxcbiAgICAgICdjYXJkQ3ZjJzogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQpXV0sXG4gICAgICAncGF5bWVudERhdGUnOiBbZGF0ZV0sXG4gICAgICAnZGVzY3JpcHRpb24nOiBbXCJJbnZvaWNlIG5vIDogXCIrdGhpcy5jYXJkUGF5bWVudERhdGEuaW52b2ljZURldGFpbHMuaW52b2ljZU51bWJlcl0sXG4gICAgICAnaXNwb3J0YWwnOiBbdHJ1ZSBdLFxuICAgICAgJ3JlZmVyZW5jZSc6IFsnSW52b2ljZSBubyA6ICcrdGhpcy5jYXJkUGF5bWVudERhdGEuaW52b2ljZURldGFpbHMuaW52b2ljZU51bWJlciwgXSxcbiAgICAgICdlbWFpbCc6IFt0aGlzLmNhcmRQYXltZW50RGF0YS5jdXN0b21lckRldGFpbHMuZW1haWxJZCxbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgJ2V4cGlyeSc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIENyZWRpdENhcmRWYWxpZGF0b3JzLnZhbGlkYXRlRXhwRGF0ZV1dLFxuXG4gICAgICBcInBheW1lbnRNZXRob2RcIjpbdGhpcy5jYXJkUGF5bWVudERhdGEuY2FyZENoYXJnZXNbJyddXSxcbiAgICAgIFwiZG9udFNlbmRUb0FjY291bnRzXCI6WycnXSxcbiAgICAgIH0pXG5cbiAgICB9KTtcbiAgICB0aGlzLnBsYWNlaG9sZGVycyA9IHtuYW1lOiB0aGlzLmNhcmRQYXltZW50RGF0YS5jdXN0b21lckRldGFpbHMuY3VzdG9tZXJOYW1lP3RoaXMuY2FyZFBheW1lbnREYXRhLmN1c3RvbWVyRGV0YWlscy5jdXN0b21lck5hbWU6J0Z1bGwgTmFtZSd9O1xuICB9XG5cbiAgY29tcGFueU5hbWVDbGljaygpe1xuICAgIHRoaXMuY29tcGFueU5hbWVTZWxlY3RlZD0hdGhpcy5jb21wYW55TmFtZVNlbGVjdGVkO1xuICAgIHRoaXMuY3JlZGl0Rm9ybS5wYXRjaFZhbHVlKHsncGF5bWVudCc6eydjYXJkTmFtZSc6Jyd9fSk7XG4gIH1cbiAga2V5cHJlc3MoKXtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0aGlzLmNyZWRpdEZvcm0pO1xuICB9XG4gIHNldENhcmRUeXBlKCl7XG4gICAgdGhpcy5jYXJkTG9nbz10aGlzLmRldGVjdENhcmRUeXBlKHRoaXMuY3JlZGl0Rm9ybS52YWx1ZS5wYXltZW50LmNhcmROdW1iZXIucmVwbGFjZSgvXFxzL2csIFwiXCIpKVxuICAgIHZhciBjYXJkU3RhdHVzID0gdGhpcy5jcmVkaXRGb3JtLmdldCgncGF5bWVudC5jYXJkTnVtYmVyJylcbiAgICBpZih0aGlzLmlzQ2FyZE51bWJlckxlbmd0aCAmJiBjYXJkU3RhdHVzPy5zdGF0dXMgPT0gXCJJTlZBTElEXCIpdGhpcy5pc0NhcmROdW1iZXJMZW5ndGg9ZmFsc2U7XG4gICAgaWYoIXRoaXMuaXNDYXJkTnVtYmVyTGVuZ3RoICYmIGNhcmRTdGF0dXM/LnN0YXR1cyA9PSBcIlZBTElEXCIpdGhpcy5pc0NhcmROdW1iZXJMZW5ndGg9dHJ1ZTtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0aGlzLmNyZWRpdEZvcm0pO1xuICAgIHRoaXMuY2FyZEltZyA9IFwiYXNzZXRzL3BheW1lbnRUeXBlL1wiK3RoaXMuY2FyZExvZ28rXCIuc3ZnXCJcbiAgfVxuICBkZWZhdWx0Q2FyZCgpe1xuICAgIHRoaXMuY2FyZEltZyA9IFwiYXNzZXRzL3BheW1lbnRUeXBlL2NhcmQuc3ZnXCJcbiAgfVxuICBjYXJkU2VsZWN0ZWQodmFsOmFueSxmcm9tOnN0cmluZyl7XG4gICAgdmFsPSBmcm9tPT0naHRtbCcgP3ZhbC52YWx1ZTp2YWw7XG4gICAgdmFyIHN0b3JlZENhcmQgPSB0aGlzLnN0b3JlZENhcmRzLmZpbmQoKHg6YW55KSA9PiB4LmlkID09IHZhbCkuZGVzY3JpcHRpb25cbiAgICB0aGlzLmNhcmRUeXBlPXN0b3JlZENhcmQuc3Vic3RyaW5nKDAsIHN0b3JlZENhcmQuaW5kZXhPZignZW5kaW5nJyktMSlcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5jcmVkaXRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgICdwYXltZW50RGF0ZScgOiBbZGF0ZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdIF0sXG4gICAgICAgICdkZXNjcmlwdGlvbicgOiBbXCJJbnZvaWNlIG5vIDogI1wiK3RoaXMuY2FyZFBheW1lbnREYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXJdLFxuICAgICAgICAncmVmZXJlbmNlJyA6IFsnSW52b2ljZSBubyA6ICMnK3RoaXMuY2FyZFBheW1lbnREYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXIsIF0sXG4gICAgICAgICdwYXltZW50TWV0aG9kJyA6IFt0aGlzLmNhcmRQYXltZW50RGF0YS5jYXJkQ2hhcmdlc1t0aGlzLmNhcmRQYXltZW50RGF0YS5jYXJkQ2hhcmdlcy5sZW5ndGgtMV0ucGF5bWVudE1ldGhvZElkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnc3RvcmVkQ2FyZCcgOiBbdmFsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnY2FyZE5hbWUnIDogW3RoaXMuY2FyZFBheW1lbnREYXRhLmN1c3RvbWVyRGV0YWlscy5jdXN0b21lck5hbWUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgICdhbW91bnQnIDogW10sXG4gICAgICAgICdjYXJkQ2hhcmdlJyA6IFt0aGlzLmNhcmRQYXltZW50RGF0YS5jYXJkQ2hhcmdlc1t0aGlzLmNhcmRQYXltZW50RGF0YS5jYXJkQ2hhcmdlcy5sZW5ndGgtMV0uY2hhcmdlLCBdLFxuICAgICAgICAnaXNQb3J0YWwnIDogW3RydWVdLFxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodGhpcy5jcmVkaXRGb3JtKTtcbiAgICAgIH0sIDEwMCk7XG59XG5cbmRldGVjdENhcmRUeXBlKG51bWJlcjpudW1iZXIpIHtcbiAgdmFyIHJlIDphbnkgPSB7XG4gICAgICBlbGVjdHJvbjogL14oNDAyNnw0MTc1MDB8NDQwNXw0NTA4fDQ4NDR8NDkxM3w0OTE3KVxcZCskLyxcbiAgICAgIG1hZXN0cm86IC9eKDUwMTh8NTAyMHw1MDM4fDU2MTJ8NTg5M3w2MzA0fDY3NTl8Njc2MXw2NzYyfDY3NjN8MDYwNHw2MzkwKVxcZCskLyxcbiAgICAgIGRhbmtvcnQ6IC9eKDUwMTkpXFxkKyQvLFxuICAgICAgaW50ZXJwYXltZW50OiAvXig2MzYpXFxkKyQvLFxuICAgICAgdW5pb25wYXk6IC9eKDYyfDg4KVxcZCskLyxcbiAgICAgICdWaXNhJzogL140WzAtOV17MTJ9KD86WzAtOV17M30pPyQvLFxuICAgICAgJ01hc3RlckNhcmQnOiAvXjVbMS01XVswLTldezE0fSQvLFxuICAgICAgJ0FtZXJpY2FuIEV4cHJlc3MnOiAvXjNbNDddWzAtOV17MTN9JC8sXG4gICAgICBkaW5lcnM6IC9eMyg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9JC8sXG4gICAgICBkaXNjb3ZlcjogL142KD86MDExfDVbMC05XXsyfSlbMC05XXsxMn0kLyxcbiAgICAgIGpjYjogL14oPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSQvXG4gIH1cblxuICBmb3IodmFyIGtleSBpbiByZSkge1xuICAgICAgaWYocmVba2V5XS50ZXN0KG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIGtleVxuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTotMTZweFwiPlxuICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJkcm9wZG93bigkZXZlbnQudGFyZ2V0KVwiPlxuICAgICAgICA8b3B0aW9uPlVzZSBleGlzdGluZyBjcmVkaXQgY2FyZDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uPlNldCB1cCBuZXcgZGViaXQgb3IgY3JlZGl0IGNhcmQ8L29wdGlvbj5cbiAgICA8L3NlbGVjdD48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInZoXCI+PC9kaXY+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiIHN0eWxlPVwibWFyZ2luLXRvcDozMnB4O21hcmdpbi1ib3R0b206IDA7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZVwiPlNlbGVjdCBjYXJkPC9kaXY+XG4gICAgICAgIDxzZWxlY3QgKGNoYW5nZSk9XCJjYXJkU2VsZWN0ZWQoJGV2ZW50LnRhcmdldCwnaHRtbCcpXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQgc2VsZWN0ZWQgaGlkZGVuPlBsZWFzZSBzZWxlY3Q8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwiIWNhcmRcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImNyZWRpdEZvcm1cIiBjYXJkIGNvbnRhaW5lcj1cIi5jYXJkLWNvbnRhaW5lclwiIFtjYXJkLXdpZHRoXT1cIjQxMFwiIFttZXNzYWdlc109XCJtZXNzYWdlc1wiXG4gICAgICAgIFtwbGFjZWhvbGRlcnNdPVwicGxhY2Vob2xkZXJzXCIgW21hc2tzXT1cIm1hc2tzXCIgW2Zvcm1hdHRpbmddPVwiZm9ybWF0dGluZ1wiIFtkZWJ1Z109XCJkZWJ1Z1wiPlxuICAgICAgICAgPCEtLSA8ZGl2IGZvcm1Hcm91cE5hbWU9XCJwYXltZW50XCI+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjcmVkaXQtY2FyZC1oaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFjb21wYW55TmFtZVNlbGVjdGVkXCIgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkNhcmRob2xkZXIncyBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb21wYW55TmFtZVNlbGVjdGVkXCIgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkNvbXBhbnkgbmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwidGV4dFwiIGNhcmQtbmFtZSBmb3JtQ29udHJvbE5hbWU9XCJjYXJkTmFtZVwiIChrZXl1cCk9XCJrZXlwcmVzcygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWNvbXBhbnlOYW1lU2VsZWN0ZWRcIiBjbGFzcz1cImNvbXBhbnktbmFtZS1saW5rXCIgKGNsaWNrKT1cImNvbXBhbnlOYW1lQ2xpY2soKVwiPk9yIGNsaWNrIGhlcmUgdG8gdXNlIGEgY29tcGFueSBuYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29tcGFueU5hbWVTZWxlY3RlZFwiIGNsYXNzPVwiY29tcGFueS1uYW1lLWxpbmtcIiAoY2xpY2spPVwiY29tcGFueU5hbWVDbGljaygpXCI+T3IgY2xpY2sgaGVyZSB0byB1c2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkNhcmQgbnVtYmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmaWVsZFwiIHR5cGU9XCJ0ZWxcIiBhdXRvY29tcGxldGU9XCJjYy1udW1iZXJcIiBjYXJkLW51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNhcmROdW1iZXJcIiBtYXhsZW5ndGg9XCIxOVwiIHBsYWNlaG9sZGVyPVwieHh4eCB4eHh4IHh4eHggeHh4eFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cInNldENhcmRUeXBlKClcIiBbY2xhc3MuZXJyb3JfZmllbGRdPVwiIWlzQ2FyZE51bWJlckxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImNhcmRMb2dvXCIgY2xhc3M9XCJpY29uLWFsaWduXCIgc3JjPVwie3tjYXJkSW1nfX1cIiAoZXJyb3IpPVwiZGVmYXVsdENhcmQoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2FyZCBuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb250ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlIHJlcXVpcmVkXCI+Q1ZDPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwicGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJuZXctcGFzc3dvcmRcIiBwYXR0ZXJuPVwiWzAtOV0qXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRtb2RlPVwibnVtZXJpY1wiIGNhcmQtY3ZjIHBsYWNlaG9sZGVyPVwieHh4XCIgZm9ybUNvbnRyb2xOYW1lPVwiY2FyZEN2Y1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJrZXlwcmVzcygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29udGVudC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkV4cCBkYXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwidGVsXCIgYXV0b2NvbXBsZXRlPVwiY2MtZXhwXCIgY2FyZC1leHBpcnkgZm9ybUNvbnRyb2xOYW1lPVwiZXhwaXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNTSAvIFlZXCIgKGtleXVwKT1cImtleXByZXNzKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDA7XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmxlIHJlcXVpcmVkXCI+RW1haWwgYWRkcmVzczwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZpZWxkXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiAoa2V5dXApPVwia2V5cHJlc3MoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbWFpbC1pbmZvXCI+VGhpcyBlbWFpbCB3aWxsIG9ubHkgYmUgdXNlZCB0byBrZWVwIHlvdSB1cGRhdGVkIGFib3V0IHRoZWlyIHBheW1lbnRzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XG4gICAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=