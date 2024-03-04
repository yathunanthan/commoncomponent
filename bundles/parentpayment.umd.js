(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('parentpayment', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parentpayment = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.common.http));
})(this, (function (exports, i0, i1, i2, http) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var ParentpaymentService = /** @class */ (function () {
        function ParentpaymentService() {
        }
        return ParentpaymentService;
    }());
    ParentpaymentService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParentpaymentService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var PaymentBankDetailsComponent = /** @class */ (function () {
        // @Injectable({providedIn: 'root'})
        // resp: any;
        // testObj:any;
        function PaymentBankDetailsComponent(fb) {
            this.fb = fb;
            this.companyNameSelected = false;
            this.payEmitter = new i0.EventEmitter();
        }
        PaymentBankDetailsComponent.prototype.ngOnInit = function () {
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
            console.log(this.paymentData);
        };
        PaymentBankDetailsComponent.prototype.buildPaymetForm = function () {
            if (this.paymentType == 1) {
                this.paymentForm = this.fb.group({
                    firstName: ['', [i1.Validators.required]],
                    lastName: ['', [i1.Validators.required]],
                    email: ['', [i1.Validators.required, i1.Validators.email]],
                    country: ['', [i1.Validators.required]],
                    institutionNo: ['', [i1.Validators.required]],
                    transitNo: ['', [i1.Validators.required]],
                    accountNo: ['', [i1.Validators.required,]],
                });
            }
            else if (this.paymentType == 2) {
                this.paymentForm = this.fb.group({
                    instantpayment: this.fb.group({
                        country_code: 'GB',
                        currency: this.paymentData.currencyCode,
                        payment: this.fb.group({
                            description: "Invoice no : #" + this.paymentData.invoiceDetails.invoiceNumber,
                            amount: [0, [i1.Validators.required]],
                            app_fee: "1",
                        }),
                        customer: this.fb.group({
                            commusoftId: 0,
                            addressline1: this.paymentData.customerDetails.addressline1,
                            addressline2: this.paymentData.customerDetails.addressline2,
                            addressline3: this.paymentData.customerDetails.addressline3,
                            companyname: "",
                            surname: this.paymentData.customerDetails.customerName,
                            firstname: this.paymentData.customerDetails.customerName,
                            postcode: this.paymentData.customerDetails.postcode,
                            phonenumber: "",
                            region: this.paymentData.customerDetails.county,
                            email: [this.paymentData.customerDetails.emailId, [i1.Validators.required, i1.Validators.email]],
                            language: ""
                        }),
                        bank: this.fb.group({
                            firstname: [this.paymentData.customerDetails.customerName, [i1.Validators.required]],
                            lastname: [""],
                            account_number: ['', [i1.Validators.required]],
                            iban: "",
                            account_type: "",
                            bank_code: "",
                            branch_code: ["", [i1.Validators.required]],
                        })
                    }),
                });
            }
            else if (this.paymentType == 3) {
                this.paymentForm = this.fb.group({
                    firstName: ['', [i1.Validators.required]],
                    lastName: ['', [i1.Validators.required]],
                    email: ['', [i1.Validators.required, i1.Validators.email]],
                    billingAddress1: ['', [i1.Validators.required]],
                    billingAddress2: ['', [i1.Validators.required]],
                    accountNo: ['', [i1.Validators.required,]],
                    routingNo: ['', [i1.Validators.required]],
                    accountType: ['', [i1.Validators.required]],
                    // confirm: [false, [Validators.requiredTrue] ],
                });
            }
            else if (this.paymentType == 4) {
                this.paymentForm = this.fb.group({
                    firstName: ['', [i1.Validators.required]],
                    lastName: ['', [i1.Validators.required]],
                    email: ['', [i1.Validators.required, i1.Validators.email]],
                    creditorIdentifier: ['', [i1.Validators.required]],
                    internationalBankAccountNo: ['', [i1.Validators.required]],
                    accountNo: ['', [i1.Validators.required,]],
                    billingAddress1: ['', [i1.Validators.required]],
                    billingAddress2: ['', [i1.Validators.required]],
                });
            }
        };
        PaymentBankDetailsComponent.prototype.companyNameClick = function () {
            this.companyNameSelected = !this.companyNameSelected;
            this.paymentForm.patchValue({ 'instantpayment': { 'bank': { 'firstname': '' } } });
        };
        PaymentBankDetailsComponent.prototype.keypress = function () {
            this.payEmitter.emit(this.paymentForm);
        };
        PaymentBankDetailsComponent.prototype.branch_codeFormat = function (el) {
            this.paymentForm.patchValue({ 'instantpayment': { 'bank': { 'branch_code': el.target.value.replace(/[^0-9]/g, '').replace(/(\d{2})(?=\d)/g, "$1-") } } });
            this.keypress();
        };
        return PaymentBankDetailsComponent;
    }());
    PaymentBankDetailsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentBankDetailsComponent, deps: [{ token: i1__namespace.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PaymentBankDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: { paymentData: "paymentData", paymentTypeS: "paymentTypeS" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<form>\n    <div>\n        \n<div class=\"content-group\">\n    <div *ngIf=\"paymentType!=2  && !companyNameSelected\" class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">First name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Last name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div>\n    </div>\n    <div *ngIf=\"paymentType==2\" class=\"direct-debit\">\n        <div>\n            <div class=\"form-group\">\n        <div class=\"lable\">Account holder\u2019s name</div>\n            <input formControlName=\"firstname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n            </div></div>\n    </div>\n    <div class=\"direct-debit\">\n        <div>\n            <div class=\"form-group\">\n        <div class=\"lable\">Company name</div>\n            <input class=\"field\" type=\"text\" (keyup)=\"keypress()\" >\n        </div></div>\n    </div>\n    <div class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n    <!-- <div *ngIf= \"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div> -->\n</div>\n<div class=\"content-group\">\n    <div>\n        <div class=\"form-group\">\n            <div class=\"lable\">Email address</div>\n    <input class=\"field\" type=\"text\" placeholder=\"william.ty@example.co\" (keyup)=\"keypress()\" >\n    <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n\n        </div>\n    </div>\n    \n</div>\n<div *ngIf=\"paymentType==1\" class=\"content-group\">\n    <div class=\"lable\">vdsf</div>\n    <select (click)=\"keypress()\">\n        <option value=\"\" disabled selected hidden>Please select</option>\n        <!-- <option *ngFor=\"let name of countryName\" [value]=\"name\" >{{name}}</option> -->\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n</div>\n<div class=\"content-group\">\n    <div *ngIf=\"paymentType==1\" class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Institution number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\" (keyup)=\"keypress()\" >\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable transit-adjust\">Transit number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n        </div>\n    </div>\n    <div *ngIf=\"paymentType==2\" class=\"row\">\n        <div class=\"col-md-4\">\n                <div>\n                    <div class=\"form-group\">\n\n            <div class=\"lable\">Sort code</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\" (input)=\"branch_codeFormat($event)\" maxlength=\"8\" >\n                    </div></div>\n        </div>\n        <div class=\"col-md-8\">\n            <div>\n                <div class=\"form-group\">\n\n\n            <div class=\"lable transit-adjust\">Account number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n        </div></div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"paymentType==1\" class=\"content-group\">\n    <div class=\"lable\">Account number</div>\n    <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Creditor identifier</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Creditor identifier\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">International bank account number (IBAN)</div>\n    <input class=\"field\" type=\"text\" placeholder=\"International bank account number (IBAN)\" (keyup)=\"keypress()\" >\n</div>\n\n<div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Billing address</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Address Line 1\" >\n    <input class=\"field\" type=\"text\" placeholder=\"Address Line 2\" style=\"margin-top:12px\" >\n\n</div>\n<div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n    <div class=\"lable\">Bank account number</div>\n    <input class=\"field\" type=\"text\" placeholder=\"Bank account number\" (keyup)=\"keypress()\">\n</div>\n<div *ngIf=\"paymentType==3\" class=\"content-group\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"lable\">Routing number</div>\n            <input class=\"field\" type=\"text\" placeholder=\"Routing number\" (keyup)=\"keypress()\">\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"lable transit-adjust\">Account type</div>\n            <select (click)=\"keypress()\">\n                <option value=\"\" disabled selected hidden>Please select</option>\n                <option>xxxx - xxxx - xxxx - 1234</option>\n                <option>Use existing credit card</option>\n            </select><i class=\"fa-solid fa-angle-down\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-group\" style=\"margin-bottom: 0;\">\n    <div *ngIf=\"paymentType==1\">\n    <div class=\"confirm\">\n        <span style=\"margin-top: 5px;\">I confirm that I am the account holder and am authorised to set up PAD payments on this account</span>\n    </div>\n    </div>\n    \n    <div *ngIf=\"paymentType==2\">\n        <div class=\"confirm\">\n            <span>We work with a company called GoCardless. They help us process your payment, which involves some of your personal data. By continuing, you agree to their terms of use and understand their <a href=\"https://gocardless.com/privacy/payers/\"  target=\"_blank\"> privacy notice.</a></span></div>\n        </div>\n    <div *ngIf=\"paymentType==3\">\n        <div class=\"confirm-msg\">\n            This service is provided by Community Federal Savings Bank (\u201CCFSB\u201D), member FDIC, forwhich GoCardless Ltd acts as a third-party servicer. GoCardless and CFSB use personal data as described in <a>these privacy notices</a>. By submitting this form, you agree to the GoCardless <a>Website Terms of Use</a>. GoCardless uses analytics <a>cookies</a>.\n        </div></div>\n    \n        <div *ngIf=\"paymentType==4\">\n            <div class=\"confirm-msg\">\n                By signing this mandate form, you authorise (A) GoCardless to send instructions to your bank to debit your account (B) your bank to debit your account in accordance with the instructions from GoCardless. As part of your rights, you are entitled to refund from your bank under the terms and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on which your account was debited.\n            </div></div>\n        </div>\n        </div>\n    </form>", styles: ["a{color:var(--circleFontColour)!important;cursor:pointer;text-decoration:none}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor);font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:24px}.field:focus-visible{outline:1px solid var(--inputHighlight)}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px}.content-group{margin:16px 0;font-size:14px}.content-group select:invalid{color:gray}.content-group select{appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.content-group ::placeholder{color:#c9c9c9;opacity:1}.content-group :-ms-input-placeholder{color:#c9c9c9}.content-group ::-ms-input-placeholder{color:#c9c9c9}select{width:100%;height:40px}#confirm{min-width:24px;height:24px;margin-right:12px;cursor:pointer}.confirm{font-size:14px;color:var(--primaryTextColor);display:flex;margin-top:16px;align-items:center}.confirm input[type=checkbox]{outline:1px solid #EEEEEE}.form-check-input:focus{border-color:#c9c9c9!important;outline:0;box-shadow:0 0 0 .25rem #0d6efd00}.form-check-input:checked{background-color:#3883c1;border-color:#3883c1!important}.addons-checkbox{width:24px;height:24px;margin-bottom:5px;border-color:#c9c9c9!important;outline:0;border-style:solid;border-width:1px}.confirm-msg{font-size:14px;color:var(--primaryTextColor)}.confirm-msg a{color:var(--linkColor)!important}.confirm-msg a:hover{color:var(--linkVisitedColor)!important}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 768px){.transit-adjust{margin-top:8px}.confirm{align-items:baseline}.content-group{margin:12px 0}}\n"], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentBankDetailsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-bank-details',
                        templateUrl: './payment-bank-details.component.html',
                        styleUrls: ['./payment-bank-details.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.FormBuilder }]; }, propDecorators: { paymentData: [{
                    type: i0.Input
                }], paymentTypeS: [{
                    type: i0.Input
                }], payEmitter: [{
                    type: i0.Output
                }] } });

    var PaymentCardDetailsComponent = /** @class */ (function () {
        function PaymentCardDetailsComponent(fb) {
            this.fb = fb;
            this.payEmitter = new i0.EventEmitter();
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
        PaymentCardDetailsComponent.prototype.ngOnInit = function () {
            this.payEmitter.emit(true);
        };
        PaymentCardDetailsComponent.prototype.dropdown = function (val) {
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
        };
        PaymentCardDetailsComponent.prototype.buildCreditForms = function () {
            var date = new Date().toISOString().slice(0, 10);
            this.creditForm = this.fb.group({
                payment: this.fb.group({
                    'amount': [,],
                    'cardCharge': [this.userData.cardCharges[this.userData.cardCharges.length - 1].charge,],
                    'cardName': [this.userData.customerDetails.customerName, [i1.Validators.required]],
                    'cardNumber': ['', [i1.Validators.required, 'c']],
                    'cardCvc': ['', [i1.Validators.required, i1.Validators.maxLength(3), i1.Validators.maxLength(4)]],
                    'paymentDate': [date,],
                    'description': ["Invoice no : #" + this.userData.invoiceDetails.invoiceNumber],
                    'isportal': [true,],
                    'reference': ['Invoice no : #' + this.userData.invoiceDetails.invoiceNumber,],
                    'email': [this.userData.customerDetails.emailId, [i1.Validators.required, i1.Validators.email]],
                    'expiry': ['', [i1.Validators.required, '']],
                    "paymentMethod": [this.userData.cardCharges[this.userData.cardCharges.length - 1].paymentMethodId],
                    "dontSendToAccounts": [''],
                })
            });
            this.placeholders = { name: this.userData.customerDetails.customerName ? this.userData.customerDetails.customerName : 'Full Name' };
        };
        PaymentCardDetailsComponent.prototype.companyNameClick = function () {
            this.companyNameSelected = !this.companyNameSelected;
            this.creditForm.patchValue({ 'payment': { 'cardName': '' } });
        };
        PaymentCardDetailsComponent.prototype.keypress = function () {
            this.payEmitter.emit(this.creditForm);
        };
        PaymentCardDetailsComponent.prototype.setCardType = function () {
            this.cardType = this.detectCardType(this.creditForm.value.payment.cardNumber.replace(/\s/g, ""));
            var cardStatus = this.creditForm.get('payment.cardNumber');
            if (this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "INVALID")
                this.isCardNumberLength = false;
            if (!this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "VALID")
                this.isCardNumberLength = true;
            this.payEmitter.emit(this.creditForm);
        };
        PaymentCardDetailsComponent.prototype.cardSelected = function (val, from) {
            var _this = this;
            val = from == 'html' ? val.value : val;
            var storedCard = this.storedCards.find(function (x) { return x.id == val; }).description;
            this.cardType = storedCard.substring(0, storedCard.indexOf('ending') - 1);
            var date = new Date().toISOString().slice(0, 10);
            this.creditForm = this.fb.group({
                'paymentDate': [date, [i1.Validators.required]],
                'description': ["Invoice no : #" + this.userData.invoiceDetails.invoiceNumber],
                'reference': ['Invoice no : #' + this.userData.invoiceDetails.invoiceNumber,],
                'paymentMethod': [this.userData.cardCharges[this.userData.cardCharges.length - 1].paymentMethodId, [i1.Validators.required]],
                'storedCard': [val, [i1.Validators.required]],
                'cardName': [this.userData.customerDetails.customerName, [i1.Validators.required]],
                'amount': [],
                'cardCharge': [this.userData.cardCharges[this.userData.cardCharges.length - 1].charge,],
                'isPortal': [true],
            });
            setTimeout(function () {
                _this.payEmitter.emit(_this.creditForm);
            }, 100);
        };
        PaymentCardDetailsComponent.prototype.detectCardType = function (number) {
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
        };
        return PaymentCardDetailsComponent;
    }());
    PaymentCardDetailsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentCardDetailsComponent, deps: [{ token: i1__namespace.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PaymentCardDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", outputs: { payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<div class=\"content-group\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form card container=\".card-container\">\n        <div>\n        <div class=\"row\">\n            <div class=\"col-md-6 credit-card-hide\">\n                <div class=\"card-container\">\n\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"content-group\">\n                    <div class=\"lable\">Cardholder\u2019s name</div>\n                    <!-- <div *ngIf=\"companyNameSelected\" class=\"lable\">Company name</div> -->\n                    <input class=\"field\" type=\"text\" card-name (keyup)=\"keypress()\" >\n                    <div class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                    <!-- <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div> -->\n                </div>\n\n\n                <div class=\"content-group\">\n                    <div class=\"lable\">Card number</div>\n                    <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number placeholder=\"\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022\" (keyup)=\"setCardType()\">\n                    <img *ngIf=\"cardType\" class=\"icon-align\" src=\"\" alt=\"\">\n                </div>\n                <div class=\"row row-group\">\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">CVC</div>\n                        <input class=\"field\" type=\"password\" autocomplete=\"new-password\" card-cvc placeholder=\"CVC\"\n                            (keyup)=\"keypress()\">\n                    </div>\n                    <div class=\"col content-group\">\n                        <div class=\"lable\">Exp date</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry placeholder=\"MM/YY\" (keyup)=\"keypress()\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div class=\"content-group\" style=\"margin: 0;\">\n        <div class=\"lable\">Email address</div>\n        <input class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\">\n        <div class=\"email-info\">This email will only be used to keep the customer updated about their payments</div>\n    </div>\n</div>\n</form>\n</div>", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentCardDetailsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-card-details',
                        templateUrl: './payment-card-details.component.html',
                        styleUrls: ['./payment-card-details.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.FormBuilder }]; }, propDecorators: { payEmitter: [{
                    type: i0.Output
                }] } });

    var PaymentDetailsComponent = /** @class */ (function () {
        function PaymentDetailsComponent() {
            this.paymentMethodType = 'Bank transfer';
            this.devicePayment = false;
            this.testResult = "testResult";
            this.paymentMethodAllowed = 3;
            this.paymentMethod = 1;
            this.paymentCompleted = true;
            this.canDoWalletPay = false;
            this.walletPayLogoName = '';
            this.walletPayDesc = '';
            this.emitter = new i0.EventEmitter();
            this.payEmitter = new i0.EventEmitter();
        }
        PaymentDetailsComponent.prototype.valid = function (paymentEnable) {
            this.paymentEnable = paymentEnable;
            this.payEmitter.emit(paymentEnable);
        };
        PaymentDetailsComponent.prototype.ngOnInit = function () {
        };
        PaymentDetailsComponent.prototype.paymentSelected = function (value) {
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
        };
        return PaymentDetailsComponent;
    }());
    PaymentDetailsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentDetailsComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    PaymentDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: { genericPaymentDetails: "genericPaymentDetails", tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"assets/icon/bank-transfer.svg\" alt=\"\">\n            </div>\n            <div class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"assets/icon/card.svg\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <lib-payment-bank-details *ngIf=\"paymentMethod == '1'\" [paymentTypeS]=\"paymentMethodType\" [paymentData]=\"genericPaymentDetails\"></lib-payment-bank-details>\n        <lib-payment-card-details *ngIf=\"paymentMethod == '2'\" ></lib-payment-card-details>\n        <!-- <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card> -->\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: ["paymentData", "paymentTypeS"], outputs: ["payEmitter"] }, { type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", outputs: ["payEmitter"] }], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentDetailsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-details',
                        templateUrl: './payment-details.component.html',
                        styleUrls: ['./payment-details.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { genericPaymentDetails: [{
                    type: i0.Input
                }], tip: [{
                    type: i0.Input
                }], emitter: [{
                    type: i0.Output
                }], payEmitter: [{
                    type: i0.Output
                }] } });

    var ParentpaymentComponent = /** @class */ (function () {
        function ParentpaymentComponent() {
        }
        ParentpaymentComponent.prototype.ngOnInit = function () {
        };
        return ParentpaymentComponent;
    }());
    ParentpaymentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParentpaymentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails" }, ngImport: i0__namespace, template: "\n      <lib-payment-details [genericPaymentDetails]=\"paymentDetails\"></lib-payment-details>\n  ", isInline: true, components: [{ type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip"], outputs: ["emitter", "payEmitter"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parentpayment',
                        template: "\n      <lib-payment-details [genericPaymentDetails]=\"paymentDetails\"></lib-payment-details>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { paymentDetails: [{
                    type: i0.Input
                }] } });

    var ParentpaymentModule = /** @class */ (function () {
        function ParentpaymentModule() {
        }
        return ParentpaymentModule;
    }());
    ParentpaymentModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParentpaymentModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
            PaymentDetailsComponent,
            PaymentBankDetailsComponent,
            PaymentCardDetailsComponent], imports: [i2.CommonModule,
            http.HttpClientModule], exports: [ParentpaymentComponent] });
    ParentpaymentModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, imports: [[
                i2.CommonModule,
                http.HttpClientModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParentpaymentComponent,
                            PaymentDetailsComponent,
                            PaymentBankDetailsComponent,
                            PaymentCardDetailsComponent
                        ],
                        imports: [
                            i2.CommonModule,
                            http.HttpClientModule
                        ],
                        schemas: [
                            i0.CUSTOM_ELEMENTS_SCHEMA
                        ],
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

    exports.ParentpaymentComponent = ParentpaymentComponent;
    exports.ParentpaymentModule = ParentpaymentModule;
    exports.ParentpaymentService = ParentpaymentService;
    exports.PaymentBankDetailsComponent = PaymentBankDetailsComponent;
    exports.PaymentCardDetailsComponent = PaymentCardDetailsComponent;
    exports.PaymentDetailsComponent = PaymentDetailsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=parentpayment.umd.js.map
