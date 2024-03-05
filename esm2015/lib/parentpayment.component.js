import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./payment-details/payment-details.component";
export class ParentpaymentComponent {
    constructor() {
        this.commonPaymentEnableEmitter = new EventEmitter();
        this.commonSelectPaymentMethodEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        console.log('paymentEnable', paymentEnable);
        this.commonPaymentEnableEmitter.emit(paymentEnable);
    }
    selectPaymentMethod(paymentMethod) {
        console.log('paymentMethod', paymentMethod);
        this.commonSelectPaymentMethodEmitter.emit(paymentMethod);
    }
    ngOnInit() {
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter", commonSelectPaymentMethodEmitter: "commonSelectPaymentMethodEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `, isInline: true, components: [{ type: i1.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip"], outputs: ["emitter", "payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { paymentDetails: [{
                type: Input
            }], commonPaymentEnableEmitter: [{
                type: Output
            }], commonSelectPaymentMethodEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUzlFLE1BQU0sT0FBTyxzQkFBc0I7SUFnQmpDO1FBYlUsK0JBQTBCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4RCxxQ0FBZ0MsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBWXhELENBQUM7SUFWakIsS0FBSyxDQUFDLGFBQWlCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1CQUFtQixDQUFDLGFBQWlCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUlELFFBQVE7SUFDUixDQUFDOztvSEFuQlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isb1BBTHZCOztHQUVUOzRGQUdVLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7MEVBR1UsY0FBYztzQkFBdEIsS0FBSztnQkFDSSwwQkFBMEI7c0JBQW5DLE1BQU07Z0JBQ0csZ0NBQWdDO3NCQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXJlbnRwYXltZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxsaWItcGF5bWVudC1kZXRhaWxzIFtnZW5lcmljUGF5bWVudERldGFpbHNdPVwicGF5bWVudERldGFpbHNcIiAocGF5RW1pdHRlcik9XCJ2YWxpZCgkZXZlbnQpXCIgKGVtaXR0ZXIpPVwic2VsZWN0UGF5bWVudE1ldGhvZCgkZXZlbnQpXCI+PC9saWItcGF5bWVudC1kZXRhaWxzPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBheW1lbnREZXRhaWxzOmFueTtcbiAgQE91dHB1dCgpIGNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjb21tb25TZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHZhbGlkKHBheW1lbnRFbmFibGU6YW55KXtcbiAgICBjb25zb2xlLmxvZygncGF5bWVudEVuYWJsZScscGF5bWVudEVuYWJsZSk7XG4gICAgdGhpcy5jb21tb25QYXltZW50RW5hYmxlRW1pdHRlci5lbWl0KHBheW1lbnRFbmFibGUpO1xuICB9XG5cbiAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3BheW1lbnRNZXRob2QnLHBheW1lbnRNZXRob2QpO1xuICAgIHRoaXMuY29tbW9uU2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIuZW1pdChwYXltZW50TWV0aG9kKTsgIFxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=