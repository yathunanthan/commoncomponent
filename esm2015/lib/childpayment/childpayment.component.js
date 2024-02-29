import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./payment-section/payment-section.component";
export class ChildpaymentComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.keyword = 0;
        this.downloading = false;
        this.paymentType = false;
        this.selected = false;
        this.paymentEnable = false;
        // logoUrl:string='ss';
        this.completed = false;
        this.paymentError = false;
        this.loading = false;
        this.error = false;
        this.logoUrl = '';
        this.paymentId = 0;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params['success'] == 'true') {
                this.completed = true;
                this.paymentError = false;
            }
            if (params['success'] == 'false') {
                this.paymentError = true;
            }
        });
    }
    send(keyword) {
        this.keyword = keyword;
    }
    select(selected) {
        this.selected = selected;
    }
    valid(paymentEnable) {
        this.paymentEnable = paymentEnable;
    }
    paymentCompleted(completed) {
        if (completed === true) {
            this.completed = completed;
            if (this.selected == 3) {
                this.paymentType = "walletPay";
            }
            else {
                this.paymentType = "cardPayment";
            }
        }
        else if (completed.length != 0) {
            this.paymentError = true;
            this.paymentErrorMsg = completed;
        }
    }
    setPaymentId(paymentId) {
        this.paymentId = paymentId;
    }
    setCardDetailsEmitter(cardDetails) {
        this.cardDetails = cardDetails;
    }
    setWalletDetails(walletDetails) {
        this.walletDetails = walletDetails;
    }
    // doCloseError:boolean=false;
    closeError(value) {
        // this.doCloseError=true;
        this.paymentError = !value;
        this.deleteQueryParameterFromCurrentRoute('success');
    }
    ngOnInit() {
        this.loading = true;
    }
    deleteQueryParameterFromCurrentRoute(val) {
        const params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        delete params[val];
        this.router.navigate([], { queryParams: params });
    }
}
ChildpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, deps: [{ token: i1.ActivatedRoute }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Component });
ChildpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChildpaymentComponent, selector: "lib-childpayment", ngImport: i0, template: "<lib-payment-section></lib-payment-section>", styles: [""], components: [{ type: i2.PaymentSectionComponent, selector: "lib-payment-section" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-childpayment',
                    templateUrl: './childpayment.component.html',
                    styleUrls: ['./childpayment.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGRwYXltZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9jaGlsZHBheW1lbnQvY2hpbGRwYXltZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9jaGlsZHBheW1lbnQvY2hpbGRwYXltZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTdELE1BQU0sT0FBTyxxQkFBcUI7SUFxRGhDLFlBQ1UsY0FBOEIsRUFDOUIsTUFBYztRQURkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBckR4QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHN0IsZ0JBQVcsR0FBUSxLQUFLLENBQUM7UUFNekIsYUFBUSxHQUFRLEtBQUssQ0FBQztRQUl0QixrQkFBYSxHQUFRLEtBQUssQ0FBQztRQXlEM0IsdUJBQXVCO1FBQ3ZCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsY0FBUyxHQUFVLENBQUMsQ0FBQztRQXJCbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2pELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtRQUdILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTdERCxJQUFJLENBQUMsT0FBWTtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBYTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWtCO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFQyxnQkFBZ0IsQ0FBQyxTQUFjO1FBQzNCLElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzthQUNsQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQzthQUNwQztTQUNKO2FBQU0sSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFSCxZQUFZLENBQUMsU0FBZTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFDLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBQ0QscUJBQXFCLENBQUMsV0FBZ0I7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBQyxXQUFXLENBQUM7SUFDL0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLGFBQW1CO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUksYUFBYSxDQUFDO0lBQzFDLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsVUFBVSxDQUFDLEtBQWM7UUFDdkIsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFnQ0QsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxvQ0FBb0MsQ0FBQyxHQUFVO1FBQzdDLE1BQU0sTUFBTSxxQkFBUSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUUsQ0FBQztRQUMvRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzttSEEzRlkscUJBQXFCO3VHQUFyQixxQkFBcUIsd0RDUmxDLDZDQUEyQzs0RkRROUIscUJBQXFCO2tCQUxqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY2hpbGRwYXltZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaWxkcGF5bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoaWxkcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hpbGRwYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBrZXl3b3JkID0gMDtcbiAgZG93bmxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2hhdEluZm86IGFueTtcbiAgcGF5bWVudEVycm9yTXNnOiBhbnk7XG4gIHBheW1lbnRUeXBlOiBhbnkgPSBmYWxzZTtcbiAgY2FyZERldGFpbHM6IGFueTtcbiAgICB3YWxsZXREZXRhaWxzOiBhbnk7XG4gIHNlbmQoa2V5d29yZDogYW55KSB7XG4gICAgdGhpcy5rZXl3b3JkID0ga2V5d29yZDtcbiAgfVxuICBzZWxlY3RlZDogYW55ID0gZmFsc2U7XG4gIHNlbGVjdChzZWxlY3RlZDogYW55KSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICB9XG4gIHBheW1lbnRFbmFibGU6IGFueSA9IGZhbHNlO1xuICB2YWxpZChwYXltZW50RW5hYmxlOiBhbnkpIHtcbiAgICB0aGlzLnBheW1lbnRFbmFibGUgPSBwYXltZW50RW5hYmxlO1xuICB9XG5cbiAgICBwYXltZW50Q29tcGxldGVkKGNvbXBsZXRlZDogYW55KSB7XG4gICAgICAgIGlmIChjb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMucGF5bWVudFR5cGUgPSBcIndhbGxldFBheVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBheW1lbnRUeXBlID0gXCJjYXJkUGF5bWVudFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBsZXRlZC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5wYXltZW50RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXltZW50RXJyb3JNc2cgPSBjb21wbGV0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgc2V0UGF5bWVudElkKHBheW1lbnRJZCA6IGFueSl7XG4gICAgdGhpcy5wYXltZW50SWQ9cGF5bWVudElkO1xuICB9XG4gIHNldENhcmREZXRhaWxzRW1pdHRlcihjYXJkRGV0YWlscyA6YW55KXtcbiAgICB0aGlzLmNhcmREZXRhaWxzPWNhcmREZXRhaWxzO1xuICB9XG5cbiAgc2V0V2FsbGV0RGV0YWlscyh3YWxsZXREZXRhaWxzIDogYW55KXtcbiAgICAgICAgdGhpcy53YWxsZXREZXRhaWxzID0gIHdhbGxldERldGFpbHM7XG4gIH1cblxuICAvLyBkb0Nsb3NlRXJyb3I6Ym9vbGVhbj1mYWxzZTtcbiAgY2xvc2VFcnJvcih2YWx1ZTogYm9vbGVhbikge1xuICAgIC8vIHRoaXMuZG9DbG9zZUVycm9yPXRydWU7XG4gICAgdGhpcy5wYXltZW50RXJyb3IgPSAhdmFsdWU7XG4gICAgdGhpcy5kZWxldGVRdWVyeVBhcmFtZXRlckZyb21DdXJyZW50Um91dGUoJ3N1Y2Nlc3MnKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcblxuICAgIFxuICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICBpZiAocGFyYW1zWydzdWNjZXNzJ10gPT0gJ3RydWUnKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXltZW50RXJyb3IgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXNbJ3N1Y2Nlc3MnXSA9PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMucGF5bWVudEVycm9yID0gdHJ1ZTtcbiAgICAgIH1cblxuXG4gICAgfSk7XG4gIH1cblxuXG4gIC8vIGxvZ29Vcmw6c3RyaW5nPSdzcyc7XG4gIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwYXltZW50RXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdXNlckRhdGE6IGFueTtcbiAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBsb2dvVXJsOiBzdHJpbmcgPSAnJztcbiAgcGF5bWVudElkIDogbnVtYmVyPTA7XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICB9XG5cbiAgZGVsZXRlUXVlcnlQYXJhbWV0ZXJGcm9tQ3VycmVudFJvdXRlKHZhbDpzdHJpbmcpe1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgLi4udGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcyB9O1xuICAgIGRlbGV0ZSBwYXJhbXNbdmFsXTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwgeyBxdWVyeVBhcmFtczogcGFyYW1zIH0pO1xufVxufVxuIiwiPGxpYi1wYXltZW50LXNlY3Rpb24+PC9saWItcGF5bWVudC1zZWN0aW9uPiJdfQ==