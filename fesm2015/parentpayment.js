import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators } from '@angular/forms';
import * as i1$1 from '@angular/router';

class ParentpaymentService {
    constructor() { }
}
ParentpaymentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ParentpaymentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

// import { Injectable } from '@angular/core';
class PaymentBankComponent {
    // @Injectable({providedIn: 'root'})
    // resp: any;
    // testObj:any;
    constructor(fb) {
        this.fb = fb;
        this.companyNameSelected = false;
        this.payEmitter = new EventEmitter();
    }
    ngOnInit() {
        if (this.paymentTypeS == 'PAD') {
            this.paymentType = 1;
        }
        else if (this.paymentTypeS == 'Bank transfer') {
            this.paymentType = 2;
        }
        else if (this.paymentTypeS == 'ACH') {
            this.paymentType = 3;
        }
        else if (this.paymentTypeS == 'SEPA') {
            this.paymentType = 4;
        }
        this.buildPaymetForm();
    }
    buildPaymetForm() {
        if (this.paymentType == 1) {
            this.paymentForm = this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                country: ['', [Validators.required]],
                institutionNo: ['', [Validators.required]],
                transitNo: ['', [Validators.required]],
                accountNo: ['', [Validators.required,]],
            });
        }
        else if (this.paymentType == 2) {
            this.paymentForm = this.fb.group({
                instantpayment: this.fb.group({
                    country_code: 'GB',
                    currency: this.userData.currencyCode,
                    payment: this.fb.group({
                        description: "Invoice no : #" + this.userData.invoiceDetails.invoiceNumber,
                        amount: [0, [Validators.required]],
                        app_fee: "1",
                    }),
                    customer: this.fb.group({
                        commusoftId: 0,
                        addressline1: this.userData.customerDetails.addressline1,
                        addressline2: this.userData.customerDetails.addressline2,
                        addressline3: this.userData.customerDetails.addressline3,
                        companyname: "",
                        surname: this.userData.customerDetails.customerName,
                        firstname: this.userData.customerDetails.customerName,
                        postcode: this.userData.customerDetails.postcode,
                        phonenumber: "",
                        region: this.userData.customerDetails.county,
                        email: [this.userData.customerDetails.emailId, [Validators.required, Validators.email]],
                        language: ""
                    }),
                    bank: this.fb.group({
                        firstname: [this.userData.customerDetails.customerName, [Validators.required]],
                        lastname: [""],
                        account_number: ['', [Validators.required]],
                        iban: "",
                        account_type: "",
                        bank_code: "",
                        branch_code: ["", [Validators.required]],
                    })
                }),
            });
        }
        else if (this.paymentType == 3) {
            this.paymentForm = this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                billingAddress1: ['', [Validators.required]],
                billingAddress2: ['', [Validators.required]],
                accountNo: ['', [Validators.required,]],
                routingNo: ['', [Validators.required]],
                accountType: ['', [Validators.required]],
                // confirm: [false, [Validators.requiredTrue] ],
            });
        }
        else if (this.paymentType == 4) {
            this.paymentForm = this.fb.group({
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                creditorIdentifier: ['', [Validators.required]],
                internationalBankAccountNo: ['', [Validators.required]],
                accountNo: ['', [Validators.required,]],
                billingAddress1: ['', [Validators.required]],
                billingAddress2: ['', [Validators.required]],
            });
        }
    }
    companyNameClick() {
        this.companyNameSelected = !this.companyNameSelected;
        this.paymentForm.patchValue({ 'instantpayment': { 'bank': { 'firstname': '' } } });
    }
    keypress() {
        this.payEmitter.emit(this.paymentForm);
    }
    branch_codeFormat(el) {
        this.paymentForm.patchValue({ 'instantpayment': { 'bank': { 'branch_code': el.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})(?=\d)/g, "$1-") } } });
        this.keypress();
    }
}
PaymentBankComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentBankComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PaymentBankComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentBankComponent, selector: "app-payment-bank", inputs: { paymentTypeS: "paymentTypeS" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "<form>\n    <div>\n        \n<div class=\"content-group\">\n    <div *ngIf=\"paymentType!=2  && !companyNameSelected\" class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">First name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Last name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div>\n    </div>\n    <div *ngIf=\"paymentType==2\" class=\"direct-debit\">\n        <div>\n            <div class=\"form-group\">\n        <div class=\"lable\">Account holder\u2019s name</div>\n            <input formControlName=\"firstname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n            </div></div>\n    </div>\n    <div class=\"direct-debit\">\n        <div>\n            <div class=\"form-group\">\n        <div class=\"lable\">Company name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div></div>\n    </div>\n    <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n    <div *ngIf= \"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div>\n</div>\n<div class=\"content-group\">\n    <div>\n        <div class=\"form-group\">\n            <div class=\"lable\">Email address</div>\n    <input class=\"field\" type=\"text\" placeholder=\"william.ty@example.co\" (keyup)=\"keypress()\" >\n    <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n\n        </div>\n    </div>\n    \n</div>\n<div *ngIf=\"paymentType==1\" class=\"content-group\">\n    <div class=\"lable\">vdsf</div>\n    <select (click)=\"keypress()\">\n        <option value=\"\" disabled selected hidden>Please select</option>\n        <!-- <option *ngFor=\"let name of countryName\" [value]=\"name\" >{{name}}</option> -->\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n</div>\n<div class=\"content-group\">\n    <div *ngIf=\"paymentType==1\" class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Institution number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\" (keyup)=\"keypress()\" >\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable transit-adjust\">Transit number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n        </div>\n    </div>\n    <div *ngIf=\"paymentType==2\" class=\"row\">\n        <div class=\"col-md-4\">\n                <div>\n                    <div class=\"form-group\">\n\n            <div class=\"lable\">Sort code</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\" (input)=\"branch_codeFormat($event)\" maxlength=\"8\" >\n                    </div></div>\n        </div>\n        <div class=\"col-md-8\">\n            <div>\n                <div class=\"form-group\">\n\n\n            <div class=\"lable transit-adjust\">Account number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n        </div></div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"paymentType==1\" class=\"content-group\">\n    <div class=\"lable\">Account number</div>\n    <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Creditor identifier</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Creditor identifier\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">International bank account number (IBAN)</div>\n    <input class=\"field\" type=\"text\" placeholder=\"International bank account number (IBAN)\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Billing address</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Address Line 1\" >\n    <input class=\"field\" type=\"text\" placeholder=\"Address Line 2\" style=\"margin-top:12px\" >\n\n</div>\n<div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Bank account number</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Bank account number\" (keyup)=\"keypress()\">\n</div>\n<div *ngIf=\"paymentType==3\" class=\"content-group\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Routing number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"Routing number\" (keyup)=\"keypress()\">\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable transit-adjust\">Account type</div>\n            <select (click)=\"keypress()\">\n                <option value=\"\" disabled selected hidden>Please select</option>\n                <option>xxxx - xxxx - xxxx - 1234</option>\n                <option>Use existing credit card</option>\n            </select><i class=\"fa-solid fa-angle-down\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-group\" style=\"margin-bottom: 0;\">\n    <div *ngIf=\"paymentType==1\">\n    <div class=\"confirm\">\n        <span style=\"margin-top: 5px;\">I confirm that I am the account holder and am authorised to set up PAD payments on this account</span>\n    </div>\n    </div>\n    \n    <div *ngIf=\"paymentType==2\">\n        <div class=\"confirm\">\n            <span>We work with a company called GoCardless. They help us process your payment, which involves some of your personal data. By continuing, you agree to their terms of use and understand their <a href=\"https://gocardless.com/privacy/payers/\"  target=\"_blank\"> privacy notice.</a></span></div>\n        </div>\n    <div *ngIf=\"paymentType==3\">\n        <div class=\"confirm-msg\">\n            This service is provided by Community Federal Savings Bank (\u201CCFSB\u201D), member FDIC, forwhich GoCardless Ltd acts as a third-party servicer. GoCardless and CFSB use personal data as described in <a>these privacy notices</a>. By submitting this form, you agree to the GoCardless <a>Website Terms of Use</a>. GoCardless uses analytics <a>cookies</a>.\n        </div></div>\n    \n        <div *ngIf=\"paymentType==4\">\n            <div class=\"confirm-msg\">\n                By signing this mandate form, you authorise (A) GoCardless to send instructions to your bank to debit your account (B) your bank to debit your account in accordance with the instructions from GoCardless. As part of your rights, you are entitled to refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited.\n            </div></div>\n        </div>\n        </div>\n    </form>", styles: ["a{color:var(--circleFontColour)!important;cursor:pointer;text-decoration:none}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor);font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:24px}.field:focus-visible{outline:1px solid var(--inputHighlight)}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px}.content-group{margin:16px 0;font-size:14px}.content-group select:invalid{color:gray}.content-group select{appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.content-group ::placeholder{color:#c9c9c9;opacity:1}.content-group :-ms-input-placeholder{color:#c9c9c9}.content-group ::-ms-input-placeholder{color:#c9c9c9}select{width:100%;height:40px}#confirm{min-width:24px;height:24px;margin-right:12px;cursor:pointer}.confirm{font-size:14px;color:var(--primaryTextColor);display:flex;margin-top:16px;align-items:center}.confirm input[type=checkbox]{outline:1px solid #EEEEEE}.form-check-input:focus{border-color:#c9c9c9!important;outline:0;box-shadow:0 0 0 .25rem #0d6efd00}.form-check-input:checked{background-color:#3883c1;border-color:#3883c1!important}.addons-checkbox{width:24px;height:24px;margin-bottom:5px;border-color:#c9c9c9!important;outline:0;border-style:solid;border-width:1px}.confirm-msg{font-size:14px;color:var(--primaryTextColor)}.confirm-msg a{color:var(--linkColor)!important}.confirm-msg a:hover{color:var(--linkVisitedColor)!important}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 768px){.transit-adjust{margin-top:8px}.confirm{align-items:baseline}.content-group{margin:12px 0}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentBankComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-bank',
                    templateUrl: './payment-bank.component.html',
                    styleUrls: ['./payment-bank.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { paymentTypeS: [{
                type: Input
            }], payEmitter: [{
                type: Output
            }] } });

