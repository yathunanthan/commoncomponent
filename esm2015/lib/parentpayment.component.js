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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBd0JqQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFyQjVDLCtCQUEwQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEQscUNBQWdDLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5RCwrQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBbUJSLENBQUM7SUFmM0QsS0FBSyxDQUFDLGFBQWlCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFVBQWM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsYUFBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOztvSEE3QlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isa1hBTHZCOztHQUVUOzRGQUdVLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7MkdBR1UsY0FBYztzQkFBdEIsS0FBSztnQkFDSSwwQkFBMEI7c0JBQW5DLE1BQU07Z0JBQ0csZ0NBQWdDO3NCQUF6QyxNQUFNO2dCQUNHLDBCQUEwQjtzQkFBbkMsTUFBTTtnQkFDRSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csc0JBQXNCO3NCQUE5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25QYXltZW50U2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFyZW50cGF5bWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bGliLXBheW1lbnQtZGV0YWlscyBbZ2VuZXJpY1BheW1lbnREZXRhaWxzXT1cInBheW1lbnREZXRhaWxzXCIgKHBheUVtaXR0ZXIpPVwidmFsaWQoJGV2ZW50KVwiIFtwYXltZW50U2VsZWN0ZWRPcHRpb25zXT1cInBheW1lbnRTZWxlY3RlZE9wdGlvbnNcIiAocGF5T3B0aW9uRW1pdHRlcik9XCJwYXlPcHRpb25zQ2hlY2tlZCgkZXZlbnQpXCIgKGVtaXR0ZXIpPVwic2VsZWN0UGF5bWVudE1ldGhvZCgkZXZlbnQpXCI+PC9saWItcGF5bWVudC1kZXRhaWxzPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBheW1lbnREZXRhaWxzOmFueTtcbiAgQE91dHB1dCgpIGNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjb21tb25TZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQElucHV0KCkgYXBpVXJsOmFueTtcbiAgQElucHV0KCkgcGF5bWVudFNlbGVjdGVkT3B0aW9uczphbnk7XG5cbiAgdmFsaWQocGF5bWVudEVuYWJsZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50RW5hYmxlJyxwYXltZW50RW5hYmxlKTtcbiAgICB0aGlzLmNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICBwYXlPcHRpb25zQ2hlY2tlZChwYXlPcHRpb25zOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3BheU9QdGlvbnMnLHBheU9wdGlvbnMpO1xuICAgIHRoaXMuc2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIuZW1pdChwYXlPcHRpb25zKTtcbiAgfVxuXG4gIHNlbGVjdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50TWV0aG9kJyxwYXltZW50TWV0aG9kKTtcbiAgICB0aGlzLmNvbW1vblNlbGVjdFBheW1lbnRNZXRob2RFbWl0dGVyLmVtaXQocGF5bWVudE1ldGhvZCk7ICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbW9uU2VydmljZTpDb21tb25QYXltZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0QXBpVXJsKHRoaXMuYXBpVXJsKTtcbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zZXRQYXltZW50RGV0YWlscyh0aGlzLnBheW1lbnREZXRhaWxzKTtcbiAgfVxuXG59XG4iXX0=