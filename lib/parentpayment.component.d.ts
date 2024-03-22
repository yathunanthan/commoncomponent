import { OnInit, EventEmitter } from '@angular/core';
import { CommonPaymentService } from '../public-api';
import * as i0 from "@angular/core";
export declare class ParentpaymentComponent implements OnInit {
    private commonService;
    paymentDetails: any;
    commonPaymentEnableEmitter: EventEmitter<string>;
    commonSelectPaymentMethodEmitter: EventEmitter<string>;
    selectPaymentMethodEmitter: EventEmitter<string>;
    apiUrl: any;
    paymentSelectedOptions: any;
    valid(paymentEnable: any): void;
    payOptionsChecked(payOptions: any): void;
    selectPaymentMethod(paymentMethod: any): void;
    constructor(commonService: CommonPaymentService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParentpaymentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParentpaymentComponent, "lib-parentpayment", never, { "paymentDetails": "paymentDetails"; "apiUrl": "apiUrl"; "paymentSelectedOptions": "paymentSelectedOptions"; }, { "commonPaymentEnableEmitter": "commonPaymentEnableEmitter"; "commonSelectPaymentMethodEmitter": "commonSelectPaymentMethodEmitter"; "selectPaymentMethodEmitter": "selectPaymentMethodEmitter"; }, never, never>;
}
