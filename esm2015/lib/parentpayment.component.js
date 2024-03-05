import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-details/payment-details.component";
export class ParentpaymentComponent {
    constructor() {
        this.commonPaymentEnableEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        console.log('paymentEnable', paymentEnable);
        this.commonPaymentEnableEmitter.emit(paymentEnable);
    }
    ngOnInit() {
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)"></lib-payment-details>
  `, isInline: true, components: [{ type: i1.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip"], outputs: ["emitter", "payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)"></lib-payment-details>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { paymentDetails: [{
                type: Input
            }], commonPaymentEnableEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUzlFLE1BQU0sT0FBTyxzQkFBc0I7SUFVakM7UUFQVSwrQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBT2xELENBQUM7SUFMakIsS0FBSyxDQUFDLGFBQWlCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUlELFFBQVE7SUFDUixDQUFDOztvSEFiVSxzQkFBc0I7d0dBQXRCLHNCQUFzQiw4S0FMdkI7O0dBRVQ7NEZBR1Usc0JBQXNCO2tCQVBsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDswRUFHVSxjQUFjO3NCQUF0QixLQUFLO2dCQUNJLDBCQUEwQjtzQkFBbkMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFyZW50cGF5bWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bGliLXBheW1lbnQtZGV0YWlscyBbZ2VuZXJpY1BheW1lbnREZXRhaWxzXT1cInBheW1lbnREZXRhaWxzXCIgKHBheUVtaXR0ZXIpPVwidmFsaWQoJGV2ZW50KVwiPjwvbGliLXBheW1lbnQtZGV0YWlscz5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRwYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwYXltZW50RGV0YWlsczphbnk7XG4gIEBPdXRwdXQoKSBjb21tb25QYXltZW50RW5hYmxlRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHZhbGlkKHBheW1lbnRFbmFibGU6YW55KXtcbiAgICBjb25zb2xlLmxvZygncGF5bWVudEVuYWJsZScscGF5bWVudEVuYWJsZSk7XG4gICAgdGhpcy5jb21tb25QYXltZW50RW5hYmxlRW1pdHRlci5lbWl0KHBheW1lbnRFbmFibGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=