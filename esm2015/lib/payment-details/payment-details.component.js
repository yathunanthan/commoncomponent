import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-bank-details/payment-bank-details.component";
import * as i2 from "./payment-card-details/payment-card-details.component";
import * as i3 from "@angular/common";
export class PaymentDetailsComponent {
    constructor() {
        this.paymentMethodType = 'Bank transfer';
        this.devicePayment = false;
        this.testResult = "testResult";
        this.paymentMethodAllowed = 3;
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
    }
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
PaymentDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentDetailsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: { tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"assets/icon/bank-transfer.svg\" alt=\"\">\n            </div>\n            <div class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"assets/icon/card.svg\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <lib-payment-bank-details *ngIf=\"paymentMethod == '1'\" [paymentTypeS]=\"paymentMethodType\"></lib-payment-bank-details>\n        <lib-payment-card-details *ngIf=\"paymentMethod == '2'\" ></lib-payment-card-details>\n        <!-- <app-payment-card *ngIf=\"paymentMethod == '2'\"></app-payment-card> -->\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i1.PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: ["paymentTypeS"], outputs: ["payEmitter"] }, { type: i2.PaymentCardDetailsComponent, selector: "lib-payment-card-details", outputs: ["payEmitter"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-details',
                    templateUrl: './payment-details.component.html',
                    styleUrls: ['./payment-details.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { tip: [{
                type: Input
            }], emitter: [{
                type: Output
            }], payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUEyQmxDO1FBekJBLHNCQUFpQixHQUFRLGVBQWUsQ0FBQztRQUd6QyxrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQU0sWUFBWSxDQUFDO1FBUTdCLHlCQUFvQixHQUFRLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFRLENBQUMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBR2pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFJbEQsQ0FBQztJQXBCakIsS0FBSyxDQUFDLGFBQWtCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFtQkQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOztxSEE3Q1ksdUJBQXVCO3lHQUF2Qix1QkFBdUIsOElDUHBDLHdqRUFtQ007NEZENUJPLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7MEVBY1UsR0FBRztzQkFBWCxLQUFLO2dCQVNJLE9BQU87c0JBQWhCLE1BQU07Z0JBQ0csVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGF5bWVudE1ldGhvZFR5cGU6IGFueSA9ICdCYW5rIHRyYW5zZmVyJztcbiAgcGF5bWVudEVuYWJsZTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBkZXZpY2VQYXltZW50OiBib29sZWFuPWZhbHNlO1xuICB0ZXN0UmVzdWx0OiBhbnk9XCJ0ZXN0UmVzdWx0XCI7XG4gIHZhbGlkKHBheW1lbnRFbmFibGU6IGFueSkge1xuICAgIHRoaXMucGF5bWVudEVuYWJsZSA9IHBheW1lbnRFbmFibGU7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICB1c2VyRGF0YTogYW55O1xuICBASW5wdXQoKSB0aXA6IGFueTtcbiAgcGF5bWVudE1ldGhvZEFsbG93ZWQ6IGFueSA9IDM7XG4gIHBheW1lbnRNZXRob2Q6IGFueSA9IDE7XG4gIHBheW1lbnRDb21wbGV0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBjYW5Eb1dhbGxldFBheTogYm9vbGVhbiA9IGZhbHNlO1xuICB3YWxsZXRQYXlMb2dvTmFtZTogc3RyaW5nID0gJyc7XG4gIHdhbGxldFBheURlc2M6IHN0cmluZyA9ICcnO1xuICB3YWxsZXREZXRhaWxzOiBhbnk7XG5cbiAgQE91dHB1dCgpIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBwYXlFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcGF5bWVudFNlbGVjdGVkKHZhbHVlOiBhbnkpIHtcbiAgICB2YXIgdGVtcCA9IHRoaXMucGF5bWVudE1ldGhvZCAhPSB2YWx1ZVxuICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgICAgdGhpcy5wYXltZW50TWV0aG9kID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHZhbHVlKTtcbiAgICAgICAgdmFyIGNoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmFsdWUpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICBjaGVjay5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGVtcCkge1xuICAgICAgICAgICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3cgcGF5LWJvZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGF5LXRpdGxlLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5LXRpdGxlXCI+UGF5bWVudCBkZXRhaWxzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXktZGV0YWlsc1wiPlBsZWFzZSBmaWxsIHRoZSBpbmZvcm1hdGlvbiBiZWxvdyBhYm91dCB5b3VyIHBheW1lbnQgbWV0aG9kPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBheS1zZWxlY3Rpb25cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBheS13aWR0aFwiPlBheSB3aXRoPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgd2lkdGgtcVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYXktYnRuXCIgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgxKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMVwiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3twYXltZW50TWV0aG9kVHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cImFzc2V0cy9pY29uL2JhbmstdHJhbnNmZXIuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LWJ0blwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgyKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMlwiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+RGViaXQgb3IgY3JlZGl0IGNhcmQ8L3NwYW4+PGltZyBjbGFzcz1cImljb24tYWxpZ25cIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaWNvbi9jYXJkLnN2Z1wiIGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgICAgPCEtLSA8ZGl2ICpuZ0lmPVwidXNlckRhdGEuaXNTdHJpcGVFbmFibGVkICYmIHVzZXJEYXRhLmlzV2FsbGV0UGF5RW5hYmxlZCAmJiBjYW5Eb1dhbGxldFBheVwiIGNsYXNzPVwiY29sIHBheS1idG5cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGF5LWJ0bi1hY3RpdmUnIDogcGF5bWVudE1ldGhvZCA9PSAnMyd9XCIgKGNsaWNrKT1cInBheW1lbnRTZWxlY3RlZCgzKVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGF5V2l0aFwiIGlkPVwiM1wiPjxzcGFuIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3sgd2FsbGV0UGF5RGVzYyB9fTwvc3Bhbj48aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cIlwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+IC0tPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGliLXBheW1lbnQtYmFuay1kZXRhaWxzICpuZ0lmPVwicGF5bWVudE1ldGhvZCA9PSAnMSdcIiBbcGF5bWVudFR5cGVTXT1cInBheW1lbnRNZXRob2RUeXBlXCI+PC9saWItcGF5bWVudC1iYW5rLWRldGFpbHM+XG4gICAgICAgIDxsaWItcGF5bWVudC1jYXJkLWRldGFpbHMgKm5nSWY9XCJwYXltZW50TWV0aG9kID09ICcyJ1wiID48L2xpYi1wYXltZW50LWNhcmQtZGV0YWlscz5cbiAgICAgICAgPCEtLSA8YXBwLXBheW1lbnQtY2FyZCAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzInXCI+PC9hcHAtcGF5bWVudC1jYXJkPiAtLT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keSBlcnJvci1ib2R5XCIgKm5nSWY9XCJwYXltZW50TWV0aG9kID09IDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5cbiAgICAgICAgT29wcy4gU29ycnksIHdlIGFyZSB1bmFibGUgdG8gcHJvY2VzcyB5b3VyIHBheW1lbnQuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvbnRlbnRcIj5cbiAgICAgICAgQW4gZXJyb3IgaGFzIG9jY3VycmVkIHdoaWxlIGF0dGVtcHRpbmcgdG8gcHJvY2VzcyB5b3VyIG9yZGVyLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHRyeSBhbm90aGVyIHBheW1lbnQgbWV0aG9kLlxuICAgIDwvZGl2PlxuPC9kaXY+Il19