import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class PaymentBankDetailsComponent implements OnInit {
    private fb;
    countryName: any;
    paymentType: any;
    paymentForm: FormGroup;
    paymentForm1: FormGroup;
    testForm: FormGroup;
    companyNameSelected: boolean;
    paymentTypeS: any;
    payEmitter: EventEmitter<any>;
    userData: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    buildPaymetForm(): void;
    companyNameClick(): void;
    keypress(): void;
    branch_codeFormat(el: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentBankDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentBankDetailsComponent, "lib-payment-bank-details", never, { "paymentTypeS": "paymentTypeS"; }, { "payEmitter": "payEmitter"; }, never, never>;
}
