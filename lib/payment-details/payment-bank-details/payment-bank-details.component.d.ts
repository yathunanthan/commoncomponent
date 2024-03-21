import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonPaymentService } from '../../serivces/common-payment.service';
import * as i0 from "@angular/core";
export declare class PaymentBankDetailsComponent implements OnInit {
    private fb;
    private commonService;
    paymentData: any;
    countryName: any;
    paymentType: any;
    paymentForm: FormGroup;
    paymentForm1: FormGroup;
    testForm: FormGroup;
    companyNameSelected: boolean;
    paymentTypeS: any;
    payEmitter: EventEmitter<any>;
    userData: any;
    constructor(fb: FormBuilder, commonService: CommonPaymentService);
    ngOnInit(): void;
    buildPaymetForm(): void;
    companyNameClick(): void;
    keypress(): void;
    branch_codeFormat(el: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentBankDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentBankDetailsComponent, "lib-payment-bank-details", never, { "paymentData": "paymentData"; "paymentTypeS": "paymentTypeS"; }, { "payEmitter": "payEmitter"; }, never, never>;
}
