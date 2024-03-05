import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class CommonPaymentService {
    private http;
    cardCharges: any;
    apiUrl: any;
    constructor(http: HttpClient);
    getCountryName(): import("rxjs").Observable<Object>;
    setUserResponse(data: any, key: any): void;
    getApiUrl(url: any): void;
    getStorecard(invoiceAddressId: string): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CommonPaymentService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CommonPaymentService>;
}
