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
    setPaymentDetails(data) {
        this.completePageData = data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8sb0JBQW9CO0lBTS9CLFlBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBSm5DLGdCQUFXLEdBQU0sRUFBRSxDQUFDO0lBSW1CLENBQUM7SUFFeEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBQyxHQUFPO1FBQy9CLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUEsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDakk7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBUTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBTztRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZLENBQUMsZ0JBQXdCO1FBQ25DLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLG9CQUFvQixnQkFBZ0IsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqTCxPQUFPLFFBQVEsQ0FBQTtJQUVqQixDQUFDOztrSEFoQ1Usb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uUGF5bWVudFNlcnZpY2Uge1xuXG4gIGNhcmRDaGFyZ2VzOiBhbnk9W107XG4gIGFwaVVybDphbnk7XG4gIGNvbXBsZXRlUGFnZURhdGE6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRDb3VudHJ5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbGApXG4gIH1cblxuICBzZXRVc2VyUmVzcG9uc2UoZGF0YTogYW55LGtleTphbnkpe1xuICAgIGlmKGRhdGEuY2FyZENoYXJnZXMpe1xuICAgICAgdGhpcy5jYXJkQ2hhcmdlcyA9IGRhdGEuY2FyZENoYXJnZXMuZmluZEluZGV4KChpdGVtOmFueSkgPT4gaXRlbS5wYXltZW50SW50ZWdyYXRpb24gPT09IChkYXRhLmlzU3RyaXBlRW5hYmxlZD9cIlN0cmlwZVwiOlwiQmFzeXNcIikpXG4gICAgfVxuICB9XG5cbiAgc2V0UGF5bWVudERldGFpbHMoZGF0YTphbnkpe1xuICAgICAgdGhpcy5jb21wbGV0ZVBhZ2VEYXRhID0gZGF0YTtcbiAgfVxuXG4gIGdldEFwaVVybCh1cmw6YW55KXtcbiAgICBjb25zb2xlLmxvZygnYXBpVXJsJyx1cmwpO1xuICAgIFxuICAgICAgdGhpcy5hcGlVcmwgPSB1cmw7XG4gIH1cblxuICBnZXRTdG9yZWNhcmQoaW52b2ljZUFkZHJlc3NJZDogc3RyaW5nKSB7XG4gICAgdmFyIHVzZXJkYXRhID0gdGhpcy5odHRwLmdldCh0aGlzLmFwaVVybC5hcGlVcmwgKyBgaW52b2ljZWFkZHJlc3Nlcy8ke2ludm9pY2VBZGRyZXNzSWR9L3N0b3JlZGNhcmRzYCwgeyBoZWFkZXJzOiB7IFwidG9rZW5cIjogdGhpcy5hcGlVcmwudG9rZW4sIFwicG9ydGFsXCI6IHRoaXMuYXBpVXJsLnBvcnRhbCB9IH0pO1xuICAgIHJldHVybiB1c2VyZGF0YVxuXG4gIH1cbn1cbiJdfQ==