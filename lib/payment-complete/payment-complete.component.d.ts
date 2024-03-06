import { EventEmitter, OnInit } from '@angular/core';
import { CommonPaymentService } from '../serivces/common-payment.service';
import * as i0 from "@angular/core";
export declare class PaymentCompleteComponent implements OnInit {
    private commonPaymentService;
    pending: boolean;
    userResponse: any;
    paymentCharges: any;
    cardImg: string;
    paymentId: any;
    paymentFailed: boolean;
    loading: boolean;
    completePaymentData: any;
    items: any;
    balance: number;
    tip: number;
    uuid: any;
    amount: number;
    valid: boolean;
    paymentType: any;
    cardDetails: any;
    bankDetails: any;
    close: EventEmitter<boolean>;
    cardCharges: any;
    constructor(commonPaymentService: CommonPaymentService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentCompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentCompleteComponent, "lib-payment-complete", never, { "paymentId": "paymentId"; "valid": "valid"; "paymentType": "paymentType"; "cardDetails": "cardDetails"; "bankDetails": "bankDetails"; }, { "close": "close"; }, never, never>;
}