class PaymentCardComponent {
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
PaymentCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCardComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PaymentCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardComponent, selector: "app-payment-card", outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"content-group\" *ngIf=\"storedCards.length != 0\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form card container=\".card-container\">\n        <div>\n        <div class=\"row\">\n            <div class=\"col-md-6 credit-card-hide\">\n                <div class=\"card-container\">\n\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"content-group\">\n                    <div *ngIf=\"!companyNameSelected\" class=\"lable\">Cardholder\u2019s name</div>\n                    <div *ngIf=\"companyNameSelected\" class=\"lable\">Company name</div>\n                    <input class=\"field\" type=\"text\" card-name (keyup)=\"keypress()\" >\n                    <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                    <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div>\n                </div>\n\n\n                <div class=\"content-group\">\n                    <div class=\"lable\">Card number</div>\n                    <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number placeholder=\"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\" (keyup)=\"setCardType()\">\n                    <img *ngIf=\"cardType\" class=\"icon-align\" src=\"\" alt=\"\">\n                </div>\n                <div class=\"row row-group\">\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">CVC</div>\n                        <input class=\"field\" type=\"password\" autocomplete=\"new-password\" card-cvc placeholder=\"CVC\"\n                            (keyup)=\"keypress()\">\n                    </div>\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">Exp date</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry placeholder=\"MM/YY\" (keyup)=\"keypress()\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"content-group\" style=\"margin: 0;\">\n        <div class=\"lable\">Email address</div>\n        <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\">\n        <div class=\"email-info\">This email will only be used to keep the customer updated about their payments</div>\n    </div>\n</div>\n</form>\n</div>", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-card',
                    templateUrl: './payment-card.component.html',
                    styleUrls: ['./payment-card.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { payEmitter: [{
                type: Output
            }] } });

