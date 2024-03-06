import { EventEmitter, OnInit } from '@angular/core';
import { CommonPaymentService } from '../serivces/common-payment.service';
import * as i0 from "@angular/core";
export declare class PaymentCompleteComponent implements OnInit {
    private commonPaymentService;
    valid: boolean;
    cardDetails: any;
    completePageDetails: any;
    pending: boolean;
    userResponse: any;
    paymentCharges: any;
    cardImg: string;
    paymentFailed: boolean;
    loading: boolean;
    completePaymentData: any;
    items: any;
    balance: number;
    tip: number;
    uuid: any;
    amount: number;
    close: EventEmitter<boolean>;
    cardCharges: any;
    constructor(commonPaymentService: CommonPaymentService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentCompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentCompleteComponent, "lib-payment-complete", never, { "valid": "valid"; "cardDetails": "cardDetails"; "completePageDetails": "completePageDetails"; }, { "close": "close"; }, never, never>;
}
