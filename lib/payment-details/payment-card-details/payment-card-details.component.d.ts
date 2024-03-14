import { OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonPaymentService } from '../../serivces/common-payment.service';
import * as i0 from "@angular/core";
export declare class PaymentCardDetailsComponent implements OnInit {
    private fb;
    private commomPaymentService;
    payEmitter: EventEmitter<any>;
    userData: any;
    storedCards: any;
    cardType: any;
    cardPaymentData: any;
    cardSelectedType: any;
    constructor(fb: FormBuilder, commomPaymentService: CommonPaymentService);
    card: boolean;
    container: any;
    cardwidth: Number;
    messages: any;
    placeholders: any;
    masks: any;
    formatting: boolean;
    debug: boolean;
    creditForm: FormGroup;
    summary: any;
    companyNameSelected: boolean;
    isCardNumberLength: boolean;
    cardLogo: any;
    cardImg: string;
    storedCardData: any;
    paymentStoredDetials: any;
    portalName: any;
    ngOnInit(): void;
    dropdown(val: any): void;
    buildCreditForms(): void;
    companyNameClick(): void;
    keypress(): void;
    setCardType(): void;
    defaultCard(): void;
    errorHandler(): void;
    cardSelected(val: any, from: string): void;
    detectCardType(number: number): string | false;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentCardDetailsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaymentCardDetailsComponent, "lib-payment-card-details", never, { "cardPaymentData": "cardPaymentData"; }, { "payEmitter": "payEmitter"; }, never, never>;
}
