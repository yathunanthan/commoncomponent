(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/common'), require('angular-cc-library'), require('ngx-card')) :
    typeof define === 'function' && define.amd ? define('parentpayment', ['exports', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/common', 'angular-cc-library', 'ngx-card'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parentpayment = {}, global.ng.core, global.ng.forms, global.ng.common.http, global.ng.common, global.angularCcLibrary, global.i3$1));
})(this, (function (exports, i0, i1$1, i1, i3, angularCcLibrary, i3$1) { 'use strict';

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
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);

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

    var CommonPaymentService = /** @class */ (function () {
        function CommonPaymentService(http) {
            this.http = http;
        }
        CommonPaymentService.prototype.getCountryName = function () {
            return this.http.get("https://restcountries.com/v3.1/all");
        };
        return CommonPaymentService;
    }());
    CommonPaymentService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonPaymentService, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CommonPaymentService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonPaymentService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CommonPaymentService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var PaymentBankDetailsComponent = /** @class */ (function () {
        // @Injectable({providedIn: 'root'})
        // resp: any;
        // testObj:any;
        function PaymentBankDetailsComponent(fb, commonService) {
            this.fb = fb;
            this.commonService = commonService;
            this.companyNameSelected = false;
            this.payEmitter = new i0.EventEmitter();
        }
        PaymentBankDetailsComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.paymentTypeS == 'PAD') {
                this.paymentType = 1;
                this.commonService.getCountryName().subscribe(function (response) {
                    _this.countryName = response.map(function (country) { return country.name.common; });
                });
            }
            else if (this.paymentTypeS == 'Bank transfer') {
                this.paymentType = 2;
                this.buildPaymetForm();
            }
            else if (this.paymentTypeS == 'ACH') {
                this.paymentType = 3;
            }
            else if (this.paymentTypeS == 'SEPA') {
                this.paymentType = 4;
            }
            this.companyNameSelected = this.paymentData.customerDetails.customerType != 'customer';
            console.log(this.paymentData);
        };
        PaymentBankDetailsComponent.prototype.buildPaymetForm = function () {
            if (this.paymentType == 1) {
                this.paymentForm = this.fb.group({
                    firstName: ['', [i1$1.Validators.required]],
                    lastName: ['', [i1$1.Validators.required]],
                    email: ['', [i1$1.Validators.required, i1$1.Validators.email]],
                    country: ['', [i1$1.Validators.required]],
                    institutionNo: ['', [i1$1.Validators.required]],
                    transitNo: ['', [i1$1.Validators.required]],
                    accountNo: ['', [i1$1.Validators.required,]],
                });
            }
            else if (this.paymentType == 2) {
                this.paymentForm = this.fb.group({
                    instantpayment: this.fb.group({
                        country_code: 'GB',
                        currency: this.paymentData.currencyCode,
                        payment: this.fb.group({
                            description: "Invoice no : #" + this.paymentData.invoiceDetails.invoiceNumber,
                            amount: [0, [i1$1.Validators.required]],
                            app_fee: "1",
                        }),
                        customer: this.fb.group({
                            commusoftId: 0,
                            addressline1: this.paymentData.customerDetails.addressline1,
                            addressline2: this.paymentData.customerDetails.addressline2 + ((this.paymentData.customerDetails.addressline2 && this.paymentData.customerDetails.addressline3) ? ", " : '') + this.paymentData.customerDetails.addressline3,
                            companyname: "",
                            surname: this.paymentData.customerDetails.surname,
                            firstname: this.paymentData.customerDetails.name,
                            postcode: this.paymentData.customerDetails.postcode,
                            phonenumber: "",
                            region: this.paymentData.customerDetails.county,
                            email: [this.paymentData.customerDetails.emailId, [i1$1.Validators.required, i1$1.Validators.email]]
                        }),
                        bank: this.fb.group({
                            firstname: [this.paymentData.customerDetails.customerName, [i1$1.Validators.required]],
                            lastname: [""],
                            account_number: ['', [i1$1.Validators.required]],
                            iban: "",
                            account_type: "",
                            bank_code: "",
                            branch_code: ["", [i1$1.Validators.required]],
                        })
                    }),
                });
            }
            else if (this.paymentType == 3) {
                this.paymentForm = this.fb.group({
                    directdebit: this.fb.group({
                        tablepkid: [],
                        tabletype: 'invoice',
                        country_code: 'US',
                        bank_mandate_ref: [''],
                        currency: this.paymentData.currencyCode,
                        scheme: "ach",
                        payment: this.fb.group({
                            description: "Invoice no : #" + this.paymentData.invoiceDetails.invoiceNumber,
                            amount: [0, [i1$1.Validators.required]],
                        }),
                        customer: this.fb.group({
                            commusoftId: 0,
                            addressline1: this.paymentData.customerDetails.addressline1,
                            addressline2: this.paymentData.customerDetails.addressline2 + ((this.paymentData.customerDetails.addressline2 && this.paymentData.customerDetails.addressline3) ? ", " : '') + this.paymentData.customerDetails.addressline3,
                            companyname: "",
                            surname: this.paymentData.customerDetails.surname,
                            firstname: this.paymentData.customerDetails.name,
                            postcode: this.paymentData.customerDetails.postcode,
                            phonenumber: "",
                            region: this.paymentData.customerDetails.county,
                            email: [this.paymentData.customerDetails.emailId, [i1$1.Validators.required, i1$1.Validators.email]],
                            language: ""
                        }),
                        bank: this.fb.group({
                            firstname: [this.paymentData.customerDetails.customerName, [i1$1.Validators.required]],
                            lastname: [""],
                            account_number: ['', [i1$1.Validators.required]],
                            iban: "",
                            account_type: "",
                            bank_code: "",
                            branch_code: ["", [i1$1.Validators.required]],
                        })
                    }),
                });
            }
            else if (this.paymentType == 4) {
                this.paymentForm = this.fb.group({
                    firstName: ['', [i1$1.Validators.required]],
                    lastName: ['', [i1$1.Validators.required]],
                    email: ['', [i1$1.Validators.required, i1$1.Validators.email]],
                    creditorIdentifier: ['', [i1$1.Validators.required]],
                    internationalBankAccountNo: ['', [i1$1.Validators.required]],
                    accountNo: ['', [i1$1.Validators.required,]],
                    billingAddress1: ['', [i1$1.Validators.required]],
                    billingAddress2: ['', [i1$1.Validators.required]],
                });
            }
        };
        PaymentBankDetailsComponent.prototype.companyNameClick = function () {
            var _a;
            this.companyNameSelected = !this.companyNameSelected;
            this.paymentForm.patchValue({ 'instantpayment': { 'bank': { 'firstname': '' } } });
            this.paymentForm.patchValue({ 'directdebit': { 'bank': { 'lastname': '' } } });
            (_a = this.paymentForm.get('directdebit.bank.lastname')) === null || _a === void 0 ? void 0 : _a.setValue(this.companyNameSelected ? this.paymentData.customerDetails.customerName : (this.paymentData.customerDetails.surname ? this.paymentData.customerDetails.surname : this.paymentData.customerDetails.customerName));
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
    PaymentBankDetailsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentBankDetailsComponent, deps: [{ token: i1__namespace$1.FormBuilder }, { token: CommonPaymentService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PaymentBankDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: { paymentData: "paymentData", paymentTypeS: "paymentTypeS" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<form *ngIf=\"paymentForm\" [formGroup]=\"paymentForm\">\n    <div formGroupName=\"instantpayment\" *ngIf=\"paymentType == 2\">\n\n        <div class=\"content-group\">\n            <div *ngIf=\"paymentType!=2  && !companyNameSelected\" class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"lable required\">First name</div>\n                    <input formControlName=\"instantpayment.bank.firstname\" class=\"field\" type=\"text\"\n                        (keyup)=\"keypress()\">\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"lable required\">Last name</div>\n                    <input formControlName=\"instantpayment.bank.lastname\" class=\"field\" type=\"text\"\n                        (keyup)=\"keypress()\">\n                </div>\n            </div>\n            <div *ngIf=\"paymentType==2 && !companyNameSelected\" class=\"direct-debit\">\n                <div formGroupName=\"bank\">\n                    <div class=\"form-group\">\n                        <div class=\"lable required\">Account holder\u2019s name</div>\n                        <input formControlName=\"firstname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\">\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"companyNameSelected\" class=\"direct-debit\">\n                <div formGroupName=\"bank\">\n                    <div class=\"form-group\">\n                        <div class=\"lable required\">Company name</div>\n                        <input formControlName=\"firstname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\">\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to\n                use a company name</div>\n            <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to\n                use your personal information</div>\n        </div>\n        <div class=\"content-group\">\n            <div formGroupName=\"customer\">\n                <div class=\"form-group\">\n                    <div class=\"lable required\">Email address</div>\n                    <input formControlName=\"email\" class=\"field\" type=\"text\" placeholder=\"william.ty@example.co\"\n                        (keyup)=\"keypress()\">\n                    <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n\n                </div>\n            </div>\n\n        </div>\n        <div *ngIf=\"paymentType==1\" class=\"content-group\">\n            <div class=\"lable required \">instantpayment</div>\n            <select formControlName=\"instantpayment.country_code\" (click)=\"keypress()\">\n                <option value=\"\" disabled selected hidden>Please select</option>\n                <option *ngFor=\"let name of countryName\" [value]=\"name\">{{name}}</option>\n            </select><i class=\"fa-solid fa-angle-down\"></i>\n        </div>\n        <div class=\"content-group\">\n            <div *ngIf=\"paymentType==1\" class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"lable required\">Institution number</div>\n                    <input formControlName=\"institutionNo\" class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\"\n                        (keyup)=\"keypress()\">\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"lable required transit-adjust\">Transit number</div>\n                    <input formControlName=\"transitNo\" class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\"\n                        (keyup)=\"keypress()\">\n                </div>\n            </div>\n            <div *ngIf=\"paymentType==2\" class=\"row\">\n                <div class=\"col-md-4\">\n                    <div formGroupName=\"bank\">\n                        <div class=\"form-group\">\n                            <div class=\"lable required\">Sort code</div>\n                            <input formControlName=\"branch_code\" class=\"field\" type=\"text\" placeholder=\"E.g. 10-20-30\"\n                                (input)=\"branch_codeFormat($event)\" maxlength=\"8\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div formGroupName=\"bank\">\n                        <div class=\"form-group\">\n                            <div class=\"lable required transit-adjust\">Account number</div>\n                            <input formControlName=\"account_number\" class=\"field\" type=\"text\"\n                                placeholder=\"E.g. 12345678\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"paymentType==1\" class=\"content-group\">\n            <div class=\"lable required\">Account number</div>\n            <input formControlName=\"accountNo\" class=\"field\" type=\"text\" placeholder=\"E.g. 12345678\"\n                (keyup)=\"keypress()\">\n        </div>\n\n        <div *ngIf=\"paymentType==4\" class=\"content-group\">\n            <div class=\"lable required\">Creditor identifier</div>\n            <input formControlName=\"creditorIdentifier\" class=\"field\" type=\"text\" placeholder=\"Creditor identifier\"\n                (keyup)=\"keypress()\">\n        </div>\n\n        <div *ngIf=\"paymentType==4\" class=\"content-group\">\n            <div class=\"lable required\">International bank account number (IBAN)</div>\n            <input formControlName=\"instantpayment.bank.iban\" class=\"field\" type=\"text\"\n                placeholder=\"International bank account number (IBAN)\" (keyup)=\"keypress()\">\n            <div class=\"invalid-input\"\n                *ngIf=\"paymentForm.controls['instantpayment.bank.iban'].invalid && (paymentForm.controls['instantpayment.bank.iban'].dirty || paymentForm.controls['instantpayment.bank.iban'].touched)\">\n                <span *ngIf=\"paymentForm.controls['instantpayment.bank.iban']?.errors?.required\">Please enter International bank account number (IBAN)</span>\n            </div>\n\n        </div>\n\n        <div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n            <div class=\"lable required\">Billing address</div>\n            <input formControlName=\"addressline1\" class=\"field\" type=\"text\" placeholder=\"Address Line 1\">\n            <div class=\"invalid-input\"\n                *ngIf=\"paymentForm.controls['addressline1'].invalid && (paymentForm.controls['addressline1'].dirty || paymentForm.controls['addressline1'].touched)\">\n                <span *ngIf=\"paymentForm.controls['addressline1']?.errors?.required\"> Please enter Billing address</span>\n            </div>\n            <input formControlName=\"addressline2\" class=\"field\" type=\"text\" placeholder=\"Address Line 2\"\n                style=\"margin-top:12px\">\n\n        </div>\n        <div *ngIf=\"paymentType==3 || paymentType==4\" class=\"content-group\">\n            <div class=\"lable required\">Bank account number</div>\n            <input formControlName=\"accountNo\" class=\"field\" type=\"text\" placeholder=\"Bank account number\"\n                (keyup)=\"keypress()\">\n            <div class=\"invalid-input\"\n                *ngIf=\"paymentForm.controls['accountNo'].invalid && (paymentForm.controls['accountNo'].dirty || paymentForm.controls['accountNo'].touched)\">\n                <span *ngIf=\"paymentForm.controls['accountNo']?.errors?.required\">Please enter card holder's name</span>\n            </div>\n\n        </div>\n        <div *ngIf=\"paymentType==3\" class=\"content-group\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"lable required\">Routing number</div>\n                    <input formControlName=\"routingNo\" class=\"field\" type=\"text\" placeholder=\"Routing number\"\n                        (keyup)=\"keypress()\">\n                    <div class=\"invalid-input\"\n                        *ngIf=\"paymentForm.controls['routingNo'].invalid && (paymentForm.controls['routingNo'].dirty || paymentForm.controls['routingNo'].touched)\">\n                        <span *ngIf=\"paymentForm.controls['routingNo']?.errors?.required\">Please enter Routing number</span>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"lable required transit-adjust\">Account type</div>\n                    <select formControlName=\"instantpayment.bank.account_type\" (click)=\"keypress()\">\n                        <option value=\"\" disabled selected hidden>Please select</option>\n                        <option>xxxx - xxxx - xxxx - 1234</option>\n                        <option>Use existing credit card</option>\n                    </select><i class=\"fa-solid fa-angle-down\"></i>\n                </div>\n            </div>\n        </div>\n        <div class=\"content-group\" style=\"margin-bottom: 0;\">\n            <div *ngIf=\"paymentType==1\">\n                <div class=\"confirm\">\n                    <span style=\"margin-top: 5px;\">I confirm that I am the account holder and am authorised to set up\n                        PAD payments on this account</span>\n                </div>\n            </div>\n\n            <div *ngIf=\"paymentType==2\">\n                <div class=\"confirm\">\n                    <span>We work with a company called GoCardless. They help us process your payment, which involves\n                        some of your personal data. By continuing, you agree to their terms of use and understand their<a href=\"https://gocardless.com/privacy/payers/\" target=\"_blank\"> privacy\n                            notice.</a></span>\n                </div>\n            </div>\n\n\n            <div *ngIf=\"paymentType==3\">\n                <div class=\"confirm-msg\">\n                    This service is provided by Community Federal Savings Bank (\u201CCFSB\u201D), member FDIC, forwhich\n                    GoCardless Ltd acts as a third-party servicer. GoCardless and CFSB use personal data as described in\n                    <a>these privacy notices</a>. By submitting this form, you agree to the GoCardless <a>Website Terms\n                        of Use</a>. GoCardless uses analytics <a>cookies</a>.\n                </div>\n            </div>\n\n            <div *ngIf=\"paymentType==4\">\n                <div class=\"confirm-msg\">\n                    By signing this mandate form, you authorise (A) GoCardless to send instructions to your bank to\n                    debit your account (B) your bank to debit your account in accordance with the instructions from\n                    GoCardless. As part of your rights, you are entitled to refund from your bank under the terms and\n                    conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from\n                    the date on which your account was debited.\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- <div formGroupName=\"directdebit\" *ngIf=\"paymentType == 3\">\n\n        <div class=\"content-group\" *ngIf=\"ACHBankDetails && ACHBankDetails.length != 0\" style=\"margin-bottom:-16px\">\n            <select (change)=\"dropdown($event.target)\">\n                <option>Use existing bank details</option>\n                <option>Set up new bank mandate</option>\n            </select><i class=\"fa-solid fa-angle-down\"></i>\n            <div class=\"vh\"></div>c\n        </div>\n        <div *ngIf=\"isBankDetails\">\n            <div class=\"content-group group-card\" style=\"margin-top:32px;margin-bottom: 0;\">\n                <div class=\"lable\">Select mandate</div>\n                <select (change)=\"cardSelected($event.target,'html')\">\n                    <option value=\"\" disabled selected hidden>Please select</option>\n                    <option *ngFor=\"let bank of ACHBankDetails\" [selected]=\"ACHBankDetails.length == 1\"\n                        [value]=\"bank.id\"><span class=\"cardDescription\">{{bank.bank_info.bank_name}} -\n                            {{bank.bank_info.account_holder_name}} - {{bank.bank_info.account_number_ending}}</span>\n                    </option>\n                </select><i class=\"fa-solid fa-angle-down\"></i>\n            </div>\n        </div>\n        <div *ngIf=\"!isBankDetails\" style=\"padding-top: 1px;\">\n            <div class=\"content-group\">\n                <div formGroupName=\"bank\">\n                    <div *ngIf=\"!companyNameSelected\" class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"lable \">{{'First name' | translate}}</div>\n                            <input formControlName=\"firstname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\">\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"lable required\">{{'Last name' | translate}}</div>\n                            <input formControlName=\"lastname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"companyNameSelected\" class=\"direct-debit\">\n                    <div formGroupName=\"bank\">\n                        <div class=\"form-group\">\n                            <div class=\"lable required\">{{'Company name' | translate}}</div>\n                            <input formControlName=\"lastname\" class=\"field\" type=\"text\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">{{'Or click\n                    here to use a company name' | translate}}</div>\n                <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">{{'Or click here\n                    to use your personal information' | translate}}</div>\n            </div>\n            <div class=\"content-group\">\n                <div formGroupName=\"customer\">\n                    <div class=\"form-group\">\n                        <div class=\"lable required\">{{'Email address' | translate}}</div>\n                        <input formControlName=\"email\" class=\"field\" type=\"email\" placeholder=\"william.ty@example.co\"\n                            (keyup)=\"keypress()\">\n                        <div class=\"email-info\">{{'This email will only be used to keep you updated about their\n                            payments' | translate}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-group\">\n                <div formGroupName=\"customer\">\n                    <div class=\"lable\">{{'Billing address' | translate}}</div>\n                    <input formControlName=\"addressline1\" class=\"field\" type=\"text\" placeholder=\"Address Line 1\">\n\n                    <input formControlName=\"addressline2\" class=\"field\" type=\"text\" placeholder=\"Address Line 2\"\n                        style=\"margin-top:12px\">\n                </div>\n            </div>\n            <div class=\"content-group\">\n                <div formGroupName=\"bank\">\n                    <div class=\"lable required\">{{'Bank account number' | translate}}</div>\n                    <input formControlName=\"account_number\" class=\"field\" type=\"text\" placeholder=\"Bank account number\"\n                        (keyup)=\"keypress()\">\n                </div>\n            </div>\n            <div class=\"content-group\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div formGroupName=\"bank\">\n                            <div class=\"lable required\">{{'Routing number' | translate}}</div>\n                            <input formControlName=\"bank_code\" class=\"field\" type=\"text\" placeholder=\"Routing number\"\n                                (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div formGroupName=\"bank\">\n                            <div class=\"lable required transit-adjust\">{{'Account type' | translate}}</div>\n                            <select formControlName=\"account_type\" (click)=\"keypress()\">\n                                <option value=\"\" disabled selected hidden>{{'Please select' | translate}}</option>\n                                <option>{{'Checking' | translate}}</option>\n                                <option>{{'Savings' | translate}}</option>\n                            </select><i class=\"fa-solid fa-angle-down\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-group\" style=\"margin-bottom: 0;\">\n                <div>\n                    <div class=\"confirm-msg\">\n                        This service is provided by Community Federal Savings Bank (\u201CCFSB\u201D), member FDIC, forwhich\n                        GoCardless Ltd acts as a third-party servicer. GoCardless and CFSB use personal data as\n                        described in <a href=\"https://gocardless.com/privacy/payers/\" target=\"_blank\">these privacy\n                            notices</a>. By submitting this form, you agree to the GoCardless <a\n                            href=\"https://gocardless.com/legal/customers/\" target=\"_blank\">Website Terms of Use</a>.\n                        GoCardless uses analytics <a href=\"https://privacy.gocardless.com/trackers/en-GB/\"\n                            target=\"_blank\">cookies</a>.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</form>", styles: ["a{color:var(--circleFontColour)!important;cursor:pointer;text-decoration:none}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor);font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:24px}.field:focus-visible{outline:1px solid var(--inputHighlight)}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px;font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px}.content-group{margin:16px 0;font-size:14px}.content-group select:invalid{color:gray}.content-group select{appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.content-group ::placeholder{color:#c9c9c9;opacity:1}.content-group :-ms-input-placeholder{color:#c9c9c9}.content-group ::-ms-input-placeholder{color:#c9c9c9}select{width:100%;height:40px}#confirm{min-width:24px;height:24px;margin-right:12px;cursor:pointer}.confirm{font-size:14px;color:var(--primaryTextColor);display:flex;margin-top:16px;align-items:center}.confirm input[type=checkbox]{outline:1px solid #EEEEEE}.form-check-input:focus{border-color:#c9c9c9!important;outline:0;box-shadow:0 0 0 .25rem #0d6efd00}.form-check-input:checked{background-color:#3883c1;border-color:#3883c1!important}.addons-checkbox{width:24px;height:24px;margin-bottom:5px;border-color:#c9c9c9!important;outline:0;border-style:solid;border-width:1px}.confirm-msg{font-size:14px;color:var(--primaryTextColor)}.confirm-msg a{color:var(--linkColor)!important}.confirm-msg a:hover{color:var(--linkVisitedColor)!important}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 768px){.transit-adjust{margin-top:8px}.confirm{align-items:baseline}.content-group{margin:12px 0}}\n"], directives: [{ type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace$1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i1__namespace$1.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { type: i1__namespace$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1__namespace$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i3__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentBankDetailsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-bank-details',
                        templateUrl: './payment-bank-details.component.html',
                        styleUrls: ['./payment-bank-details.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }, { type: CommonPaymentService }]; }, propDecorators: { paymentData: [{
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
            this.cardLogo = '';
            this.cardImg = "";
        }
        PaymentCardDetailsComponent.prototype.ngOnInit = function () {
            this.payEmitter.emit(true);
        };
        PaymentCardDetailsComponent.prototype.dropdown = function (val) {
            var _this = this;
            this.cardType = false;
            this.payEmitter.emit(false);
            if (val == 'Set up new debit or credit card') {
                setTimeout(function () {
                    _this.card = false;
                    _this.buildCreditForms();
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
        };
        PaymentCardDetailsComponent.prototype.buildCreditForms = function () {
            var date = new Date().toISOString().slice(0, 10);
            this.creditForm = this.fb.group({
                payment: this.fb.group({
                    'amount': [],
                    'cardCharge': [this.cardPaymentData.cardCharges['']],
                    'cardName': [this.cardPaymentData.customerDetails.customerName, [i1$1.Validators.required]],
                    'cardNumber': ['', [i1$1.Validators.required, angularCcLibrary.CreditCardValidators.validateCCNumber]],
                    'cardCvc': ['', [i1$1.Validators.required, i1$1.Validators.minLength(3), i1$1.Validators.maxLength(4)]],
                    'paymentDate': [date],
                    'description': ["Invoice no : " + this.cardPaymentData.invoiceDetails.invoiceNumber],
                    'isportal': [true],
                    'reference': ['Invoice no : ' + this.cardPaymentData.invoiceDetails.invoiceNumber,],
                    'email': [this.cardPaymentData.customerDetails.emailId, [i1$1.Validators.required, i1$1.Validators.email]],
                    'expiry': ['', [i1$1.Validators.required, angularCcLibrary.CreditCardValidators.validateExpDate]],
                    "paymentMethod": [this.cardPaymentData.cardCharges['']],
                    "dontSendToAccounts": [''],
                })
            });
            this.placeholders = { name: this.cardPaymentData.customerDetails.customerName ? this.cardPaymentData.customerDetails.customerName : 'Full Name' };
        };
        PaymentCardDetailsComponent.prototype.companyNameClick = function () {
            this.companyNameSelected = !this.companyNameSelected;
            this.creditForm.patchValue({ 'payment': { 'cardName': '' } });
        };
        PaymentCardDetailsComponent.prototype.keypress = function () {
            this.payEmitter.emit(this.creditForm);
        };
        PaymentCardDetailsComponent.prototype.setCardType = function () {
            this.cardLogo = this.detectCardType(this.creditForm.value.payment.cardNumber.replace(/\s/g, ""));
            var cardStatus = this.creditForm.get('payment.cardNumber');
            if (this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "INVALID")
                this.isCardNumberLength = false;
            if (!this.isCardNumberLength && (cardStatus === null || cardStatus === void 0 ? void 0 : cardStatus.status) == "VALID")
                this.isCardNumberLength = true;
            this.payEmitter.emit(this.creditForm);
            this.cardImg = "assets/paymentType/" + this.cardLogo + ".svg";
        };
        PaymentCardDetailsComponent.prototype.defaultCard = function () {
            this.cardImg = "assets/paymentType/card.svg";
        };
        PaymentCardDetailsComponent.prototype.cardSelected = function (val, from) {
            var _this = this;
            val = from == 'html' ? val.value : val;
            var storedCard = this.storedCards.find(function (x) { return x.id == val; }).description;
            this.cardType = storedCard.substring(0, storedCard.indexOf('ending') - 1);
            var date = new Date().toISOString().slice(0, 10);
            this.creditForm = this.fb.group({
                'paymentDate': [date, [i1$1.Validators.required]],
                'description': ["Invoice no : #" + this.cardPaymentData.invoiceDetails.invoiceNumber],
                'reference': ['Invoice no : #' + this.cardPaymentData.invoiceDetails.invoiceNumber,],
                'paymentMethod': [this.cardPaymentData.cardCharges[this.cardPaymentData.cardCharges.length - 1].paymentMethodId, [i1$1.Validators.required]],
                'storedCard': [val, [i1$1.Validators.required]],
                'cardName': [this.cardPaymentData.customerDetails.customerName, [i1$1.Validators.required]],
                'amount': [],
                'cardCharge': [this.cardPaymentData.cardCharges[this.cardPaymentData.cardCharges.length - 1].charge,],
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
    PaymentCardDetailsComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentCardDetailsComponent, deps: [{ token: i1__namespace$1.FormBuilder }], target: i0__namespace.ɵɵFactoryTarget.Component });
    PaymentCardDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", inputs: { cardPaymentData: "cardPaymentData" }, outputs: { payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<div class=\"content-group\" style=\"margin-bottom:-16px\">\n    <select (change)=\"dropdown($event.target)\">\n        <option>Use existing credit card</option>\n        <option>Set up new debit or credit card</option>\n    </select><i class=\"fa-solid fa-angle-down\"></i>\n    <div class=\"vh\"></div>\n</div>\n\n<div *ngIf=\"card\">\n    <div class=\"content-group\" style=\"margin-top:32px;margin-bottom: 0;\">\n        <div class=\"lable\">Select card</div>\n        <select (change)=\"cardSelected($event.target,'html')\">\n            <option value=\"\" disabled selected hidden>Please select</option>\n        </select><i class=\"fa-solid fa-angle-down\"></i>\n    </div>\n</div>\n<div *ngIf=\"!card\">\n    <form [formGroup]=\"creditForm\" card container=\".card-container\" [card-width]=\"410\" [messages]=\"messages\"\n        [placeholders]=\"placeholders\" [masks]=\"masks\" [formatting]=\"formatting\" [debug]=\"debug\">\n         <!-- <div formGroupName=\"payment\"> -->\n            <div class=\"row\">\n                <div class=\"col-md-6 credit-card-hide\">\n                    <div class=\"card-container\">\n\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"content-group\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"lable required\">Cardholder's name\n                        </div>\n                        <div *ngIf=\"companyNameSelected\" class=\"lable required\">Company name</div>\n                        <input class=\"field\" type=\"text\" card-name formControlName=\"cardName\" (keyup)=\"keypress()\">\n                        <div *ngIf=\"!companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use a company name</div>\n                        <div *ngIf=\"companyNameSelected\" class=\"company-name-link\" (click)=\"companyNameClick()\">Or click here to use your personal information</div>\n                    </div>\n                    <div class=\"content-group\">\n                        <div class=\"lable required\">Card number</div>\n                        <input class=\"field\" type=\"tel\" autocomplete=\"cc-number\" card-number\n                            formControlName=\"cardNumber\" maxlength=\"19\" placeholder=\"xxxx xxxx xxxx xxxx\"\n                            (keyup)=\"setCardType()\" [class.error_field]=\"!isCardNumberLength\">\n                        <img *ngIf=\"cardLogo\" class=\"icon-align\" src=\"{{cardImg}}\" (error)=\"defaultCard()\"\n                            alt=\"card name\">\n                    </div>\n                    <div class=\"row row-group\">\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">CVC</div>\n                            <input class=\"field\" type=\"password\" autocomplete=\"new-password\" pattern=\"[0-9]*\"\n                                inputmode=\"numeric\" card-cvc placeholder=\"xxx\" formControlName=\"cardCvc\"\n                                (keyup)=\"keypress()\">\n                        </div>\n                        <div class=\"col content-group\">\n                            <div class=\"lable required\">Exp date</div>\n                            <input class=\"field\" type=\"tel\" autocomplete=\"cc-exp\" card-expiry formControlName=\"expiry\"\n                                placeholder=\"MM / YY\" (keyup)=\"keypress()\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"content-group\" style=\"margin-bottom: 0;\">\n                <div class=\"lable required\">Email address</div>\n                <input class=\"field\" formControlName=\"email\" type=\"email\" (keyup)=\"keypress()\">\n                <div class=\"email-info\">This email will only be used to keep you updated about their payments</div>\n            </div>\n        <!-- </div> -->\n    </form>\n</div>\n", styles: [".content-group{margin:16px 0;font-size:14px}.content-group .vh{border-bottom:1px dashed var(--primaryBorderColor);margin:16px 0}.content-group select{cursor:pointer;appearance:none;background-color:#fff;border:1px solid var(--primaryBorderColor);border-radius:4px;padding:0 5px;color:var(--primaryTextColor)}.content-group select:focus-visible{outline:1px solid var(--inputHighlight)}.content-group .fa-angle-down{position:absolute;margin-left:-30px;margin-top:13px;color:var(--primaryTextColor)}.row-group{margin:-16px 0 0;grid-gap:24px;gap:24px}.row-group .col{padding:0}select{width:100%;height:40px}.icon-align{margin-top:4px;width:50px;position:absolute;margin-left:-54px}.lable{font-size:14px;color:var(--primaryTextColor);padding-bottom:8px}.field{width:100%;border:1px solid var(--primaryBorderColor);border-radius:4px;height:40px;padding:0 5px;color:var(--primaryTextColor)}.field:focus-visible{outline:1px solid var(--inputHighlight)}.error_field{border-color:var(--negativeButtonColour)}.error_field:focus-visible{outline:none}.company-name-link{padding-top:8px;color:var(--tertiaryButtonFontColour);cursor:pointer;max-width:-moz-fit-content;max-width:fit-content}.email-info{color:var(--positiveFoundation);margin-top:8px}.credit-card-hide{margin:auto}.card-container{margin-top:25px}.invalid-input{margin-top:5px;color:#b94a48}@media (max-width: 857px){.card-container{transform:scale(.9)}}@media (max-width: 768px){.card-container{transform:scale(.79)}.content-group{margin:12px 0}}@media (max-width: 578px){.row-group{grid-gap:16px;gap:16px}}@media (max-width: 425px){.card-container{margin-bottom:12px;margin-top:0;margin-left:0;transform:scale(.9)!important}}@media (max-width: 380px){.card-container{margin-top:0;margin-left:0;margin-bottom:0;transform:scale(.8)!important}}@media (max-width: 320px){.card-container{margin-left:-20px;margin-top:0;margin-bottom:0;transform:scale(.65)!important}}\n"], directives: [{ type: i1__namespace$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i1__namespace$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1__namespace$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i3__namespace$1.NgxCard, selector: "[card]", inputs: ["formatting", "debug", "messages", "placeholders", "container", "card-width", "masks"] }, { type: i1__namespace$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1__namespace$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace$1.NgxCardNameTemplate, selector: "[card-name]" }, { type: i1__namespace$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1__namespace$1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }, { type: i3__namespace$1.NgxCardNumberTemplate, selector: "[card-number]" }, { type: i1__namespace$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i1__namespace$1.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i3__namespace$1.NgxCardCvcTemplate, selector: "[card-cvc]" }, { type: i3__namespace$1.NgxCardExpiryTemplate, selector: "[card-expiry]" }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: PaymentCardDetailsComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-payment-card-details',
                        templateUrl: './payment-card-details.component.html',
                        styleUrls: ['./payment-card-details.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.FormBuilder }]; }, propDecorators: { payEmitter: [{
                    type: i0.Output
                }], cardPaymentData: [{
                    type: i0.Input
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
    PaymentDetailsComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: { genericPaymentDetails: "genericPaymentDetails", tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0__namespace, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"assets/icon/bank-transfer.svg\" alt=\"\">\n            </div>\n            <div class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"assets/icon/card.svg\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <lib-payment-bank-details *ngIf=\"paymentMethod == '1'\" [paymentTypeS]=\"paymentMethodType\" [paymentData]=\"genericPaymentDetails\"></lib-payment-bank-details>\n        <lib-payment-card-details *ngIf=\"paymentMethod == '2'\" [cardPaymentData]=\"genericPaymentDetails\"></lib-payment-card-details>\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: ["paymentData", "paymentTypeS"], outputs: ["payEmitter"] }, { type: PaymentCardDetailsComponent, selector: "lib-payment-card-details", inputs: ["cardPaymentData"], outputs: ["payEmitter"] }], directives: [{ type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
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
            PaymentCardDetailsComponent], imports: [i3.CommonModule,
            i1.HttpClientModule,
            i1$1.ReactiveFormsModule,
            i1$1.FormsModule,
            i3$1.CardModule,
            angularCcLibrary.CreditCardDirectivesModule], exports: [ParentpaymentComponent] });
    ParentpaymentModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, imports: [[
                i3.CommonModule,
                i1.HttpClientModule,
                i1$1.ReactiveFormsModule,
                i1$1.FormsModule,
                i3$1.CardModule,
                angularCcLibrary.CreditCardDirectivesModule
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
                            i3.CommonModule,
                            i1.HttpClientModule,
                            i1$1.ReactiveFormsModule,
                            i1$1.FormsModule,
                            i3$1.CardModule,
                            angularCcLibrary.CreditCardDirectivesModule
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

    exports.CommonPaymentService = CommonPaymentService;
    exports.ParentpaymentComponent = ParentpaymentComponent;
    exports.ParentpaymentModule = ParentpaymentModule;
    exports.ParentpaymentService = ParentpaymentService;
    exports.PaymentBankDetailsComponent = PaymentBankDetailsComponent;
    exports.PaymentCardDetailsComponent = PaymentCardDetailsComponent;
    exports.PaymentDetailsComponent = PaymentDetailsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=parentpayment.umd.js.map
