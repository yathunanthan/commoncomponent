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
        this.commonService.getStorecard(this.paymentDetails.invoiceDetails.invoiceAddressId).subscribe((res) => {
            this.storedCardData = res.records;
        });
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [{ token: i1.CommonPaymentService }], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", inputs: { paymentDetails: "paymentDetails", apiUrl: "apiUrl" }, outputs: { commonPaymentEnableEmitter: "commonPaymentEnableEmitter", commonSelectPaymentMethodEmitter: "commonSelectPaymentMethodEmitter" }, ngImport: i0, template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)" [storedCard]="storedCardData"></lib-payment-details>
  `, isInline: true, components: [{ type: i2.PaymentDetailsComponent, selector: "lib-payment-details", inputs: ["genericPaymentDetails", "storedCard", "tip"], outputs: ["emitter", "payEmitter"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    template: `
      <lib-payment-details [genericPaymentDetails]="paymentDetails" (payEmitter)="valid($event)" (emitter)="selectPaymentMethod($event)" [storedCard]="storedCardData"></lib-payment-details>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVU5RSxNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQyxZQUFvQixhQUFrQztRQUFsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFmNUMsK0JBQTBCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN4RCxxQ0FBZ0MsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBY2QsQ0FBQztJQVYzRCxLQUFLLENBQUMsYUFBaUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsYUFBaUI7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQ3hHLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7O29IQXpCVSxzQkFBc0I7d0dBQXRCLHNCQUFzQixzUUFMdkI7O0dBRVQ7NEZBR1Usc0JBQXNCO2tCQVBsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDsyR0FHVSxjQUFjO3NCQUF0QixLQUFLO2dCQUNJLDBCQUEwQjtzQkFBbkMsTUFBTTtnQkFDRyxnQ0FBZ0M7c0JBQXpDLE1BQU07Z0JBQ0UsTUFBTTtzQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25QYXltZW50U2VydmljZSB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFyZW50cGF5bWVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bGliLXBheW1lbnQtZGV0YWlscyBbZ2VuZXJpY1BheW1lbnREZXRhaWxzXT1cInBheW1lbnREZXRhaWxzXCIgKHBheUVtaXR0ZXIpPVwidmFsaWQoJGV2ZW50KVwiIChlbWl0dGVyKT1cInNlbGVjdFBheW1lbnRNZXRob2QoJGV2ZW50KVwiIFtzdG9yZWRDYXJkXT1cInN0b3JlZENhcmREYXRhXCI+PC9saWItcGF5bWVudC1kZXRhaWxzPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHBheW1lbnREZXRhaWxzOmFueTtcbiAgQE91dHB1dCgpIGNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjb21tb25TZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASW5wdXQoKSBhcGlVcmw6YW55O1xuICBzdG9yZWRDYXJkRGF0YTphbnk7XG5cbiAgdmFsaWQocGF5bWVudEVuYWJsZTphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdwYXltZW50RW5hYmxlJyxwYXltZW50RW5hYmxlKTtcbiAgICB0aGlzLmNvbW1vblBheW1lbnRFbmFibGVFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cblxuICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2Q6YW55KXtcbiAgICBjb25zb2xlLmxvZygncGF5bWVudE1ldGhvZCcscGF5bWVudE1ldGhvZCk7XG4gICAgdGhpcy5jb21tb25TZWxlY3RQYXltZW50TWV0aG9kRW1pdHRlci5lbWl0KHBheW1lbnRNZXRob2QpOyAgXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uUGF5bWVudFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jb21tb25TZXJ2aWNlLmdldEFwaVVybCh0aGlzLmFwaVVybCk7XG4gICAgICB0aGlzLmNvbW1vblNlcnZpY2UuZ2V0U3RvcmVjYXJkKHRoaXMucGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMuaW52b2ljZUFkZHJlc3NJZCkuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgICB0aGlzLnN0b3JlZENhcmREYXRhID0gcmVzLnJlY29yZHM7XG4gICAgICB9KVxuICB9XG5cbn1cbiJdfQ==