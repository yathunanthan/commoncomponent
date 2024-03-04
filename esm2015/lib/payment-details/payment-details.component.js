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
PaymentDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: { genericPaymentDetails: "genericPaymentDetails", tip: "tip" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">Please fill the information below about your payment method</div>\n    </div>\n    <div class=\"pay-selection\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(1)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"1\"><span class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"assets/icon/bank-transfer.svg\" alt=\"\">\n            </div>\n            <div class=\"col pay-btn\"\n                (click)=\"paymentSelected(2)\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span class=\"pay-btn-text\">Debit or credit card</span><img class=\"icon-align\"\n                    src=\"assets/icon/card.svg\" alt=\"\"></div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <lib-payment-bank-details *ngIf=\"paymentMethod == '1'\" [paymentTypeS]=\"paymentMethodType\" [paymentData]=\"genericPaymentDetails\"></lib-payment-bank-details>\n        <lib-payment-card-details *ngIf=\"paymentMethod == '2'\" ></lib-payment-card-details>\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <div class=\"error-title\">\n        Oops. Sorry, we are unable to process your payment.\n    </div>\n    <div class=\"error-content\">\n        An error has occurred while attempting to process your order. Please try again or try another payment method.\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i1.PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: ["paymentData", "paymentTypeS"], outputs: ["payEmitter"] }, { type: i2.PaymentCardDetailsComponent, selector: "lib-payment-card-details", outputs: ["payEmitter"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-details',
                    templateUrl: './payment-details.component.html',
                    styleUrls: ['./payment-details.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { genericPaymentDetails: [{
                type: Input
            }], tip: [{
                type: Input
            }], emitter: [{
                type: Output
            }], payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUE0QmxDO1FBMUJBLHNCQUFpQixHQUFRLGVBQWUsQ0FBQztRQUd6QyxrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQU0sWUFBWSxDQUFDO1FBUzdCLHlCQUFvQixHQUFRLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFRLENBQUMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBR2pCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFJbEQsQ0FBQztJQXJCakIsS0FBSyxDQUFDLGFBQWtCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFvQkQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOztxSEE5Q1ksdUJBQXVCO3lHQUF2Qix1QkFBdUIsOExDUHBDLHlnRUFrQ007NEZEM0JPLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7MEVBWVUscUJBQXFCO3NCQUE3QixLQUFLO2dCQUdHLEdBQUc7c0JBQVgsS0FBSztnQkFTSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXltZW50LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBheW1lbnRNZXRob2RUeXBlOiBhbnkgPSAnQmFuayB0cmFuc2Zlcic7XG4gIHBheW1lbnRFbmFibGU6IGFueTtcbiAgc2V0dGluZ3M6IGFueTtcbiAgZGV2aWNlUGF5bWVudDogYm9vbGVhbj1mYWxzZTtcbiAgdGVzdFJlc3VsdDogYW55PVwidGVzdFJlc3VsdFwiO1xuICB2YWxpZChwYXltZW50RW5hYmxlOiBhbnkpIHtcbiAgICB0aGlzLnBheW1lbnRFbmFibGUgPSBwYXltZW50RW5hYmxlO1xuICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHBheW1lbnRFbmFibGUpO1xuICB9XG4gIEBJbnB1dCgpIGdlbmVyaWNQYXltZW50RGV0YWlsczphbnk7XG5cbiAgdXNlckRhdGE6IGFueTtcbiAgQElucHV0KCkgdGlwOiBhbnk7XG4gIHBheW1lbnRNZXRob2RBbGxvd2VkOiBhbnkgPSAzO1xuICBwYXltZW50TWV0aG9kOiBhbnkgPSAxO1xuICBwYXltZW50Q29tcGxldGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgY2FuRG9XYWxsZXRQYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgd2FsbGV0UGF5TG9nb05hbWU6IHN0cmluZyA9ICcnO1xuICB3YWxsZXRQYXlEZXNjOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0RGV0YWlsczogYW55O1xuXG4gIEBPdXRwdXQoKSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcGF5RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHBheW1lbnRTZWxlY3RlZCh2YWx1ZTogYW55KSB7XG4gICAgdmFyIHRlbXAgPSB0aGlzLnBheW1lbnRNZXRob2QgIT0gdmFsdWVcbiAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgIHRoaXMucGF5bWVudE1ldGhvZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCh2YWx1ZSk7XG4gICAgICAgIHZhciBjaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZhbHVlKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93IHBheS1ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cInBheS10aXRsZS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheS10aXRsZVwiPlBheW1lbnQgZGV0YWlsczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5LWRldGFpbHNcIj5QbGVhc2UgZmlsbCB0aGUgaW5mb3JtYXRpb24gYmVsb3cgYWJvdXQgeW91ciBwYXltZW50IG1ldGhvZDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYXktc2VsZWN0aW9uXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYXktd2lkdGhcIj5QYXkgd2l0aDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdpZHRoLXFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LWJ0blwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMSlcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjFcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7cGF5bWVudE1ldGhvZFR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJhc3NldHMvaWNvbi9iYW5rLXRyYW5zZmVyLnN2Z1wiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHBheS1idG5cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMilcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInBheVdpdGhcIiBpZD1cIjJcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPkRlYml0IG9yIGNyZWRpdCBjYXJkPC9zcGFuPjxpbWcgY2xhc3M9XCJpY29uLWFsaWduXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ljb24vY2FyZC5zdmdcIiBhbHQ9XCJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cInVzZXJEYXRhLmlzU3RyaXBlRW5hYmxlZCAmJiB1c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQgJiYgY2FuRG9XYWxsZXRQYXlcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzMnfVwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjNcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7IHdhbGxldFBheURlc2MgfX08L3NwYW4+PGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxpYi1wYXltZW50LWJhbmstZGV0YWlscyAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzEnXCIgW3BheW1lbnRUeXBlU109XCJwYXltZW50TWV0aG9kVHlwZVwiIFtwYXltZW50RGF0YV09XCJnZW5lcmljUGF5bWVudERldGFpbHNcIj48L2xpYi1wYXltZW50LWJhbmstZGV0YWlscz5cbiAgICAgICAgPGxpYi1wYXltZW50LWNhcmQtZGV0YWlscyAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzInXCIgPjwvbGliLXBheW1lbnQtY2FyZC1kZXRhaWxzPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93IHBheS1ib2R5IGVycm9yLWJvZHlcIiAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJlcnJvci10aXRsZVwiPlxuICAgICAgICBPb3BzLiBTb3JyeSwgd2UgYXJlIHVuYWJsZSB0byBwcm9jZXNzIHlvdXIgcGF5bWVudC5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItY29udGVudFwiPlxuICAgICAgICBBbiBlcnJvciBoYXMgb2NjdXJyZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBwcm9jZXNzIHlvdXIgb3JkZXIuIFBsZWFzZSB0cnkgYWdhaW4gb3IgdHJ5IGFub3RoZXIgcGF5bWVudCBtZXRob2QuXG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=