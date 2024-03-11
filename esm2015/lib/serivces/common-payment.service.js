import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonPaymentService {
    constructor(http) {
        this.http = http;
        this.cardCharges = [];
        this.userUrl = new BehaviorSubject(null);
        this.userUrl$ = this.userUrl.asObservable();
        this.paymentDetails = new BehaviorSubject(null);
        this.paymentDetails$ = this.paymentDetails.asObservable();
    }
    getCountryName() {
        return this.http.get(`https://restcountries.com/v3.1/all`);
    }
    setUserResponse(data, key) {
        if (data.cardCharges) {
            this.cardCharges = data.cardCharges.findIndex((item) => item.paymentIntegration === (data.isStripeEnabled ? "Stripe" : "Basys"));
        }
    }
    setPaymentDetails(data) {
        this.completePageData = data;
        this.paymentDetails.next(data);
    }
    getApiUrl(url) {
        console.log('apiUrl', url);
        this.userUrl.next(url);
        this.apiUrl = url;
    }
    getStorecard(invoiceAddressId) {
        var userdata = this.http.get(this.apiUrl.apiUrl + `invoiceaddresses/${invoiceAddressId}/storedcards`, { headers: { "token": this.apiUrl.token, "portal": this.apiUrl.portal } });
        return userdata;
    }
}
CommonPaymentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
CommonPaymentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0IsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFUbkMsZ0JBQVcsR0FBTSxFQUFFLENBQUM7UUFHWixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0IsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFZCxDQUFDO0lBRXhDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFTLEVBQUMsR0FBTztRQUMvQixJQUFHLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQSxDQUFDLENBQUEsUUFBUSxDQUFBLENBQUMsQ0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ2pJO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVE7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQU87UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWSxDQUFDLGdCQUF3QjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsZ0JBQWdCLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakwsT0FBTyxRQUFRLENBQUE7SUFFakIsQ0FBQzs7a0hBdENVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uUGF5bWVudFNlcnZpY2Uge1xuXG4gIGNhcmRDaGFyZ2VzOiBhbnk9W107XG4gIGFwaVVybDphbnk7XG4gIGNvbXBsZXRlUGFnZURhdGE6YW55O1xuICBwcml2YXRlIHVzZXJVcmwgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICB1c2VyVXJsJCA9IHRoaXMudXNlclVybC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIHBheW1lbnREZXRhaWxzID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcGF5bWVudERldGFpbHMkID0gdGhpcy5wYXltZW50RGV0YWlscy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XG5cbiAgZ2V0Q291bnRyeU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbGxgKVxuICB9XG5cbiAgc2V0VXNlclJlc3BvbnNlKGRhdGE6IGFueSxrZXk6YW55KXtcbiAgICBpZihkYXRhLmNhcmRDaGFyZ2VzKXtcbiAgICAgIHRoaXMuY2FyZENoYXJnZXMgPSBkYXRhLmNhcmRDaGFyZ2VzLmZpbmRJbmRleCgoaXRlbTphbnkpID0+IGl0ZW0ucGF5bWVudEludGVncmF0aW9uID09PSAoZGF0YS5pc1N0cmlwZUVuYWJsZWQ/XCJTdHJpcGVcIjpcIkJhc3lzXCIpKVxuICAgIH1cbiAgfVxuXG4gIHNldFBheW1lbnREZXRhaWxzKGRhdGE6YW55KXtcbiAgICAgIHRoaXMuY29tcGxldGVQYWdlRGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLnBheW1lbnREZXRhaWxzLm5leHQoZGF0YSk7XG4gIH1cblxuICBnZXRBcGlVcmwodXJsOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2FwaVVybCcsdXJsKTtcbiAgICAgIHRoaXMudXNlclVybC5uZXh0KHVybCk7XG4gICAgICB0aGlzLmFwaVVybCA9IHVybDtcbiAgfVxuXG4gIGdldFN0b3JlY2FyZChpbnZvaWNlQWRkcmVzc0lkOiBzdHJpbmcpIHtcbiAgICB2YXIgdXNlcmRhdGEgPSB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsLmFwaVVybCArIGBpbnZvaWNlYWRkcmVzc2VzLyR7aW52b2ljZUFkZHJlc3NJZH0vc3RvcmVkY2FyZHNgLCB7IGhlYWRlcnM6IHsgXCJ0b2tlblwiOiB0aGlzLmFwaVVybC50b2tlbiwgXCJwb3J0YWxcIjogdGhpcy5hcGlVcmwucG9ydGFsIH0gfSk7XG4gICAgcmV0dXJuIHVzZXJkYXRhXG5cbiAgfVxufVxuIl19