import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-bank/payment-bank.component";
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
PaymentSectionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentSectionsComponent, selector: "lib-payment-sections", inputs: { tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"\" alt=\"\">\n            </div>\n            <!-- <div *ngIf=\"paymentMethodAllowed >= 2\" class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"\" alt=\"\"></div> -->\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <app-payment-bank></app-payment-bank>\n        <!-- <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card> -->\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i1.PaymentBankComponent, selector: "app-payment-bank", inputs: ["paymentTypeS"], outputs: ["payEmitter"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LXNlY3Rpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUS9FLE1BQU0sT0FBTyx3QkFBd0I7SUFzQm5DO1FBbEJBLGtCQUFhLEdBQVUsS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBTSxZQUFZLENBQUM7UUFRN0IseUJBQW9CLEdBQVEsQ0FBQyxDQUFDO1FBQzlCLHNCQUFpQixHQUFRLGVBQWUsQ0FBQTtRQUN4QyxrQkFBYSxHQUFRLENBQUMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBS2pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFIbEQsQ0FBQztJQWhCakIsS0FBSyxDQUFDLGFBQWtCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFtQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFQyxtQkFBbUI7SUFDbkIsbUNBQW1DO0lBQ25DLCtFQUErRTtJQUMvRSwrSEFBK0g7SUFDL0gseURBQXlEO0lBQ3pELG9FQUFvRTtJQUNwRSxrRUFBa0U7SUFDbEUsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2Qyw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsY0FBYztJQUVkLHlCQUF5QjtJQUN6QiwwRUFBMEU7SUFDMUUsb0VBQW9FO0lBQ3BFLDRCQUE0QjtJQUM1Qiw4Q0FBOEM7SUFDOUMseUNBQXlDO0lBQ3pDLHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0QsaURBQWlEO0lBQ2pELHlEQUF5RDtJQUN6RCw0REFBNEQ7SUFDNUQsNENBQTRDO0lBQzVDLDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsMkJBQTJCO0lBQzNCLHdEQUF3RDtJQUN4RCx5REFBeUQ7SUFDekQsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwrREFBK0Q7SUFDL0QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsSUFBSTtJQUVKLGVBQWUsQ0FBQyxLQUFVO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFBO1FBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFxQixDQUFBO1lBQzlELElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7U0FDSjtJQUNMLENBQUM7O3NIQXJGUSx3QkFBd0I7MEdBQXhCLHdCQUF3QiwrSUNSckMsaTREQWtDTTs0RkQxQk8sd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7b0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDswRUFhVSxHQUFHO3NCQUFYLEtBQUs7Z0JBWUksT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciB3aW5kb3cgOmFueSA7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGF5bWVudC1zZWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LXNlY3Rpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRTZWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGF5bWVudEVuYWJsZTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBkZXZpY2VQYXltZW50OiBib29sZWFuPWZhbHNlO1xuICB0ZXN0UmVzdWx0OiBhbnk9XCJ0ZXN0UmVzdWx0XCI7XG4gIHZhbGlkKHBheW1lbnRFbmFibGU6IGFueSkge1xuICAgIHRoaXMucGF5bWVudEVuYWJsZSA9IHBheW1lbnRFbmFibGU7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICB1c2VyRGF0YTogYW55O1xuICBASW5wdXQoKSB0aXA6IGFueTtcbiAgcGF5bWVudE1ldGhvZEFsbG93ZWQ6IGFueSA9IDM7XG4gIHBheW1lbnRNZXRob2RUeXBlOiBhbnkgPSAnQmFuayB0cmFuc2ZlcidcbiAgcGF5bWVudE1ldGhvZDogYW55ID0gMTtcbiAgcGF5bWVudENvbXBsZXRlZDogYm9vbGVhbiA9IHRydWU7XG4gIGNhbkRvV2FsbGV0UGF5OiBib29sZWFuID0gZmFsc2U7XG4gIHdhbGxldFBheUxvZ29OYW1lOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0UGF5RGVzYzogc3RyaW5nID0gJyc7XG4gIHdhbGxldERldGFpbHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBPdXRwdXQoKSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcGF5RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMucGF5bWVudE1ldGhvZFR5cGUpO1xuICB9XG5cbiAgICAvLyBjYW5XYWxsZXRQYXkoKSB7XG4gICAgLy8gICAgIHRoaXMuY2FuRG9XYWxsZXRQYXkgPSBmYWxzZTtcbiAgICAvLyAgICAgaWYgKHRoaXMudXNlckRhdGEuaXNTdHJpcGVFbmFibGVkICYmIHRoaXMudXNlckRhdGEuaXNXYWxsZXRQYXlFbmFibGVkKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBzdHJpcGUgPSB3aW5kb3cuU3RyaXBlKGF0b2IodGhpcy51c2VyRGF0YS5wa190b2tlbiksIHtzdHJpcGVBY2NvdW50OiB0aGlzLnVzZXJEYXRhLnN0cmlwZUNvbm5lY3RlZEFjY291bnRJZH0pO1xuICAgIC8vICAgICAgICAgY29uc3QgcGF5bWVudFJlcXVlc3QgPSBzdHJpcGUucGF5bWVudFJlcXVlc3Qoe1xuICAgIC8vICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMudXNlckRhdGEuY2xpZW50RGV0YWlscy5jb3VudHJ5TmFtZUNvZGUsXG4gICAgLy8gICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMudXNlckRhdGEuY3VycmVuY3lDb2RlLnRvTG93ZXJDYXNlKCksXG4gICAgLy8gICAgICAgICAgICAgdG90YWw6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGFiZWw6ICdEZW1vIHRvdGFsJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICAgICAgcmVxdWVzdFBheWVyTmFtZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICByZXF1ZXN0UGF5ZXJFbWFpbDogdHJ1ZSxcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIC8vIENoZWNrIHRoZSBhdmFpbGFiaWxpdHkgb2YgdGhlIFBheW1lbnQgUmVxdWVzdCBBUEkgZmlyc3QuXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF5bWVudFJlcXVlc3QuY2FuTWFrZVBheW1lbnQoKTtcbiAgICAvLyAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2FuRG9XYWxsZXRQYXkgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFwcGxlUGF5KSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheURlc2MgPSAnQXBwbGUgUGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5TG9nb05hbWUgPSAnQXBwbGVQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5nb29nbGVQYXkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5RGVzYyA9ICdHb29nbGUgUGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FsbGV0UGF5TG9nb05hbWUgPSAnR29vZ2xlUGF5JztcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQubGluaykge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlEZXNjID0gJ1BheSB2aWEgTGluayc7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ0xpbmtQYXknO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxsZXRQYXlEZXNjID0gJ1dhbGxldFBheSc7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxldFBheUxvZ29OYW1lID0gJ1dhbGxldCc7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBtYWtlIFdhbGxldCBwYXltZW50cy5cIik7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSkoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHBheW1lbnRTZWxlY3RlZCh2YWx1ZTogYW55KSB7XG4gICAgICAgIHZhciB0ZW1wID0gdGhpcy5wYXltZW50TWV0aG9kICE9IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGF5bWVudE1ldGhvZCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICAgICAgdmFyIGNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGUtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGVcIj5QYXltZW50IGRldGFpbHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheS1kZXRhaWxzXCI+UGxlYXNlIGZpbGwgdGhlIGluZm9ybWF0aW9uIGJlbG93IGFib3V0IHlvdXIgcGF5bWVudCBtZXRob2Q8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicGF5LXNlbGVjdGlvblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LXdpZHRoXCI+UGF5IHdpdGg8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3aWR0aC1xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBheS1idG5cIiAoY2xpY2spPVwicGF5bWVudFNlbGVjdGVkKDEpXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXlXaXRoXCIgaWQ9XCIxXCI+PHNwYW4gY2xhc3M9XCJwYXktYnRuLXRleHRcIj57e3BheW1lbnRNZXRob2RUeXBlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uLWFsaWduXCIgc3JjPVwiXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cInBheW1lbnRNZXRob2RBbGxvd2VkID49IDJcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGF5bWVudFNlbGVjdGVkKDIpXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwYXlXaXRoXCIgaWQ9XCIyXCI+PHNwYW4gY2xhc3M9XCJwYXktYnRuLXRleHRcIj5EZWJpdCBvciBjcmVkaXQgY2FyZDwvc3Bhbj48aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIlwiIGFsdD1cIlwiPjwvZGl2PiAtLT5cbiAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cInVzZXJEYXRhLmlzU3RyaXBlRW5hYmxlZCAmJiB1c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQgJiYgY2FuRG9XYWxsZXRQYXlcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzMnfVwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjNcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7IHdhbGxldFBheURlc2MgfX08L3NwYW4+PGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGFwcC1wYXltZW50LWJhbms+PC9hcHAtcGF5bWVudC1iYW5rPlxuICAgICAgICA8IS0tIDxhcHAtcGF5bWVudC1jYXJkICpuZ0lmPVwicGF5bWVudE1ldGhvZCA9PSAnMidcIj48L2FwcC1wYXltZW50LWNhcmQ+IC0tPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93IHBheS1ib2R5IGVycm9yLWJvZHlcIiAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvci10aXRsZVwiPlxuICAgICAgICBPb3BzLiBTb3JyeSwgd2UgYXJlIHVuYWJsZSB0byBwcm9jZXNzIHlvdXIgcGF5bWVudC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItY29udGVudFwiPlxuICAgICAgICBBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBwcm9jZXNzIHlvdXIgb3JkZXIuIFBsZWFzZSB0cnkgYWdhaW4gb3IgdHJ5IGFub3RoZXIgcGF5bWVudCBtZXRob2QuXG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=