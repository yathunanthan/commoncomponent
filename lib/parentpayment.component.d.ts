import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ParentpaymentComponent implements OnInit {
    paymentDetails: any;
    commonPaymentEnableEmitter: EventEmitter<string>;
    valid(paymentEnable: any): void;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParentpaymentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParentpaymentComponent, "lib-parentpayment", never, { "paymentDetails": "paymentDetails"; }, { "commonPaymentEnableEmitter": "commonPaymentEnableEmitter"; }, never, never>;
}
