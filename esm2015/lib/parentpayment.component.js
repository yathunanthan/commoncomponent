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
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails", apiUrl: "apiUrl" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter", commonSelectPaymentMethodEmitter: "commonSelectPaymentMethodEmitter", selectPaymentMethodEmitter: "selectPaymentMethodEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (payOptionEmitter)="payOptionsChecked($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `, isInline: true, components: [{ type: i2.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip", "total"], outputs: ["emitter", "payEmitter", "payOptionEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (payOptionEmitter)="payOptionsChecked($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBdUJqQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFwQjVDLCtCQUEwQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDeEQscUNBQWdDLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5RCwrQkFBMEIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBa0JSLENBQUM7SUFmM0QsS0FBSyxDQUFDLGFBQWlCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFVBQWM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsYUFBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOztvSEE1QlUsc0JBQXNCO3dHQUF0QixzQkFBc0IsZ1VBTHZCOztHQUVUOzRGQUdVLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7MkdBR1UsY0FBYztzQkFBdEIsS0FBSztnQkFDSSwwQkFBMEI7c0JBQW5DLE1BQU07Z0JBQ0csZ0NBQWdDO3NCQUF6QyxNQUFNO2dCQUNHLDBCQUEwQjtzQkFBbkMsTUFBTTtnQkFDRSxNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vblBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vcHVibGljLWFwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXJlbnRwYXltZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxsaWItcGF5bWVudC1kZXRhaWxzIFtnZW5lcmljUGF5bWVudERldGFpbHNdPVwicGF5bWVudERldGFpbHNcIiAocGF5RW1pdHRlcik9XCJ2YWxpZCgkZXZlbnQpXCIgKHBheU9wdGlvbkVtaXR0ZXIpPVwicGF5T3B0aW9uc0NoZWNrZWQoJGV2ZW50KVwiIChlbWl0dGVyKT1cInNlbGVjdFBheW1lbnRNZXRob2QoJGV2ZW50KVwiPjwvbGliLXBheW1lbnQtZGV0YWlscz5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRwYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBwYXltZW50RGV0YWlsczphbnk7XG4gIEBPdXRwdXQoKSBjb21tb25QYXltZW50RW5hYmxlRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY29tbW9uU2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdFBheW1lbnRNZXRob2RFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBJbnB1dCgpIGFwaVVybDphbnk7XG5cbiAgdmFsaWQocGF5bWVudEVuYWJsZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50RW5hYmxlJyxwYXltZW50RW5hYmxlKTtcbiAgICB0aGlzLmNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICBwYXlPcHRpb25zQ2hlY2tlZChwYXlPcHRpb25zOmFueSl7XG4gICAgY29uc29sZS5sb2coJ3BheU9QdGlvbnMnLHBheU9wdGlvbnMpO1xuICAgIHRoaXMuc2VsZWN0UGF5bWVudE1ldGhvZEVtaXR0ZXIuZW1pdChwYXlPcHRpb25zKTtcbiAgfVxuXG4gIHNlbGVjdFBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50TWV0aG9kJyxwYXltZW50TWV0aG9kKTtcbiAgICB0aGlzLmNvbW1vblNlbGVjdFBheW1lbnRNZXRob2RFbWl0dGVyLmVtaXQocGF5bWVudE1ldGhvZCk7ICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbW9uU2VydmljZTpDb21tb25QYXltZW50U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0QXBpVXJsKHRoaXMuYXBpVXJsKTtcbiAgICAgIHRoaXMuY29tbW9uU2VydmljZS5zZXRQYXltZW50RGV0YWlscyh0aGlzLnBheW1lbnREZXRhaWxzKTtcbiAgfVxuXG59XG4iXX0=