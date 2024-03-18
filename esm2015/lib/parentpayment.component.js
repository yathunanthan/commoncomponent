import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../public-api";
import * as i2 from "./payment-details/payment-details.component";
export class ParentpaymentComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.commonPaymentEnableEmitter = new EventEmitter();
        this.commonSelectPaymentMethodEmitter = new EventEmitter();
        this.selectPaymentMethodEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        console.log('paymentEnable', paymentEnable);
        this.commonPaymentEnableEmitter.emit(paymentEnable);
    }
    payOptionsChecked(payOptions) {
        console.log('payOPtions', payOptions);
        this.selectPaymentMethodEmitter.emit(payOptions);
    }
    selectPaymentMethod(paymentMethod) {
        console.log('paymentMethod', paymentMethod);
        this.commonSelectPaymentMethodEmitter.emit(paymentMethod);
    }
    ngOnInit() {
        this.commonService.getApiUrl(this.apiUrl);
        console.log('paymentSelectedOptions', this.paymentSelectedOptions);
        this.commonService.setPaymentDetails(this.paymentDetails);
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [{ token: i1.CommonPaymentService }], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails", apiUrl: "apiUrl", paymentSelectedOptions: "paymentSelectedOptions" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter", commonSelectPaymentMethodEmitter: "commonSelectPaymentMethodEmitter", selectPaymentMethodEmitter: "selectPaymentMethodEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" [paymentSelectedOptions]="paymentSelectedOptions" (payOptionEmitter)="payOptionsChecked($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `, isInline: true, components: [{ type: i2.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip", "total", "paymentSelectedOptions"], outputs: ["emitter", "payEmitter", "payOptionEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" [paymentSelectedOptions]="paymentSelectedOptions" (payOptionEmitter)="payOptionsChecked($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.CommonPaymentService }]; }, propDecorators: { paymentDetails: [{
                type: Input
            }], commonPaymentEnableEmitter: [{
                type: Output
            }], commonSelectPaymentMethodEmitter: [{
                type: Output
            }], selectPaymentMethodEmitter: [{
                type: Output
            }], apiUrl: [{
                type: Input
            }], paymentSelectedOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBd0JqQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFyQjVDLCtCQUEwQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEQscUNBQWdDLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5RCwrQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUJSLENBQUM7SUFmM0QsS0FBSyxDQUFDLGFBQWlCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFVBQWM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsYUFBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlELENBQUM7O29IQS9CVSxzQkFBc0I7d0dBQXRCLHNCQUFzQixrWEFMdkI7O0dBRVQ7NEZBR1Usc0JBQXNCO2tCQVBsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDsyR0FHVSxjQUFjO3NCQUF0QixLQUFLO2dCQUNJLDBCQUEwQjtzQkFBbkMsTUFBTTtnQkFDRyxnQ0FBZ0M7c0JBQXpDLE1BQU07Z0JBQ0csMEJBQTBCO3NCQUFuQyxNQUFNO2dCQUNFLE1BQU07c0JBQWQsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vblBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXJlbnRwYXltZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxsaWItcGF5bWVudC1kZXRhaWxzIFtnZW5lcmljUGF5bWVudERldGFpbHNdPVwicGF5bWVudERldGFpbHNcIiAocGF5RW1pdHRlcik9XCJ2YWxpZCgkZXZlbnQpXCIgW3BheW1lbnRTZWxlY3RlZE9wdGlvbnNdPVwicGF5bWVudFNlbGVjdGVkT3B0aW9uc1wiIChwYXlPcHRpb25FbWl0dGVyKT1cInBheU9wdGlvbnNDaGVja2VkKCRldmVudClcIiAoZW1pdHRlcik9XCJzZWxlY3RQYXltZW50TWV0aG9kKCRldmVudClcIj48L2xpYi1wYXltZW50LWRldGFpbHM+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50cGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGF5bWVudERldGFpbHM6YW55O1xuICBAT3V0cHV0KCkgY29tbW9uUGF5bWVudEVuYWJsZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNvbW1vblNlbGVjdFBheW1lbnRNZXRob2RFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASW5wdXQoKSBhcGlVcmw6YW55O1xuICBASW5wdXQoKSBwYXltZW50U2VsZWN0ZWRPcHRpb25zOmFueTtcblxuICB2YWxpZChwYXltZW50RW5hYmxlOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3BheW1lbnRFbmFibGUnLHBheW1lbnRFbmFibGUpO1xuICAgIHRoaXMuY29tbW9uUGF5bWVudEVuYWJsZUVtaXR0ZXIuZW1pdChwYXltZW50RW5hYmxlKTtcbiAgfVxuXG4gIHBheU9wdGlvbnNDaGVja2VkKHBheU9wdGlvbnM6YW55KXtcbiAgICBjb25zb2xlLmxvZygncGF5T1B0aW9ucycscGF5T3B0aW9ucyk7XG4gICAgdGhpcy5zZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlci5lbWl0KHBheU9wdGlvbnMpO1xuICB9XG5cbiAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3BheW1lbnRNZXRob2QnLHBheW1lbnRNZXRob2QpO1xuICAgIHRoaXMuY29tbW9uU2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIuZW1pdChwYXltZW50TWV0aG9kKTsgIFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tb25TZXJ2aWNlOkNvbW1vblBheW1lbnRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5nZXRBcGlVcmwodGhpcy5hcGlVcmwpO1xuICAgICAgY29uc29sZS5sb2coJ3BheW1lbnRTZWxlY3RlZE9wdGlvbnMnLHRoaXMucGF5bWVudFNlbGVjdGVkT3B0aW9ucyk7XG4gICAgICBcbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zZXRQYXltZW50RGV0YWlscyh0aGlzLnBheW1lbnREZXRhaWxzKTtcbiAgfVxuXG59XG4iXX0=