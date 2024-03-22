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
        this.paymentStoredCard = new BehaviorSubject(null);
        this.paymentStoredCard$ = this.paymentStoredCard.asObservable();
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
    setPaymentStoredCard(storedCard) {
        this.paymentStoredCard.next(storedCard);
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
    roundAmount(amount) {
        return Math.round((amount + Number.EPSILON) * 100) / 100;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUFjL0IsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFabkMsZ0JBQVcsR0FBTSxFQUFFLENBQUM7UUFHWixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0IsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0Msc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFeEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBQyxHQUFPO1FBQy9CLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUEsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDakk7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBUTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxVQUFjO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFPO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxnQkFBd0I7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLGdCQUFnQixjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pMLE9BQU8sUUFBUSxDQUFBO0lBRWpCLENBQUM7SUFDRCxXQUFXLENBQUMsTUFBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDOztrSEFoRFksb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs0RkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25QYXltZW50U2VydmljZSB7XG5cbiAgY2FyZENoYXJnZXM6IGFueT1bXTtcbiAgYXBpVXJsOmFueTtcbiAgY29tcGxldGVQYWdlRGF0YTphbnk7XG4gIHByaXZhdGUgdXNlclVybCA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHVzZXJVcmwkID0gdGhpcy51c2VyVXJsLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgcGF5bWVudERldGFpbHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwYXltZW50RGV0YWlscyQgPSB0aGlzLnBheW1lbnREZXRhaWxzLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgcGF5bWVudFN0b3JlZENhcmQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwYXltZW50U3RvcmVkQ2FyZCQgPSB0aGlzLnBheW1lbnRTdG9yZWRDYXJkLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBnZXRDb3VudHJ5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FsbGApXG4gIH1cblxuICBzZXRVc2VyUmVzcG9uc2UoZGF0YTogYW55LGtleTphbnkpe1xuICAgIGlmKGRhdGEuY2FyZENoYXJnZXMpe1xuICAgICAgdGhpcy5jYXJkQ2hhcmdlcyA9IGRhdGEuY2FyZENoYXJnZXMuZmluZEluZGV4KChpdGVtOmFueSkgPT4gaXRlbS5wYXltZW50SW50ZWdyYXRpb24gPT09IChkYXRhLmlzU3RyaXBlRW5hYmxlZD9cIlN0cmlwZVwiOlwiQmFzeXNcIikpXG4gICAgfVxuICB9XG5cbiAgc2V0UGF5bWVudERldGFpbHMoZGF0YTphbnkpe1xuICAgICAgdGhpcy5jb21wbGV0ZVBhZ2VEYXRhID0gZGF0YTtcbiAgICAgIHRoaXMucGF5bWVudERldGFpbHMubmV4dChkYXRhKTtcbiAgfVxuXG4gIHNldFBheW1lbnRTdG9yZWRDYXJkKHN0b3JlZENhcmQ6YW55KXtcbiAgICB0aGlzLnBheW1lbnRTdG9yZWRDYXJkLm5leHQoc3RvcmVkQ2FyZCk7XG4gIH1cblxuICBnZXRBcGlVcmwodXJsOmFueSl7XG4gICAgY29uc29sZS5sb2coJ2FwaVVybCcsdXJsKTtcbiAgICAgIHRoaXMudXNlclVybC5uZXh0KHVybCk7XG4gICAgICB0aGlzLmFwaVVybCA9IHVybDtcbiAgfVxuXG4gIGdldFN0b3JlY2FyZChpbnZvaWNlQWRkcmVzc0lkOiBzdHJpbmcpIHtcbiAgICB2YXIgdXNlcmRhdGEgPSB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVXJsLmFwaVVybCArIGBpbnZvaWNlYWRkcmVzc2VzLyR7aW52b2ljZUFkZHJlc3NJZH0vc3RvcmVkY2FyZHNgLCB7IGhlYWRlcnM6IHsgXCJ0b2tlblwiOiB0aGlzLmFwaVVybC50b2tlbiwgXCJwb3J0YWxcIjogdGhpcy5hcGlVcmwucG9ydGFsIH0gfSk7XG4gICAgcmV0dXJuIHVzZXJkYXRhXG5cbiAgfVxuICByb3VuZEFtb3VudChhbW91bnQ6bnVtYmVyKXtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoYW1vdW50ICsgTnVtYmVyLkVQU0lMT04pICogMTAwKSAvIDEwMDtcbn1cbn1cbiJdfQ==