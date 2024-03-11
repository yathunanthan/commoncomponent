import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../public-api";
import * as i2 from "./payment-details/payment-details.component";
export class ParentpaymentComponent {
    constructor(commonService) {
        this.commonService = commonService;
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
        this.commonService.getApiUrl(this.apiUrl);
        this.commonService.setPaymentDetails(this.paymentDetails);
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [{ token: i1.CommonPaymentService }], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails", apiUrl: "apiUrl" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter", commonSelectPaymentMethodEmitter: "commonSelectPaymentMethodEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `, isInline: true, components: [{ type: i2.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "tip", "total"], outputs: ["emitter", "payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)"></lib-payment-details>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.CommonPaymentService }]; }, propDecorators: { paymentDetails: [{
                type: Input
            }], commonPaymentEnableEmitter: [{
                type: Output
            }], commonSelectPaymentMethodEmitter: [{
                type: Output
            }], apiUrl: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFkNUMsK0JBQTBCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4RCxxQ0FBZ0MsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBYWQsQ0FBQztJQVYzRCxLQUFLLENBQUMsYUFBaUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsYUFBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOztvSEF0QlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isc1FBTHZCOztHQUVUOzRGQUdVLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7MkdBR1UsY0FBYztzQkFBdEIsS0FBSztnQkFDSSwwQkFBMEI7c0JBQW5DLE1BQU07Z0JBQ0csZ0NBQWdDO3NCQUF6QyxNQUFNO2dCQUNFLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWMtYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBhcmVudHBheW1lbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGxpYi1wYXltZW50LWRldGFpbHMgW2dlbmVyaWNQYXltZW50RGV0YWlsc109XCJwYXltZW50RGV0YWlsc1wiIChwYXlFbWl0dGVyKT1cInZhbGlkKCRldmVudClcIiAoZW1pdHRlcik9XCJzZWxlY3RQYXltZW50TWV0aG9kKCRldmVudClcIj48L2xpYi1wYXltZW50LWRldGFpbHM+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50cGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcGF5bWVudERldGFpbHM6YW55O1xuICBAT3V0cHV0KCkgY29tbW9uUGF5bWVudEVuYWJsZUVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNvbW1vblNlbGVjdFBheW1lbnRNZXRob2RFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBJbnB1dCgpIGFwaVVybDphbnk7XG5cbiAgdmFsaWQocGF5bWVudEVuYWJsZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50RW5hYmxlJyxwYXltZW50RW5hYmxlKTtcbiAgICB0aGlzLmNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6YW55KXtcbiAgICBjb25zb2xlLmxvZygncGF5bWVudE1ldGhvZCcscGF5bWVudE1ldGhvZCk7XG4gICAgdGhpcy5jb21tb25TZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlci5lbWl0KHBheW1lbnRNZXRob2QpOyAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uUGF5bWVudFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdldEFwaVVybCh0aGlzLmFwaVVybCk7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2Uuc2V0UGF5bWVudERldGFpbHModGhpcy5wYXltZW50RGV0YWlscyk7XG4gIH1cblxufVxuIl19