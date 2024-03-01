import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-bank/payment-bank.component";
import * as i2 from "@angular/common";
export class PaymentSectionsComponent {
    constructor() {
        this.devicePayment = false;
        this.testResult = "testResult";
        this.paymentMethodAllowed = 3;
        this.paymentMethodType = 'Bank transfer';
        this.paymentMethod = 1;
        this.paymentCompleted = true;
        this.canDoWalletPay = false;
        this.walletPayLogoName = '';
        this.walletPayDesc = '';
        this.emitter = new EventEmitter();
        this.payEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        this.paymentEnable = paymentEnable;
        this.payEmitter.emit(paymentEnable);
    }
    ngOnInit() {
        this.emitter.emit(this.paymentMethodType);
    }
    // canWalletPay() {
    //     this.canDoWalletPay = false;
    //     if (this.userData.isStripeEnabled && this.userData.isWalletPayEnabled) {
    //         const stripe = window.Stripe(atob(this.userData.pk_token), {stripeAccount: this.userData.stripeConnectedAccountId});
    //         const paymentRequest = stripe.paymentRequest({
    //             country: this.userData.clientDetails.countryNameCode,
    //             currency: this.userData.currencyCode.toLowerCase(),
    //             total: {
    //                 label: 'Demo total',
    //                 amount: 1,
    //             },
    //             requestPayerName: true,
    //             requestPayerEmail: true,
    //         });
    //         (async () => {
    //             // Check the availability of the Payment Request API first.
    //             const result = await paymentRequest.canMakePayment();
    //             if (result) {
    //                 this.canDoWalletPay = true;
    //                 if (result.applePay) {
    //                     this.walletPayDesc = 'Apple Pay';
    //                     this.walletPayLogoName = 'ApplePay';
    //                 } else if (result.googlePay) {
    //                     this.walletPayDesc = 'Google Pay';
    //                     this.walletPayLogoName = 'GooglePay';
    //                 } else if (result.link) {
    //                     this.walletPayDesc = 'Pay via Link';
    //                     this.walletPayLogoName = 'LinkPay';
    //                 } else {
    //                     this.walletPayDesc = 'WalletPay';
    //                     this.walletPayLogoName = 'Wallet';
    //                 }
    //             } else {
    //                 console.log("Cannot make Wallet payments.");
    //             }
    //         })();
    //     }
    // }
    paymentSelected(value) {
        var temp = this.paymentMethod != value;
        if (value > 0) {
            this.paymentMethod = value;
            this.emitter.emit(value);
            var check = document.getElementById(value);
            if (check) {
                check.checked = true;
            }
            if (temp) {
                this.payEmitter.emit(true);
            }
        }
    }
}
PaymentSectionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentSectionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentSectionsComponent, selector: "lib-payment-sections", inputs: { tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"\" alt=\"\">\n            </div>\n            <!-- <div *ngIf=\"paymentMethodAllowed >= 2\" class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"\" alt=\"\"></div> -->\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <app-payment-bank></app-payment-bank>\n        <!-- <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card> -->\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i1.PaymentBankComponent, selector: "app-payment-bank", inputs: ["paymentTypeS"], outputs: ["payEmitter"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-sections',
                    templateUrl: './payment-sections.component.html',
                    styleUrls: ['./payment-sections.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tip: [{
                type: Input
            }], emitter: [{
                type: Output
            }], payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LXNlY3Rpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVEvRSxNQUFNLE9BQU8sd0JBQXdCO0lBc0JuQztRQWxCQSxrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQU0sWUFBWSxDQUFDO1FBUTdCLHlCQUFvQixHQUFRLENBQUMsQ0FBQztRQUM5QixzQkFBaUIsR0FBUSxlQUFlLENBQUE7UUFDeEMsa0JBQWEsR0FBUSxDQUFDLENBQUM7UUFDdkIscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUtqQixZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSGxELENBQUM7SUFoQmpCLEtBQUssQ0FBQyxhQUFrQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBbUJELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQywrRUFBK0U7SUFDL0UsK0hBQStIO0lBQy9ILHlEQUF5RDtJQUN6RCxvRUFBb0U7SUFDcEUsa0VBQWtFO0lBQ2xFLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFFZCx5QkFBeUI7SUFDekIsMEVBQTBFO0lBQzFFLG9FQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsOENBQThDO0lBQzlDLHlDQUF5QztJQUN6Qyx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNELGlEQUFpRDtJQUNqRCx5REFBeUQ7SUFDekQsNERBQTREO0lBQzVELDRDQUE0QztJQUM1QywyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDJCQUEyQjtJQUMzQix3REFBd0Q7SUFDeEQseURBQXlEO0lBQ3pELG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsK0RBQStEO0lBQy9ELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLElBQUk7SUFFSixlQUFlLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOztzSEFyRlEsd0JBQXdCOzBHQUF4Qix3QkFBd0IsK0lDUnJDLGk0REFrQ007NEZEMUJPLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7MEVBYVUsR0FBRztzQkFBWCxLQUFLO2dCQVlJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgd2luZG93IDphbnkgO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtc2VjdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50U2VjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBheW1lbnRFbmFibGU6IGFueTtcbiAgc2V0dGluZ3M6IGFueTtcbiAgZGV2aWNlUGF5bWVudDogYm9vbGVhbj1mYWxzZTtcbiAgdGVzdFJlc3VsdDogYW55PVwidGVzdFJlc3VsdFwiO1xuICB2YWxpZChwYXltZW50RW5hYmxlOiBhbnkpIHtcbiAgICB0aGlzLnBheW1lbnRFbmFibGUgPSBwYXltZW50RW5hYmxlO1xuICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHBheW1lbnRFbmFibGUpO1xuICB9XG5cbiAgdXNlckRhdGE6IGFueTtcbiAgQElucHV0KCkgdGlwOiBhbnk7XG4gIHBheW1lbnRNZXRob2RBbGxvd2VkOiBhbnkgPSAzO1xuICBwYXltZW50TWV0aG9kVHlwZTogYW55ID0gJ0JhbmsgdHJhbnNmZXInXG4gIHBheW1lbnRNZXRob2Q6IGFueSA9IDE7XG4gIHBheW1lbnRDb21wbGV0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBjYW5Eb1dhbGxldFBheTogYm9vbGVhbiA9IGZhbHNlO1xuICB3YWxsZXRQYXlMb2dvTmFtZTogc3RyaW5nID0gJyc7XG4gIHdhbGxldFBheURlc2M6IHN0cmluZyA9ICcnO1xuICB3YWxsZXREZXRhaWxzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBAT3V0cHV0KCkgZW1pdHRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCh0aGlzLnBheW1lbnRNZXRob2RUeXBlKTtcbiAgfVxuXG4gICAgLy8gY2FuV2FsbGV0UGF5KCkge1xuICAgIC8vICAgICB0aGlzLmNhbkRvV2FsbGV0UGF5ID0gZmFsc2U7XG4gICAgLy8gICAgIGlmICh0aGlzLnVzZXJEYXRhLmlzU3RyaXBlRW5hYmxlZCAmJiB0aGlzLnVzZXJEYXRhLmlzV2FsbGV0UGF5RW5hYmxlZCkge1xuICAgIC8vICAgICAgICAgY29uc3Qgc3RyaXBlID0gd2luZG93LlN0cmlwZShhdG9iKHRoaXMudXNlckRhdGEucGtfdG9rZW4pLCB7c3RyaXBlQWNjb3VudDogdGhpcy51c2VyRGF0YS5zdHJpcGVDb25uZWN0ZWRBY2NvdW50SWR9KTtcbiAgICAvLyAgICAgICAgIGNvbnN0IHBheW1lbnRSZXF1ZXN0ID0gc3RyaXBlLnBheW1lbnRSZXF1ZXN0KHtcbiAgICAvLyAgICAgICAgICAgICBjb3VudHJ5OiB0aGlzLnVzZXJEYXRhLmNsaWVudERldGFpbHMuY291bnRyeU5hbWVDb2RlLFxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLnVzZXJEYXRhLmN1cnJlbmN5Q29kZS50b0xvd2VyQ2FzZSgpLFxuICAgIC8vICAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVtbyB0b3RhbCcsXG4gICAgLy8gICAgICAgICAgICAgICAgIGFtb3VudDogMSxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICAgIHJlcXVlc3RQYXllck5hbWU6IHRydWUsXG4gICAgLy8gICAgICAgICAgICAgcmVxdWVzdFBheWVyRW1haWw6IHRydWUsXG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAvLyBDaGVjayB0aGUgYXZhaWxhYmlsaXR5IG9mIHRoZSBQYXltZW50IFJlcXVlc3QgQVBJIGZpcnN0LlxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBheW1lbnRSZXF1ZXN0LmNhbk1ha2VQYXltZW50KCk7XG4gICAgLy8gICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmNhbkRvV2FsbGV0UGF5ID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5hcHBsZVBheSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlEZXNjID0gJ0FwcGxlIFBheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ0FwcGxlUGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZ29vZ2xlUGF5KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnR29vZ2xlIFBheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ0dvb2dsZVBheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmxpbmspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5RGVzYyA9ICdQYXkgdmlhIExpbmsnO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdMaW5rUGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5RGVzYyA9ICdXYWxsZXRQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdXYWxsZXQnO1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW5ub3QgbWFrZSBXYWxsZXQgcGF5bWVudHMuXCIpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBwYXltZW50U2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgICAgICB2YXIgdGVtcCA9IHRoaXMucGF5bWVudE1ldGhvZCAhPSB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBheW1lbnRNZXRob2QgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3cgcGF5LWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGF5LXRpdGxlLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5LXRpdGxlXCI+UGF5bWVudCBkZXRhaWxzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXktZGV0YWlsc1wiPlBsZWFzZSBmaWxsIHRoZSBpbmZvcm1hdGlvbiBiZWxvdyBhYm91dCB5b3VyIHBheW1lbnQgbWV0aG9kPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBheS1zZWxlY3Rpb25cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBheS13aWR0aFwiPlBheSB3aXRoPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgd2lkdGgtcVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYXktYnRuXCIgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgxKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMVwiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3twYXltZW50TWV0aG9kVHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJwYXltZW50TWV0aG9kQWxsb3dlZCA+PSAyXCIgY2xhc3M9XCJjb2wgcGF5LWJ0blwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgyKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMlwiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+RGViaXQgb3IgY3JlZGl0IGNhcmQ8L3NwYW4+PGltZyBjbGFzcz1cImljb24tYWxpZ25cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJcIiBhbHQ9XCJcIj48L2Rpdj4gLS0+XG4gICAgICAgICAgICA8IS0tIDxkaXYgKm5nSWY9XCJ1c2VyRGF0YS5pc1N0cmlwZUVuYWJsZWQgJiYgdXNlckRhdGEuaXNXYWxsZXRQYXlFbmFibGVkICYmIGNhbkRvV2FsbGV0UGF5XCIgY2xhc3M9XCJjb2wgcGF5LWJ0blwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwYXktYnRuLWFjdGl2ZScgOiBwYXltZW50TWV0aG9kID09ICczJ31cIiAoY2xpY2spPVwicGF5bWVudFNlbGVjdGVkKDMpXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXlXaXRoXCIgaWQ9XCIzXCI+PHNwYW4gY2xhc3M9XCJwYXktYnRuLXRleHRcIj57eyB3YWxsZXRQYXlEZXNjIH19PC9zcGFuPjxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpY29uLWFsaWduXCIgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj4gLS0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhcHAtcGF5bWVudC1iYW5rPjwvYXBwLXBheW1lbnQtYmFuaz5cbiAgICAgICAgPCEtLSA8YXBwLXBheW1lbnQtY2FyZCAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzInXCI+PC9hcHAtcGF5bWVudC1jYXJkPiAtLT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keSBlcnJvci1ib2R5XCIgKm5nSWY9XCJwYXltZW50TWV0aG9kID09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5cbiAgICAgICAgT29wcy4gU29ycnksIHdlIGFyZSB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHBheW1lbnQuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvbnRlbnRcIj5cbiAgICAgICAgQW4gZXJyb3IgaGFzIG9jY3VycmVkIHdoaWxlIGF0dGVtcHRpbmcgdG8gcHJvY2VzcyB5b3VyIG9yZGVyLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHRyeSBhbm90aGVyIHBheW1lbnQgbWV0aG9kLlxuICAgIDwvZGl2PlxuPC9kaXY+Il19