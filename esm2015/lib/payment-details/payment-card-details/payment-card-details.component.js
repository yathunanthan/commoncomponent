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
PaymentCardDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", inputs: { cardPaymentData: "cardPaymentData" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"content-group\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form [formGroup]=\"creditForm\" card container=\".card-container\" [card-width]=\"410\" [messages]=\"messages\"\n        [placeholders]=\"placeholders\" [masks]=\"masks\" [formatting]=\"formatting\" [debug]=\"debug\">\n         <div formGroupName=\"payment\">\n            <div class=\"row\">\n                <div class=\"col-md-6 credit-card-hide\">\n                    <div class=\"card-container\">\n\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"content-group\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"lable required\">Cardholder's name\n                        </div>\n                        <div *ngIf=\"companyNameSelected\" class=\"lable required\">Company name</div>\n                        <input class=\"field\" type=\"text\" card-name formControlName=\"cardName\" (keyup)=\"keypress()\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                        <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div>\n                    </div>\n                    <div class=\"content-group\">\n                        <div class=\"lable required\">Card number</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number\n                            formControlName=\"cardNumber\" maxlength=\"19\" placeholder=\"xxxx xxxx xxxx xxxx\"\n                            (keyup)=\"setCardType()\" [class.error_field]=\"!isCardNumberLength\">\n                        <img *ngIf=\"cardLogo\" class=\"icon-align\" src=\"{{cardImg}}\" (error)=\"defaultCard()\"\n                            alt=\"card name\">\n                    </div>\n                    <div class=\"row row-group\">\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">CVC</div>\n                            <input class=\"field\" type=\"password\" autocomplete=\"new-password\" pattern=\"[0-9]*\"\n                                inputmode=\"numeric\" card-cvc placeholder=\"xxx\" formControlName=\"cardCvc\"\n                                (keyup)=\"keypress()\">\n                        </div>\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">Exp date</div>\n                            <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry formControlName=\"expiry\"\n                                placeholder=\"MM / YY\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-group\" style=\"margin-bottom: 0;\">\n                <div class=\"lable required\">Email address</div>\n                <input class=\"field\" formControlName=\"email\" type=\"email\" (keyup)=\"keypress()\">\n                <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n            </div>\n        </div>\n    </form>\n</div>\n", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"], directives: [{ type: i1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3.NgxCard, selector: "[card]", inputs: ["formatting", "debug", "messages", "placeholders", "container", "card-width", "masks"] }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgxCardNameTemplate, selector: "[card-name]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3.NgxCardNumberTemplate, selector: "[card-number]" }, { type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i3.NgxCardCvcTemplate, selector: "[card-cvc]" }, { type: i3.NgxCardExpiryTemplate, selector: "[card-expiry]" }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFyZW50cGF5bWVudC9zcmMvbGliL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF1QyxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFPMUQsTUFBTSxPQUFPLDJCQUEyQjtJQVN0QyxZQUNVLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBUmYsZUFBVSxHQUFxQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBR2pFLGdCQUFXLEdBQU0sRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBTSxFQUFFLENBQUM7UUFNakIsU0FBSSxHQUFTLEtBQUssQ0FBQztRQUVuQixjQUFTLEdBQVcsR0FBRyxDQUFDO1FBQ3hCLGFBQVEsR0FBUSxFQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUUseUJBQXlCO1FBQzFGLGlCQUFZLEdBQVEsRUFBQyxNQUFNLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVB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Q0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxDQUFBO2FBQ1g7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7eUhBMUlZLDJCQUEyQjs2R0FBM0IsMkJBQTJCLHVKQ1R4Qyx3NUhBa0VBOzRGRHpEYSwyQkFBMkI7a0JBTHZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztvQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7aUJBQ3JEO2tHQUdXLFVBQVU7c0JBQW5CLE1BQU07Z0JBS0UsZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICxJbnB1dCAsT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ3JlZGl0Q2FyZFZhbGlkYXRvcnMgfSBmcm9tICdhbmd1bGFyLWNjLWxpYnJhcnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGF5bWVudC1jYXJkLWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRDYXJkRGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB1c2VyRGF0YTogYW55O1xuICBzdG9yZWRDYXJkczogYW55PVtdO1xuICBjYXJkVHlwZTogYW55PScnO1xuICBASW5wdXQoKSBjYXJkUGF5bWVudERhdGE6YW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICApIHsgfVxuICBjYXJkOmJvb2xlYW49ZmFsc2U7XG4gIGNvbnRhaW5lcjogYW55O1xuICBjYXJkd2lkdGg6IE51bWJlciA9IDM1MDtcbiAgbWVzc2FnZXM6IGFueSA9IHt2YWxpZERhdGU6ICd2YWxpZFxcbmRhdGUnLCBtb250aFllYXI6ICdtbS95eSd9OyAgLy9TdHJpbmdzIGZvciB0cmFuc2xhdGlvblxuICBwbGFjZWhvbGRlcnM6IGFueSA9IHtudW1iZXI6ICfigKLigKLigKLigKIg4oCi4oCi4oCi4oCiIOKAouKAouKAouKAoiDigKLigKLigKLigKInLCBuYW1lOiAnRnVsbCBOYW1lJywgZXhwaXJ5OiAn4oCi4oCiL+KAouKAoicsIGN2YzogJ+KAouKAouKAoid9IC8vIFBsYWNlaG9sZGVycyBmb3IgcmVuZGVyZWQgZmllbGRzXG4gIG1hc2tzOiBhbnk7XG4gIGZvcm1hdHRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBkZWJ1ZzogYm9vbGVhbiA9IHRydWU7IC8vIElmIHRydWUsIHdpbGwgbG9nIGhlbHBmdWwgbWVzc2FnZXMgZm9yIHNldHRpbmcgdXAgQ2FyZFxuICBjcmVkaXRGb3JtITogRm9ybUdyb3VwO1xuICBzdW1tYXJ5OiBhbnk7XG4gIGNvbXBhbnlOYW1lU2VsZWN0ZWQ6Ym9vbGVhbj1mYWxzZTtcbiAgaXNDYXJkTnVtYmVyTGVuZ3RoOiBib29sZWFuPXRydWU7XG4gIGNhcmRMb2dvOiBhbnk9Jyc7XG4gIGNhcmRJbWc6IHN0cmluZyA9IFwiXCI7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIGRyb3Bkb3duKHZhbDphbnkpe1xuICAgIHRoaXMuY2FyZFR5cGU9ZmFsc2U7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQoZmFsc2UpO1xuICAgIGlmKHZhbCA9PSAnU2V0IHVwIG5ldyBkZWJpdCBvciBjcmVkaXQgY2FyZCcpe1xuICAgICAgICB0aGlzLmNhcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWlsZENyZWRpdEZvcm1zKClcbiAgICB9XG4gICAgLy8gdGhpcy50cmFuc2xhdGUuZ2V0KFwiVXNlIGV4aXN0aW5nIGNyZWRpdCBjYXJkXCIpLnN1YnNjcmliZSh0cmFuc2xhdGlvbnMgPT4ge1xuICAgIC8vICAgaWYodmFsLnZhbHVlPT0gdHJhbnNsYXRpb25zKXtcbiAgICAvLyAgICAgdGhpcy5jYXJkPXRydWVcbiAgICAvLyAgICAgaWYodGhpcy5zdG9yZWRDYXJkcy5sZW5ndGggPT0gMSl7XG4gICAgLy8gICAgICAgdGhpcy5jYXJkU2VsZWN0ZWQodGhpcy5zdG9yZWRDYXJkc1swXS5pZCwndHMnKVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBlbHNle1xuICAgIC8vICAgICB0aGlzLmNhcmQ9ZmFsc2VcbiAgICAvLyAgICAgdGhpcy5idWlsZENyZWRpdEZvcm1zKClcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuXG4gIH1cblxuICBidWlsZENyZWRpdEZvcm1zKCl7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuY3JlZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgcGF5bWVudDogdGhpcy5mYi5ncm91cCh7XG4gICAgICAnYW1vdW50JzogW10sXG4gICAgICAnY2FyZENoYXJnZSc6IFt0aGlzLmNhcmRQYXltZW50RGF0YS5jYXJkQ2hhcmdlc1snJ10gXSwvL2luZGV4IFVJIG5lZWRlZFxuICAgICAgJ2NhcmROYW1lJzogW3RoaXMuY2FyZFBheW1lbnREYXRhLmN1c3RvbWVyRGV0YWlscy5jdXN0b21lck5hbWUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSBdLFxuICAgICAgJ2NhcmROdW1iZXInOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDcmVkaXRDYXJkVmFsaWRhdG9ycy52YWxpZGF0ZUNDTnVtYmVyXV0sXG4gICAgICAnY2FyZEN2Yyc6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxuICAgICAgJ3BheW1lbnREYXRlJzogW2RhdGVdLFxuICAgICAgJ2Rlc2NyaXB0aW9uJzogW1wiSW52b2ljZSBubyA6IFwiK3RoaXMuY2FyZFBheW1lbnREYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXJdLFxuICAgICAgJ2lzcG9ydGFsJzogW3RydWUgXSxcbiAgICAgICdyZWZlcmVuY2UnOiBbJ0ludm9pY2Ugbm8gOiAnK3RoaXMuY2FyZFBheW1lbnREYXRhLmludm9pY2VEZXRhaWxzLmludm9pY2VOdW1iZXIsIF0sXG4gICAgICAnZW1haWwnOiBbdGhpcy5jYXJkUGF5bWVudERhdGEuY3VzdG9tZXJEZXRhaWxzLmVtYWlsSWQsW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICAgICdleHBpcnknOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDcmVkaXRDYXJkVmFsaWRhdG9ycy52YWxpZGF0ZUV4cERhdGVdXSxcblxuICAgICAgXCJwYXltZW50TWV0aG9kXCI6W3RoaXMuY2FyZFBheW1lbnREYXRhLmNhcmRDaGFyZ2VzWycnXV0sXG4gICAgICBcImRvbnRTZW5kVG9BY2NvdW50c1wiOlsnJ10sXG4gICAgICB9KVxuXG4gICAgfSk7XG4gICAgdGhpcy5wbGFjZWhvbGRlcnMgPSB7bmFtZTogdGhpcy5jYXJkUGF5bWVudERhdGEuY3VzdG9tZXJEZXRhaWxzLmN1c3RvbWVyTmFtZT90aGlzLmNhcmRQYXltZW50RGF0YS5jdXN0b21lckRldGFpbHMuY3VzdG9tZXJOYW1lOidGdWxsIE5hbWUnfTtcbiAgfVxuXG4gIGNvbXBhbnlOYW1lQ2xpY2soKXtcbiAgICB0aGlzLmNvbXBhbnlOYW1lU2VsZWN0ZWQ9IXRoaXMuY29tcGFueU5hbWVTZWxlY3RlZDtcbiAgICB0aGlzLmNyZWRpdEZvcm0ucGF0Y2hWYWx1ZSh7J3BheW1lbnQnOnsnY2FyZE5hbWUnOicnfX0pO1xuICB9XG4gIGtleXByZXNzKCl7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodGhpcy5jcmVkaXRGb3JtKTtcbiAgfVxuICBzZXRDYXJkVHlwZSgpe1xuICAgIHRoaXMuY2FyZExvZ289dGhpcy5kZXRlY3RDYXJkVHlwZSh0aGlzLmNyZWRpdEZvcm0udmFsdWUucGF5bWVudC5jYXJkTnVtYmVyLnJlcGxhY2UoL1xccy9nLCBcIlwiKSlcbiAgICB2YXIgY2FyZFN0YXR1cyA9IHRoaXMuY3JlZGl0Rm9ybS5nZXQoJ3BheW1lbnQuY2FyZE51bWJlcicpXG4gICAgaWYodGhpcy5pc0NhcmROdW1iZXJMZW5ndGggJiYgY2FyZFN0YXR1cz8uc3RhdHVzID09IFwiSU5WQUxJRFwiKXRoaXMuaXNDYXJkTnVtYmVyTGVuZ3RoPWZhbHNlO1xuICAgIGlmKCF0aGlzLmlzQ2FyZE51bWJlckxlbmd0aCAmJiBjYXJkU3RhdHVzPy5zdGF0dXMgPT0gXCJWQUxJRFwiKXRoaXMuaXNDYXJkTnVtYmVyTGVuZ3RoPXRydWU7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodGhpcy5jcmVkaXRGb3JtKTtcbiAgICB0aGlzLmNhcmRJbWcgPSBcImFzc2V0cy9wYXltZW50VHlwZS9cIit0aGlzLmNhcmRMb2dvK1wiLnN2Z1wiXG4gIH1cbiAgZGVmYXVsdENhcmQoKXtcbiAgICB0aGlzLmNhcmRJbWcgPSBcImFzc2V0cy9wYXltZW50VHlwZS9jYXJkLnN2Z1wiXG4gIH1cbiAgY2FyZFNlbGVjdGVkKHZhbDphbnksZnJvbTpzdHJpbmcpe1xuICAgIHZhbD0gZnJvbT09J2h0bWwnID92YWwudmFsdWU6dmFsO1xuICAgIHZhciBzdG9yZWRDYXJkID0gdGhpcy5zdG9yZWRDYXJkcy5maW5kKCh4OmFueSkgPT4geC5pZCA9PSB2YWwpLmRlc2NyaXB0aW9uXG4gICAgdGhpcy5jYXJkVHlwZT1zdG9yZWRDYXJkLnN1YnN0cmluZygwLCBzdG9yZWRDYXJkLmluZGV4T2YoJ2VuZGluZycpLTEpXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuY3JlZGl0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgICAncGF5bWVudERhdGUnIDogW2RhdGUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSBdLFxuICAgICAgICAnZGVzY3JpcHRpb24nIDogW1wiSW52b2ljZSBubyA6ICNcIit0aGlzLmNhcmRQYXltZW50RGF0YS5pbnZvaWNlRGV0YWlscy5pbnZvaWNlTnVtYmVyXSxcbiAgICAgICAgJ3JlZmVyZW5jZScgOiBbJ0ludm9pY2Ugbm8gOiAjJyt0aGlzLmNhcmRQYXltZW50RGF0YS5pbnZvaWNlRGV0YWlscy5pbnZvaWNlTnVtYmVyLCBdLFxuICAgICAgICAncGF5bWVudE1ldGhvZCcgOiBbdGhpcy5jYXJkUGF5bWVudERhdGEuY2FyZENoYXJnZXNbdGhpcy5jYXJkUGF5bWVudERhdGEuY2FyZENoYXJnZXMubGVuZ3RoLTFdLnBheW1lbnRNZXRob2RJZCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ3N0b3JlZENhcmQnIDogW3ZhbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgJ2NhcmROYW1lJyA6IFt0aGlzLmNhcmRQYXltZW50RGF0YS5jdXN0b21lckRldGFpbHMuY3VzdG9tZXJOYW1lLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICAnYW1vdW50JyA6IFtdLFxuICAgICAgICAnY2FyZENoYXJnZScgOiBbdGhpcy5jYXJkUGF5bWVudERhdGEuY2FyZENoYXJnZXNbdGhpcy5jYXJkUGF5bWVudERhdGEuY2FyZENoYXJnZXMubGVuZ3RoLTFdLmNoYXJnZSwgXSxcbiAgICAgICAgJ2lzUG9ydGFsJyA6IFt0cnVlXSxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHRoaXMuY3JlZGl0Rm9ybSk7XG4gICAgICB9LCAxMDApO1xufVxuXG5kZXRlY3RDYXJkVHlwZShudW1iZXI6bnVtYmVyKSB7XG4gIHZhciByZSA6YW55ID0ge1xuICAgICAgZWxlY3Ryb246IC9eKDQwMjZ8NDE3NTAwfDQ0MDV8NDUwOHw0ODQ0fDQ5MTN8NDkxNylcXGQrJC8sXG4gICAgICBtYWVzdHJvOiAvXig1MDE4fDUwMjB8NTAzOHw1NjEyfDU4OTN8NjMwNHw2NzU5fDY3NjF8Njc2Mnw2NzYzfDA2MDR8NjM5MClcXGQrJC8sXG4gICAgICBkYW5rb3J0OiAvXig1MDE5KVxcZCskLyxcbiAgICAgIGludGVycGF5bWVudDogL14oNjM2KVxcZCskLyxcbiAgICAgIHVuaW9ucGF5OiAvXig2Mnw4OClcXGQrJC8sXG4gICAgICAnVmlzYSc6IC9eNFswLTldezEyfSg/OlswLTldezN9KT8kLyxcbiAgICAgICdNYXN0ZXJDYXJkJzogL141WzEtNV1bMC05XXsxNH0kLyxcbiAgICAgICdBbWVyaWNhbiBFeHByZXNzJzogL14zWzQ3XVswLTldezEzfSQvLFxuICAgICAgZGluZXJzOiAvXjMoPzowWzAtNV18WzY4XVswLTldKVswLTldezExfSQvLFxuICAgICAgZGlzY292ZXI6IC9eNig/OjAxMXw1WzAtOV17Mn0pWzAtOV17MTJ9JC8sXG4gICAgICBqY2I6IC9eKD86MjEzMXwxODAwfDM1XFxkezN9KVxcZHsxMX0kL1xuICB9XG5cbiAgZm9yKHZhciBrZXkgaW4gcmUpIHtcbiAgICAgIGlmKHJlW2tleV0udGVzdChudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBrZXlcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRlbnQtZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206LTE2cHhcIj5cbiAgICA8c2VsZWN0IChjaGFuZ2UpPVwiZHJvcGRvd24oJGV2ZW50LnRhcmdldClcIj5cbiAgICAgICAgPG9wdGlvbj5Vc2UgZXhpc3RpbmcgY3JlZGl0IGNhcmQ8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbj5TZXQgdXAgbmV3IGRlYml0IG9yIGNyZWRpdCBjYXJkPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgIDxkaXYgY2xhc3M9XCJ2aFwiPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZ3JvdXBcIiBzdHlsZT1cIm1hcmdpbi10b3A6MzJweDttYXJnaW4tYm90dG9tOiAwO1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGVcIj5TZWxlY3QgY2FyZDwvZGl2PlxuICAgICAgICA8c2VsZWN0IChjaGFuZ2UpPVwiY2FyZFNlbGVjdGVkKCRldmVudC50YXJnZXQsJ2h0bWwnKVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkIHNlbGVjdGVkIGhpZGRlbj5QbGVhc2Ugc2VsZWN0PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PjxpIGNsYXNzPVwiZmEtc29saWQgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cIiFjYXJkXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJjcmVkaXRGb3JtXCIgY2FyZCBjb250YWluZXI9XCIuY2FyZC1jb250YWluZXJcIiBbY2FyZC13aWR0aF09XCI0MTBcIiBbbWVzc2FnZXNdPVwibWVzc2FnZXNcIlxuICAgICAgICBbcGxhY2Vob2xkZXJzXT1cInBsYWNlaG9sZGVyc1wiIFttYXNrc109XCJtYXNrc1wiIFtmb3JtYXR0aW5nXT1cImZvcm1hdHRpbmdcIiBbZGVidWddPVwiZGVidWdcIj5cbiAgICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cInBheW1lbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgY3JlZGl0LWNhcmQtaGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhY29tcGFueU5hbWVTZWxlY3RlZFwiIGNsYXNzPVwibGFibGUgcmVxdWlyZWRcIj5DYXJkaG9sZGVyJ3MgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29tcGFueU5hbWVTZWxlY3RlZFwiIGNsYXNzPVwibGFibGUgcmVxdWlyZWRcIj5Db21wYW55IG5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZpZWxkXCIgdHlwZT1cInRleHRcIiBjYXJkLW5hbWUgZm9ybUNvbnRyb2xOYW1lPVwiY2FyZE5hbWVcIiAoa2V5dXApPVwia2V5cHJlc3MoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFjb21wYW55TmFtZVNlbGVjdGVkXCIgY2xhc3M9XCJjb21wYW55LW5hbWUtbGlua1wiIChjbGljayk9XCJjb21wYW55TmFtZUNsaWNrKClcIj5PciBjbGljayBoZXJlIHRvIHVzZSBhIGNvbXBhbnkgbmFtZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbXBhbnlOYW1lU2VsZWN0ZWRcIiBjbGFzcz1cImNvbXBhbnktbmFtZS1saW5rXCIgKGNsaWNrKT1cImNvbXBhbnlOYW1lQ2xpY2soKVwiPk9yIGNsaWNrIGhlcmUgdG8gdXNlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGUgcmVxdWlyZWRcIj5DYXJkIG51bWJlcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZmllbGRcIiB0eXBlPVwidGVsXCIgYXV0b2NvbXBsZXRlPVwiY2MtbnVtYmVyXCIgY2FyZC1udW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjYXJkTnVtYmVyXCIgbWF4bGVuZ3RoPVwiMTlcIiBwbGFjZWhvbGRlcj1cInh4eHggeHh4eCB4eHh4IHh4eHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJzZXRDYXJkVHlwZSgpXCIgW2NsYXNzLmVycm9yX2ZpZWxkXT1cIiFpc0NhcmROdW1iZXJMZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJjYXJkTG9nb1wiIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cInt7Y2FyZEltZ319XCIgKGVycm9yKT1cImRlZmF1bHRDYXJkKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNhcmQgbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29udGVudC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkNWQzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZpZWxkXCIgdHlwZT1cInBhc3N3b3JkXCIgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCIgcGF0dGVybj1cIlswLTldKlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0bW9kZT1cIm51bWVyaWNcIiBjYXJkLWN2YyBwbGFjZWhvbGRlcj1cInh4eFwiIGZvcm1Db250cm9sTmFtZT1cImNhcmRDdmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwia2V5cHJlc3MoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbnRlbnQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFibGUgcmVxdWlyZWRcIj5FeHAgZGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZpZWxkXCIgdHlwZT1cInRlbFwiIGF1dG9jb21wbGV0ZT1cImNjLWV4cFwiIGNhcmQtZXhwaXJ5IGZvcm1Db250cm9sTmFtZT1cImV4cGlyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTU0gLyBZWVwiIChrZXl1cCk9XCJrZXlwcmVzcygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWdyb3VwXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAwO1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJsZSByZXF1aXJlZFwiPkVtYWlsIGFkZHJlc3M8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmaWVsZFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgKGtleXVwKT1cImtleXByZXNzKClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1haWwtaW5mb1wiPlRoaXMgZW1haWwgd2lsbCBvbmx5IGJlIHVzZWQgdG8ga2VlcCB5b3UgdXBkYXRlZCBhYm91dCB0aGVpciBwYXltZW50czwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbjwvZGl2PlxuIl19