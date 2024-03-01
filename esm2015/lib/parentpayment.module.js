import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentBankDetailsComponent } from './payment-details/payment-bank-details/payment-bank-details.component';
import { PaymentCardDetailsComponent } from './payment-details/payment-card-details/payment-card-details.component';
import * as i0 from "@angular/core";
export class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        PaymentDetailsComponent,
        PaymentBankDetailsComponent,
        PaymentCardDetailsComponent], imports: [CommonModule,
        HttpClientModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CommonModule,
            HttpClientModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        PaymentDetailsComponent,
                        PaymentBankDetailsComponent,
                        PaymentCardDetailsComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDOztBQXFCcEgsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQWhCNUIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsMkJBQTJCLGFBRzNCLFlBQVk7UUFDWixnQkFBZ0IsYUFNaEIsc0JBQXNCO2tIQUdiLG1CQUFtQixZQVhyQjtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7U0FDakI7NEZBUVUsbUJBQW1CO2tCQWxCL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBQzt3QkFDTixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSxDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGxvY2FsZUZyIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2ZyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cblxuaW1wb3J0IHsgUGFyZW50cGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vcGFyZW50cGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBhcmVudHBheW1lbnRDb21wb25lbnQsXG4gICAgUGF5bWVudERldGFpbHNDb21wb25lbnQsXG4gICAgUGF5bWVudEJhbmtEZXRhaWxzQ29tcG9uZW50LFxuICAgIFBheW1lbnRDYXJkRGV0YWlsc0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=