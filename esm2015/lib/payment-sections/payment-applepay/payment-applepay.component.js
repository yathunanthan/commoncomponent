import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class PaymentApplepayComponent {
    constructor() {
        this.payEmitter = new EventEmitter();
    }
    ngOnInit() {
        this.payEmitter.emit(true);
    }
}
PaymentApplepayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentApplepayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaymentApplepayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentApplepayComponent, selector: "app-payment-applepay", outputs: { payEmitter: "payEmitter" }, ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentApplepayComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-payment-applepay',
                    templateUrl: './payment-applepay.component.html',
                    styleUrls: ['./payment-applepay.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1hcHBsZXBheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LWFwcGxlcGF5L3BheW1lbnQtYXBwbGVwYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGFyZW50cGF5bWVudC9zcmMvbGliL3BheW1lbnQtc2VjdGlvbnMvcGF5bWVudC1hcHBsZXBheS9wYXltZW50LWFwcGxlcGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTy9FLE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFGVSxlQUFVLEdBQXFCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFakQsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7c0hBUlUsd0JBQXdCOzBHQUF4Qix3QkFBd0IsbUdDUHJDLEVBQUE7NEZET2Esd0JBQXdCO2tCQUxwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7b0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDswRUFHVyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLElucHV0ICxPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGF5bWVudC1hcHBsZXBheScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWFwcGxlcGF5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGF5bWVudC1hcHBsZXBheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBheW1lbnRBcHBsZXBheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQE91dHB1dCgpIHBheUVtaXR0ZXI6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGF5RW1pdHRlci5lbWl0KHRydWUpO1xuICB9XG5cbn1cbiIsIiJdfQ==