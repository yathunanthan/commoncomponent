import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaymentDetailsComponent implements OnInit {
    paymentMethodType: any;
    paymentEnable: any;
    settings: any;
    devicePayment: boolean;
    clientTelephone: any;
    testResult: any;
    valid(paymentEnable: any): void;
    genericPaymentDetails: any;
    tip: any;
    paymentMethodAllowed: any;
    paymentMethod: any;
    paymentCompleted: boolean;
    canDoWalletPay: boolean;
    walletPayLogoName: string;
    walletPayDesc: string;
    walletDetails: any;
    emitter: EventEmitter<string>;
    payEmitter: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    paymentSelected(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentDetailsComponent, "lib-payment-details", never, { "genericPaymentDetails": "genericPaymentDetails"; "tip": "tip"; }, { "emitter": "emitter"; "payEmitter": "payEmitter"; }, never, never>;
}
