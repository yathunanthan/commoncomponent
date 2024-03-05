import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CommonPaymentService {
    constructor(http) {
        this.http = http;
        this.cardCharges = [];
    }
    getCountryName() {
        return this.http.get(`https://restcountries.com/v3.1/all`);
    }
    setUserResponse(data, key) {
        if (data.cardCharges) {
            this.cardCharges = data.cardCharges.findIndex((item) => item.paymentIntegration === (data.isStripeEnabled ? "Stripe" : "Basys"));
        }
    }
    getApiUrl(url) {
        console.log('apiUrl', url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sb0JBQW9CO0lBSy9CLFlBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBSG5DLGdCQUFXLEdBQU0sRUFBRSxDQUFDO0lBR21CLENBQUM7SUFFeEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBQyxHQUFPO1FBQy9CLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUEsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDakk7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQU87UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWSxDQUFDLGdCQUF3QjtRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsZ0JBQWdCLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakwsT0FBTyxRQUFRLENBQUE7SUFFakIsQ0FBQzs7a0hBM0JVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblBheW1lbnRTZXJ2aWNlIHtcblxuICBjYXJkQ2hhcmdlczogYW55PVtdO1xuICBhcGlVcmw6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRDb3VudHJ5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbGApXG4gIH1cblxuICBzZXRVc2VyUmVzcG9uc2UoZGF0YTogYW55LGtleTphbnkpe1xuICAgIGlmKGRhdGEuY2FyZENoYXJnZXMpe1xuICAgICAgdGhpcy5jYXJkQ2hhcmdlcyA9IGRhdGEuY2FyZENoYXJnZXMuZmluZEluZGV4KChpdGVtOmFueSkgPT4gaXRlbS5wYXltZW50SW50ZWdyYXRpb24gPT09IChkYXRhLmlzU3RyaXBlRW5hYmxlZD9cIlN0cmlwZVwiOlwiQmFzeXNcIikpXG4gICAgfVxuICB9XG5cbiAgZ2V0QXBpVXJsKHVybDphbnkpe1xuICAgIGNvbnNvbGUubG9nKCdhcGlVcmwnLHVybCk7XG4gICAgXG4gICAgICB0aGlzLmFwaVVybCA9IHVybDtcbiAgfVxuXG4gIGdldFN0b3JlY2FyZChpbnZvaWNlQWRkcmVzc0lkOiBzdHJpbmcpIHtcbiAgICB2YXIgdXNlcmRhdGEgPSB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsLmFwaVVybCArIGBpbnZvaWNlYWRkcmVzc2VzLyR7aW52b2ljZUFkZHJlc3NJZH0vc3RvcmVkY2FyZHNgLCB7IGhlYWRlcnM6IHsgXCJ0b2tlblwiOiB0aGlzLmFwaVVybC50b2tlbiwgXCJwb3J0YWxcIjogdGhpcy5hcGlVcmwucG9ydGFsIH0gfSk7XG4gICAgcmV0dXJuIHVzZXJkYXRhXG5cbiAgfVxufVxuIl19