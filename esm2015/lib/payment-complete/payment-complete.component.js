import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../serivces/common-payment.service";
import * as i2 from "@angular/common";
export class PaymentCompleteComponent {
    constructor(commonPaymentService) {
        this.commonPaymentService = commonPaymentService;
        this.pending = true;
        this.cardImg = '';
        this.paymentFailed = false;
        this.loading = false;
        this.balance = 0;
        this.tip = 0;
        this.amount = 0;
        this.valid = false;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        var _a;
        this.cardCharges = this.completePageDetails.cardCharges[this.commonPaymentService.cardCharges].charge;
        console.log('completePaymentData', this.valid);
        if ((((_a = this.completePaymentData.paymentDetails) === null || _a === void 0 ? void 0 : _a.cardlat4) || this.cardDetails) && this.valid) {
            this.pending = false;
        }
        else {
            this.pending = false;
        }
    }
}
PaymentCompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCompleteComponent, deps: [{ token: i1.CommonPaymentService }], target: i0.ɵɵFactoryTarget.Component });
PaymentCompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentCompleteComponent, selector: "lib-payment-complete", inputs: { valid: "valid", cardDetails: "cardDetails", completePageDetails: "completePageDetails" }, outputs: { close: "close" }, ngImport: i0, template: "<div class=\"page-class feedback-sent\">\n\n    <div *ngIf=\"!loading\" class=\"logo\"> <i class=\"fa-solid fa-check\"></i></div><br>\n    <div *ngIf=\"loading\" class=\"skeleton-box\" style=\"width:124px;height: 124px;margin: 0 auto;\"></div>\n    <div  class=\"feedback-title\"> Payment successful </div>\n    <div  class=\"feedback-message col-sm-12 col-md-8 col-lg-6\"> The final payment was made\n        on the {{completePaymentData?.paymentDetails.lastPaidDate}} </div>\n</div>\n\n<div class=\"page-class\" [class.remove-padding]=\"valid\" style=\"min-height:460px;\">\n\n    <div class=\"row row-align\" [class.remove-padding]=\"valid\">\n        <div class=\"col-12 col-sm-12 col-md-6 feedback-comment payment-summary\">\n\n            <div class=\"order-summary pad-box\">\n                <div *ngIf=\"!loading\" class=\"feedback-appointment\"> Order summary </div>\n                <div *ngIf=\"loading\" class=\"skeleton-box\" style=\"width:300px;height: 20px;margin-bottom: 10px;\">\n                </div>\n                <div>\n                    <div *ngIf=\"!loading\" class=\"row feedback-appointment-message\">\n                        <div class=\"col lable\">Sub total</div>\n                        <div class=\"col value\">{{completePaymentData.currencySymbol}}{{completePaymentData.invoiceDetails.total}}</div>\n                    </div>\n                    <div *ngIf=\"!loading\" class=\"row feedback-appointment-message\">\n                        <div class=\"col lable\">{{completePaymentData.taxLabel}}</div>\n                        <div class=\"col value\">{{completePaymentData.currencySymbol}}{{completePaymentData.invoiceDetails.taxes}}</div>\n                    </div>\n                    <div class=\"row width-f H-line\"></div>\n                    <div *ngIf=\"!loading\" class=\"row feedback-appointment-message\">\n                        <div class=\"col lable\">Grand total</div>\n                        <div class=\"col value\" style=\"color: var(--positiveFoundation);\">\n                            {{completePaymentData.currencySymbol}}{{completePaymentData.invoiceDetails.grandTotal+\n                            (paymentCharges?paymentCharges:(completePaymentData.paymentDetails?.cardBrand ||\n                            cardDetails?.cardCompany?((cardCharges /\n                            100) * completePaymentData.paymentDetails.paidAmount):0))}}</div>\n                    </div>\n                </div>\n                <div *ngIf=\"loading\" class=\"skeleton-box\" style=\"width:166px;height: 20px;\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", styles: [".width-f{width:100%}.page-class{padding:24px}.info-header{font-weight:700;font-size:14px;color:var(--primaryTextColor);line-height:20px}.info-name{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding:8px 0 4px}.info-address{font-size:14px;color:var(--secondaryTextColor)}.feedback-sent{text-align:center;margin-top:28px}.feedback-title{font-family:\"Helvetica\";font-style:normal;font-weight:700;font-size:16px;line-height:30px;text-align:center;color:var(--primaryTextColor);padding-bottom:12px}.feedback-message{margin:0 auto;font-family:\"Roboto\";font-style:normal;font-weight:400;font-size:14px;line-height:24px;text-align:center;color:var(--secondaryTextColor);padding-bottom:31px}.feedback-comment{display:flex;flex-direction:column;align-items:flex-start;min-height:112px;left:0px;top:0px;padding:32px 24px}.feedback-appointment{font-family:\"Helvetica\";font-style:normal;font-weight:700;font-size:14px;line-height:20px;color:var(--primaryTextColor);padding-bottom:4px}.feedback-appointment-message{font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:24px;color:var(--secondaryTextColor);margin:4px 0 0}.feedback-appointment-message .value{text-align:end;font-weight:700}.feedback-appointment-message .col{padding:0}.payment-block{margin-top:80px}.payment-summary{margin-top:0}.H-line{border-top:1px solid var(--primaryBorderColor);margin:4px 0 0}.icon-align{width:34px;margin-right:16px}.logo{width:124px;height:124px;border-radius:50%;background:#4AD08D;margin:0 auto}.logo .fa-check{width:42.67px;height:56px;color:#fff;padding:33px 0;font-size:60px}.download-link{font-family:\"Helvetica\";font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#3883c1;cursor:pointer;padding-top:14px}.order-summary{width:80%}.payment-method{width:100%}.remove-padding{padding:0!important;margin:0!important;min-height:-moz-fit-content!important;min-height:fit-content!important}.row-align{background:#f8f9f9;margin:0}@media (min-width: 50px) and (max-width: 425px){.title-responsive{font-size:12px!important}.logo-image-align{height:35px;width:50px!important}.feedback-sent{margin-top:15px}.payment-block{margin-top:34px}}@media (max-width: 578px){.card{height:100vh}.feedback-sent{margin-top:15px}.row-align{padding:0}.order-summary{width:100%}.order-summary .row{margin-right:0!important}.page-class{padding:16px}.feedback-comment{padding:16px}.payment-block{margin-top:34px}}@media (min-width: 481px) and (max-width: 767px){.logo-image-align{height:35px;width:50px!important}.card{height:100vh}.feedback-sent{margin-top:15px}.order-summary{width:100%}.info-name{padding-top:4px}.payment-block{margin-top:34px}.payment-summary{padding-top:16px!important}}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentCompleteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-complete',
                    templateUrl: './payment-complete.component.html',
                    styleUrls: ['./payment-complete.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.CommonPaymentService }]; }, propDecorators: { valid: [{
                type: Input
            }], cardDetails: [{
                type: Input
            }], completePageDetails: [{
                type: Input
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1jb21wbGV0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1jb21wbGV0ZS9wYXltZW50LWNvbXBsZXRlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWNvbXBsZXRlL3BheW1lbnQtY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVEvRSxNQUFNLE9BQU8sd0JBQXdCO0lBcUJuQyxZQUFvQixvQkFBeUM7UUFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQW5CN0QsWUFBTyxHQUFVLElBQUksQ0FBQztRQUd0QixZQUFPLEdBQVMsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBUyxLQUFLLENBQUM7UUFHdEIsWUFBTyxHQUFRLENBQUMsQ0FBQztRQUNqQixRQUFHLEdBQVEsQ0FBQyxDQUFDO1FBRWIsV0FBTSxHQUFRLENBQUMsQ0FBQztRQUNQLFVBQUssR0FBUyxLQUFLLENBQUM7UUFHbkIsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBVyxDQUFDO0lBSUgsQ0FBQztJQUVsRSxRQUFROztRQUNQLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFBO1FBQ3JHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdDLElBQUcsQ0FBQyxDQUFBLE1BQUEsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsMENBQUUsUUFBUSxLQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO1lBQ3ZGLElBQUksQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDO1NBQ3BCO2FBQUk7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7O3NIQWhDVSx3QkFBd0I7MEdBQXhCLHdCQUF3Qiw2TENSckMseWxGQTBDTTs0RkRsQ08sd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7b0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDsyR0FlVSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BheW1lbnQtY29tcGxldGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50Q29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHBlbmRpbmc6IGJvb2xlYW49dHJ1ZTtcbiAgdXNlclJlc3BvbnNlOiBhbnk7XG4gIHBheW1lbnRDaGFyZ2VzOiBhbnk7XG4gIGNhcmRJbWc6IHN0cmluZz0nJztcbiAgcGF5bWVudEZhaWxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBsb2FkaW5nOmJvb2xlYW49ZmFsc2U7XG4gIGNvbXBsZXRlUGF5bWVudERhdGE6YW55O1xuICBpdGVtczphbnk7XG4gIGJhbGFuY2U6bnVtYmVyPTA7XG4gIHRpcDpudW1iZXI9MDtcbiAgdXVpZDphbnk7XG4gIGFtb3VudDpudW1iZXI9MDtcbiAgQElucHV0KCkgdmFsaWQ6Ym9vbGVhbj1mYWxzZTtcbiAgQElucHV0KCkgY2FyZERldGFpbHM6YW55O1xuICBASW5wdXQoKSBjb21wbGV0ZVBhZ2VEZXRhaWxzOmFueTtcbiAgQE91dHB1dCgpIGNsb3NlOkV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgY2FyZENoYXJnZXM6YW55O1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tb25QYXltZW50U2VydmljZTpDb21tb25QYXltZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICB0aGlzLmNhcmRDaGFyZ2VzID0gdGhpcy5jb21wbGV0ZVBhZ2VEZXRhaWxzLmNhcmRDaGFyZ2VzW3RoaXMuY29tbW9uUGF5bWVudFNlcnZpY2UuY2FyZENoYXJnZXNdLmNoYXJnZVxuICAgY29uc29sZS5sb2coJ2NvbXBsZXRlUGF5bWVudERhdGEnLHRoaXMudmFsaWQpO1xuICAgXG4gICAgaWYoKHRoaXMuY29tcGxldGVQYXltZW50RGF0YS5wYXltZW50RGV0YWlscz8uY2FyZGxhdDQgfHwgdGhpcy5jYXJkRGV0YWlscykgJiYgdGhpcy52YWxpZCl7XG4gICAgICB0aGlzLnBlbmRpbmc9ZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnBlbmRpbmc9ZmFsc2U7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYWdlLWNsYXNzIGZlZWRiYWNrLXNlbnRcIj5cblxuICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwibG9nb1wiPiA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWNoZWNrXCI+PC9pPjwvZGl2Pjxicj5cbiAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwic2tlbGV0b24tYm94XCIgc3R5bGU9XCJ3aWR0aDoxMjRweDtoZWlnaHQ6IDEyNHB4O21hcmdpbjogMCBhdXRvO1wiPjwvZGl2PlxuICAgIDxkaXYgIGNsYXNzPVwiZmVlZGJhY2stdGl0bGVcIj4gUGF5bWVudCBzdWNjZXNzZnVsIDwvZGl2PlxuICAgIDxkaXYgIGNsYXNzPVwiZmVlZGJhY2stbWVzc2FnZSBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTZcIj4gVGhlIGZpbmFsIHBheW1lbnQgd2FzIG1hZGVcbiAgICAgICAgb24gdGhlIHt7Y29tcGxldGVQYXltZW50RGF0YT8ucGF5bWVudERldGFpbHMubGFzdFBhaWREYXRlfX0gPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cInBhZ2UtY2xhc3NcIiBbY2xhc3MucmVtb3ZlLXBhZGRpbmddPVwidmFsaWRcIiBzdHlsZT1cIm1pbi1oZWlnaHQ6NDYwcHg7XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHJvdy1hbGlnblwiIFtjbGFzcy5yZW1vdmUtcGFkZGluZ109XCJ2YWxpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBmZWVkYmFjay1jb21tZW50IHBheW1lbnQtc3VtbWFyeVwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItc3VtbWFyeSBwYWQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsb2FkaW5nXCIgY2xhc3M9XCJmZWVkYmFjay1hcHBvaW50bWVudFwiPiBPcmRlciBzdW1tYXJ5IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJza2VsZXRvbi1ib3hcIiBzdHlsZT1cIndpZHRoOjMwMHB4O2hlaWdodDogMjBweDttYXJnaW4tYm90dG9tOiAxMHB4O1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwicm93IGZlZWRiYWNrLWFwcG9pbnRtZW50LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbGFibGVcIj5TdWIgdG90YWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdmFsdWVcIj57e2NvbXBsZXRlUGF5bWVudERhdGEuY3VycmVuY3lTeW1ib2x9fXt7Y29tcGxldGVQYXltZW50RGF0YS5pbnZvaWNlRGV0YWlscy50b3RhbH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxvYWRpbmdcIiBjbGFzcz1cInJvdyBmZWVkYmFjay1hcHBvaW50bWVudC1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGxhYmxlXCI+e3tjb21wbGV0ZVBheW1lbnREYXRhLnRheExhYmVsfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdmFsdWVcIj57e2NvbXBsZXRlUGF5bWVudERhdGEuY3VycmVuY3lTeW1ib2x9fXt7Y29tcGxldGVQYXltZW50RGF0YS5pbnZvaWNlRGV0YWlscy50YXhlc319PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdpZHRoLWYgSC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbG9hZGluZ1wiIGNsYXNzPVwicm93IGZlZWRiYWNrLWFwcG9pbnRtZW50LW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbGFibGVcIj5HcmFuZCB0b3RhbDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB2YWx1ZVwiIHN0eWxlPVwiY29sb3I6IHZhcigtLXBvc2l0aXZlRm91bmRhdGlvbik7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjb21wbGV0ZVBheW1lbnREYXRhLmN1cnJlbmN5U3ltYm9sfX17e2NvbXBsZXRlUGF5bWVudERhdGEuaW52b2ljZURldGFpbHMuZ3JhbmRUb3RhbCtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF5bWVudENoYXJnZXM/cGF5bWVudENoYXJnZXM6KGNvbXBsZXRlUGF5bWVudERhdGEucGF5bWVudERldGFpbHM/LmNhcmRCcmFuZCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXRhaWxzPy5jYXJkQ29tcGFueT8oKGNhcmRDaGFyZ2VzIC9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDApICogY29tcGxldGVQYXltZW50RGF0YS5wYXltZW50RGV0YWlscy5wYWlkQW1vdW50KTowKSl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9hZGluZ1wiIGNsYXNzPVwic2tlbGV0b24tYm94XCIgc3R5bGU9XCJ3aWR0aDoxNjZweDtoZWlnaHQ6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=