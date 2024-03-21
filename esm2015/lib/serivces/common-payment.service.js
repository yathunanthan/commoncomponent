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
}
CommonPaymentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
CommonPaymentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CommonPaymentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBheW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUFjL0IsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFabkMsZ0JBQVcsR0FBTSxFQUFFLENBQUM7UUFHWixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsYUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0IsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFN0Msc0JBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFeEMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBQyxHQUFPO1FBQy9CLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFBLENBQUMsQ0FBQSxRQUFRLENBQUEsQ0FBQyxDQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDakk7SUFDSCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsSUFBUTtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxVQUFjO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFPO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxnQkFBd0I7UUFDbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLGdCQUFnQixjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pMLE9BQU8sUUFBUSxDQUFBO0lBRWpCLENBQUM7O2tIQTdDVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblBheW1lbnRTZXJ2aWNlIHtcblxuICBjYXJkQ2hhcmdlczogYW55PVtdO1xuICBhcGlVcmw6YW55O1xuICBjb21wbGV0ZVBhZ2VEYXRhOmFueTtcbiAgcHJpdmF0ZSB1c2VyVXJsID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgdXNlclVybCQgPSB0aGlzLnVzZXJVcmwuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBwYXltZW50RGV0YWlscyA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHBheW1lbnREZXRhaWxzJCA9IHRoaXMucGF5bWVudERldGFpbHMuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBwYXltZW50U3RvcmVkQ2FyZCA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIHBheW1lbnRTdG9yZWRDYXJkJCA9IHRoaXMucGF5bWVudFN0b3JlZENhcmQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxuXG4gIGdldENvdW50cnlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsYClcbiAgfVxuXG4gIHNldFVzZXJSZXNwb25zZShkYXRhOiBhbnksa2V5OmFueSl7XG4gICAgaWYoZGF0YS5jYXJkQ2hhcmdlcyl7XG4gICAgICB0aGlzLmNhcmRDaGFyZ2VzID0gZGF0YS5jYXJkQ2hhcmdlcy5maW5kSW5kZXgoKGl0ZW06YW55KSA9PiBpdGVtLnBheW1lbnRJbnRlZ3JhdGlvbiA9PT0gKGRhdGEuaXNTdHJpcGVFbmFibGVkP1wiU3RyaXBlXCI6XCJCYXN5c1wiKSlcbiAgICB9XG4gIH1cblxuICBzZXRQYXltZW50RGV0YWlscyhkYXRhOmFueSl7XG4gICAgICB0aGlzLmNvbXBsZXRlUGFnZURhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5wYXltZW50RGV0YWlscy5uZXh0KGRhdGEpO1xuICB9XG5cbiAgc2V0UGF5bWVudFN0b3JlZENhcmQoc3RvcmVkQ2FyZDphbnkpe1xuICAgIHRoaXMucGF5bWVudFN0b3JlZENhcmQubmV4dChzdG9yZWRDYXJkKTtcbiAgfVxuXG4gIGdldEFwaVVybCh1cmw6YW55KXtcbiAgICBjb25zb2xlLmxvZygnYXBpVXJsJyx1cmwpO1xuICAgICAgdGhpcy51c2VyVXJsLm5leHQodXJsKTtcbiAgICAgIHRoaXMuYXBpVXJsID0gdXJsO1xuICB9XG5cbiAgZ2V0U3RvcmVjYXJkKGludm9pY2VBZGRyZXNzSWQ6IHN0cmluZykge1xuICAgIHZhciB1c2VyZGF0YSA9IHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVcmwuYXBpVXJsICsgYGludm9pY2VhZGRyZXNzZXMvJHtpbnZvaWNlQWRkcmVzc0lkfS9zdG9yZWRjYXJkc2AsIHsgaGVhZGVyczogeyBcInRva2VuXCI6IHRoaXMuYXBpVXJsLnRva2VuLCBcInBvcnRhbFwiOiB0aGlzLmFwaVVybC5wb3J0YWwgfSB9KTtcbiAgICByZXR1cm4gdXNlcmRhdGFcblxuICB9XG59XG4iXX0=