class PaymentSectionsComponent {
    constructor() {
        this.devicePayment = false;
        this.testResult = "testResult";
        this.paymentMethodAllowed = 3;
        this.paymentMethodType = 'Bank transfer';
        this.paymentMethod = 1;
        this.paymentCompleted = true;
        this.canDoWalletPay = false;
        this.walletPayLogoName = '';
        this.walletPayDesc = '';
        this.emitter = new EventEmitter();
        this.payEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        this.paymentEnable = paymentEnable;
        this.payEmitter.emit(paymentEnable);
    }
    ngOnInit() {
        this.emitter.emit(this.paymentMethodType);
    }
    // canWalletPay() {
    //     this.canDoWalletPay = false;
    //     if (this.userData.isStripeEnabled && this.userData.isWalletPayEnabled) {
    //         const stripe = window.Stripe(atob(this.userData.pk_token), {stripeAccount: this.userData.stripeConnectedAccountId});
    //         const paymentRequest = stripe.paymentRequest({
    //             country: this.userData.clientDetails.countryNameCode,
    //             currency: this.userData.currencyCode.toLowerCase(),
    //             total: {
    //                 label: 'Demo total',
    //                 amount: 1,
    //             },
    //             requestPayerName: true,
    //             requestPayerEmail: true,
    //         });
    //         (async () => {
    //             // Check the availability of the Payment Request API first.
    //             const result = await paymentRequest.canMakePayment();
    //             if (result) {
    //                 this.canDoWalletPay = true;
    //                 if (result.applePay) {
    //                     this.walletPayDesc = 'Apple Pay';
    //                     this.walletPayLogoName = 'ApplePay';
    //                 } else if (result.googlePay) {
    //                     this.walletPayDesc = 'Google Pay';
    //                     this.walletPayLogoName = 'GooglePay';
    //                 } else if (result.link) {
    //                     this.walletPayDesc = 'Pay via Link';
    //                     this.walletPayLogoName = 'LinkPay';
    //                 } else {
    //                     this.walletPayDesc = 'WalletPay';
    //                     this.walletPayLogoName = 'Wallet';
    //                 }
    //             } else {
    //                 console.log("Cannot make Wallet payments.");
    //             }
    //         })();
    //     }
    // }
    paymentSelected(value) {
        var temp = this.paymentMethod != value;
        if (value > 0) {
            this.paymentMethod = value;
            this.emitter.emit(value);
            var check = document.getElementById(value);
            if (check) {
                check.checked = true;
            }
            if (temp) {
                this.payEmitter.emit(true);
            }
        }
    }
}
PaymentSectionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentSectionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentSectionsComponent, selector: "app-payment-secctions", inputs: { tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"\" alt=\"\">\n            </div>\n            <div *ngIf=\"paymentMethodAllowed >= 2\" class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <app-payment-bank *ngIf=\"paymentMethod == '1'\"></app-payment-bank>\n        <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card>\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: PaymentBankComponent, selector: "app-payment-bank", inputs: ["paymentTypeS"], outputs: ["payEmitter"] }, { type: PaymentCardComponent, selector: "app-payment-card", outputs: ["payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-secctions',
                    templateUrl: './payment-sections.component.html',
                    styleUrls: ['./payment-sections.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tip: [{
                type: Input
            }], emitter: [{
                type: Output
            }], payEmitter: [{
                type: Output
            }] } });

class ParentpaymentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", ngImport: i0, template: `
  <app-payment-secctions></app-payment-secctions>`, isInline: true, components: [{ type: PaymentSectionsComponent, selector: "app-payment-secctions", inputs: ["tip"], outputs: ["emitter", "payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
  <app-payment-secctions></app-payment-secctions>`,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PaymentSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PaymentSectionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentSectionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentSectionComponent, selector: "lib-payment-section", ngImport: i0, template: "<p>payment-section works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-section',
                    templateUrl: './payment-section.component.html',
                    styleUrls: ['./payment-section.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ChildpaymentComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.keyword = 0;
        this.downloading = false;
        this.paymentType = false;
        this.selected = false;
        this.paymentEnable = false;
        // logoUrl:string='ss';
        this.completed = false;
        this.paymentError = false;
        this.loading = false;
        this.error = false;
        this.logoUrl = '';
        this.paymentId = 0;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params['success'] == 'true') {
                this.completed = true;
                this.paymentError = false;
            }
            if (params['success'] == 'false') {
                this.paymentError = true;
            }
        });
    }
    send(keyword) {
        this.keyword = keyword;
    }
    select(selected) {
        this.selected = selected;
    }
    valid(paymentEnable) {
        this.paymentEnable = paymentEnable;
    }
    paymentCompleted(completed) {
        if (completed === true) {
            this.completed = completed;
            if (this.selected == 3) {
                this.paymentType = "walletPay";
            }
            else {
                this.paymentType = "cardPayment";
            }
        }
        else if (completed.length != 0) {
            this.paymentError = true;
            this.paymentErrorMsg = completed;
        }
    }
    setPaymentId(paymentId) {
        this.paymentId = paymentId;
    }
    setCardDetailsEmitter(cardDetails) {
        this.cardDetails = cardDetails;
    }
    setWalletDetails(walletDetails) {
        this.walletDetails = walletDetails;
    }
    // doCloseError:boolean=false;
    closeError(value) {
        // this.doCloseError=true;
        this.paymentError = !value;
        this.deleteQueryParameterFromCurrentRoute('success');
    }
    ngOnInit() {
        this.loading = true;
    }
    deleteQueryParameterFromCurrentRoute(val) {
        const params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        delete params[val];
        this.router.navigate([], { queryParams: params });
    }
}
ChildpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
ChildpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChildpaymentComponent, selector: "lib-childpayment", ngImport: i0, template: "<lib-payment-section></lib-payment-section>", styles: [""], components: [{ type: PaymentSectionComponent, selector: "lib-payment-section" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-childpayment',
                    templateUrl: './childpayment.component.html',
                    styleUrls: ['./childpayment.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }]; } });

class PaymentApplepayComponent {
    constructor() {
        this.payEmitter = new EventEmitter();
    }
    ngOnInit() {
        this.payEmitter.emit(true);
    }
}
PaymentApplepayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentApplepayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentApplepayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentApplepayComponent, selector: "app-payment-applepay", outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentApplepayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-applepay',
                    templateUrl: './payment-applepay.component.html',
                    styleUrls: ['./payment-applepay.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { payEmitter: [{
                type: Output
            }] } });

class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        ChildpaymentComponent,
        PaymentSectionComponent,
        PaymentSectionsComponent,
        PaymentCardComponent,
        PaymentBankComponent,
        PaymentApplepayComponent], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        ChildpaymentComponent,
                        PaymentSectionComponent,
                        PaymentSectionsComponent,
                        PaymentCardComponent,
                        PaymentBankComponent,
                        PaymentApplepayComponent
                    ],
                    imports: [],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of parentpayment
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChildpaymentComponent, ParentpaymentComponent, ParentpaymentModule, ParentpaymentService, PaymentApplepayComponent, PaymentBankComponent, PaymentCardComponent, PaymentSectionsComponent };
//# sourceMappingURL=parentpayment.js.map
