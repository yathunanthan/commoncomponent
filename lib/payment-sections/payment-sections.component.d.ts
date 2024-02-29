import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaymentSectionsComponent implements OnInit {
    paymentEnable: any;
    settings: any;
    devicePayment: boolean;
    testResult: any;
    valid(paymentEnable: any): void;
    userData: any;
    tip: any;
    paymentMethodAllowed: any;
    paymentMethodType: any;
    paymentMethod: any;
    paymentCompleted: boolean;
    canDoWalletPay: boolean;
    walletPayLogoName: string;
    walletPayDesc: string;
    walletDetails: any;
    constructor();
    emitter: EventEmitter<string>;
    payEmitter: EventEmitter<any>;
    ngOnInit(): void;
    paymentSelected(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentSectionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentSectionsComponent, "app-payment-sections", never, { "tip": "tip"; }, { "emitter": "emitter"; "payEmitter": "payEmitter"; }, never, never>;
}
