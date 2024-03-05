import { OnInit, EventEmitter } from '@angular/core';
import { CommonPaymentService } from '../public-api';
import * as i0 from "@angular/core";
export declare class ParentpaymentComponent implements OnInit {
    private commonService;
    paymentDetails: any;
    commonPaymentEnableEmitter: EventEmitter<string>;
    commonSelectPaymentMethodEmitter: EventEmitter<string>;
    apiUrl: any;
    storedCardData: any;
    valid(paymentEnable: any): void;
    selectPaymentMethod(paymentMethod: any): void;
    constructor(commonService: CommonPaymentService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParentpaymentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParentpaymentComponent, "lib-parentpayment", never, { "paymentDetails": "paymentDetails"; "apiUrl": "apiUrl"; }, { "commonPaymentEnableEmitter": "commonPaymentEnableEmitter"; "commonSelectPaymentMethodEmitter": "commonSelectPaymentMethodEmitter"; }, never, never>;
}
