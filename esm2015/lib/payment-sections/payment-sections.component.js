import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-bank/payment-bank.component";
import * as i2 from "./payment-card/payment-card.component";
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
PaymentSectionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentSectionsComponent, selector: "app-payment-secctions", inputs: { tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"\" alt=\"\">\n            </div>\n            <div *ngIf=\"paymentMethodAllowed >= 2\" class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <app-payment-bank *ngIf=\"paymentMethod == '1'\"></app-payment-bank>\n        <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card>\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i1.PaymentBankComponent, selector: "app-payment-bank", inputs: ["paymentTypeS"], outputs: ["payEmitter"] }, { type: i2.PaymentCardComponent, selector: "app-payment-card", outputs: ["payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentSectionsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-secctions',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LXNlY3Rpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVEvRSxNQUFNLE9BQU8sd0JBQXdCO0lBc0JuQztRQWxCQSxrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQU0sWUFBWSxDQUFDO1FBUTdCLHlCQUFvQixHQUFRLENBQUMsQ0FBQztRQUM5QixzQkFBaUIsR0FBUSxlQUFlLENBQUE7UUFDeEMsa0JBQWEsR0FBUSxDQUFDLENBQUM7UUFDdkIscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUtqQixZQUFPLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0QsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSGxELENBQUM7SUFoQmpCLEtBQUssQ0FBQyxhQUFrQjtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBbUJELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUMsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQywrRUFBK0U7SUFDL0UsK0hBQStIO0lBQy9ILHlEQUF5RDtJQUN6RCxvRUFBb0U7SUFDcEUsa0VBQWtFO0lBQ2xFLHVCQUF1QjtJQUN2Qix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFFZCx5QkFBeUI7SUFDekIsMEVBQTBFO0lBQzFFLG9FQUFvRTtJQUNwRSw0QkFBNEI7SUFDNUIsOENBQThDO0lBQzlDLHlDQUF5QztJQUN6Qyx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNELGlEQUFpRDtJQUNqRCx5REFBeUQ7SUFDekQsNERBQTREO0lBQzVELDRDQUE0QztJQUM1QywyREFBMkQ7SUFDM0QsMERBQTBEO0lBQzFELDJCQUEyQjtJQUMzQix3REFBd0Q7SUFDeEQseURBQXlEO0lBQ3pELG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsK0RBQStEO0lBQy9ELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLElBQUk7SUFFSixlQUFlLENBQUMsS0FBVTtRQUN0QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOztzSEFyRlEsd0JBQXdCOzBHQUF4Qix3QkFBd0IsZ0pDUnJDLDg0REFrQ007NEZEMUJPLHdCQUF3QjtrQkFMcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7MEVBYVUsR0FBRztzQkFBWCxLQUFLO2dCQVlJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgd2luZG93IDphbnkgO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBheW1lbnQtc2VjY3Rpb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LXNlY3Rpb25zLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudFNlY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwYXltZW50RW5hYmxlOiBhbnk7XG4gIHNldHRpbmdzOiBhbnk7XG4gIGRldmljZVBheW1lbnQ6IGJvb2xlYW49ZmFsc2U7XG4gIHRlc3RSZXN1bHQ6IGFueT1cInRlc3RSZXN1bHRcIjtcbiAgdmFsaWQocGF5bWVudEVuYWJsZTogYW55KSB7XG4gICAgdGhpcy5wYXltZW50RW5hYmxlID0gcGF5bWVudEVuYWJsZTtcbiAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdChwYXltZW50RW5hYmxlKTtcbiAgfVxuXG4gIHVzZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHRpcDogYW55O1xuICBwYXltZW50TWV0aG9kQWxsb3dlZDogYW55ID0gMztcbiAgcGF5bWVudE1ldGhvZFR5cGU6IGFueSA9ICdCYW5rIHRyYW5zZmVyJ1xuICBwYXltZW50TWV0aG9kOiBhbnkgPSAxO1xuICBwYXltZW50Q29tcGxldGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgY2FuRG9XYWxsZXRQYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgd2FsbGV0UGF5TG9nb05hbWU6IHN0cmluZyA9ICcnO1xuICB3YWxsZXRQYXlEZXNjOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0RGV0YWlsczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQE91dHB1dCgpIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBwYXlFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5wYXltZW50TWV0aG9kVHlwZSk7XG4gIH1cblxuICAgIC8vIGNhbldhbGxldFBheSgpIHtcbiAgICAvLyAgICAgdGhpcy5jYW5Eb1dhbGxldFBheSA9IGZhbHNlO1xuICAgIC8vICAgICBpZiAodGhpcy51c2VyRGF0YS5pc1N0cmlwZUVuYWJsZWQgJiYgdGhpcy51c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IHN0cmlwZSA9IHdpbmRvdy5TdHJpcGUoYXRvYih0aGlzLnVzZXJEYXRhLnBrX3Rva2VuKSwge3N0cmlwZUFjY291bnQ6IHRoaXMudXNlckRhdGEuc3RyaXBlQ29ubmVjdGVkQWNjb3VudElkfSk7XG4gICAgLy8gICAgICAgICBjb25zdCBwYXltZW50UmVxdWVzdCA9IHN0cmlwZS5wYXltZW50UmVxdWVzdCh7XG4gICAgLy8gICAgICAgICAgICAgY291bnRyeTogdGhpcy51c2VyRGF0YS5jbGllbnREZXRhaWxzLmNvdW50cnlOYW1lQ29kZSxcbiAgICAvLyAgICAgICAgICAgICBjdXJyZW5jeTogdGhpcy51c2VyRGF0YS5jdXJyZW5jeUNvZGUudG9Mb3dlckNhc2UoKSxcbiAgICAvLyAgICAgICAgICAgICB0b3RhbDoge1xuICAgIC8vICAgICAgICAgICAgICAgICBsYWJlbDogJ0RlbW8gdG90YWwnLFxuICAgIC8vICAgICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgICByZXF1ZXN0UGF5ZXJOYW1lOiB0cnVlLFxuICAgIC8vICAgICAgICAgICAgIHJlcXVlc3RQYXllckVtYWlsOiB0cnVlLFxuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGF2YWlsYWJpbGl0eSBvZiB0aGUgUGF5bWVudCBSZXF1ZXN0IEFQSSBmaXJzdC5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwYXltZW50UmVxdWVzdC5jYW5NYWtlUGF5bWVudCgpO1xuICAgIC8vICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jYW5Eb1dhbGxldFBheSA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuYXBwbGVQYXkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5RGVzYyA9ICdBcHBsZSBQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdBcHBsZVBheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0Lmdvb2dsZVBheSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlEZXNjID0gJ0dvb2dsZSBQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlMb2dvTmFtZSA9ICdHb29nbGVQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5saW5rKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnUGF5IHZpYSBMaW5rJztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5TG9nb05hbWUgPSAnTGlua1BheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnV2FsbGV0UGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5TG9nb05hbWUgPSAnV2FsbGV0JztcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IG1ha2UgV2FsbGV0IHBheW1lbnRzLlwiKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcGF5bWVudFNlbGVjdGVkKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFyIHRlbXAgPSB0aGlzLnBheW1lbnRNZXRob2QgIT0gdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wYXltZW50TWV0aG9kID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSkgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93IHBheS1ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cInBheS10aXRsZS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheS10aXRsZVwiPlBheW1lbnQgZGV0YWlsczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5LWRldGFpbHNcIj5QbGVhc2UgZmlsbCB0aGUgaW5mb3JtYXRpb24gYmVsb3cgYWJvdXQgeW91ciBwYXltZW50IG1ldGhvZDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYXktc2VsZWN0aW9uXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYXktd2lkdGhcIj5QYXkgd2l0aDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdpZHRoLXFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LWJ0blwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMSlcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjFcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7cGF5bWVudE1ldGhvZFR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInBheW1lbnRNZXRob2RBbGxvd2VkID49IDJcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGF5bWVudFNlbGVjdGVkKDIpXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXlXaXRoXCIgaWQ9XCIyXCI+PHNwYW4gY2xhc3M9XCJwYXktYnRuLXRleHRcIj5EZWJpdCBvciBjcmVkaXQgY2FyZDwvc3Bhbj48aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIlwiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwidXNlckRhdGEuaXNTdHJpcGVFbmFibGVkICYmIHVzZXJEYXRhLmlzV2FsbGV0UGF5RW5hYmxlZCAmJiBjYW5Eb1dhbGxldFBheVwiIGNsYXNzPVwiY29sIHBheS1idG5cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGF5LWJ0bi1hY3RpdmUnIDogcGF5bWVudE1ldGhvZCA9PSAnMyd9XCIgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgzKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5V2l0aFwiIGlkPVwiM1wiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3sgd2FsbGV0UGF5RGVzYyB9fTwvc3Bhbj48aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXBwLXBheW1lbnQtYmFuayAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzEnXCI+PC9hcHAtcGF5bWVudC1iYW5rPlxuICAgICAgICA8YXBwLXBheW1lbnQtY2FyZCAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzInXCI+PC9hcHAtcGF5bWVudC1jYXJkPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93IHBheS1ib2R5IGVycm9yLWJvZHlcIiAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvci10aXRsZVwiPlxuICAgICAgICBPb3BzLiBTb3JyeSwgd2UgYXJlIHVuYWJsZSB0byBwcm9jZXNzIHlvdXIgcGF5bWVudC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItY29udGVudFwiPlxuICAgICAgICBBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBwcm9jZXNzIHlvdXIgb3JkZXIuIFBsZWFzZSB0cnkgYWdhaW4gb3IgdHJ5IGFub3RoZXIgcGF5bWVudCBtZXRob2QuXG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=