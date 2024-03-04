import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'ngx-card';
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
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CommonModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule,
            CardModule
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
                        HttpClientModule,
                        ReactiveFormsModule,
                        FormsModule,
                        CardModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXRDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDOztBQXdCcEgsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQW5CNUIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsMkJBQTJCLGFBRzNCLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxVQUFVLGFBTVYsc0JBQXNCO2tIQUdiLG1CQUFtQixZQWRyQjtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxVQUFVO1NBQ1g7NEZBUVUsbUJBQW1CO2tCQXJCL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsV0FBVzt3QkFDWCxVQUFVO3FCQUNYO29CQUNELE9BQU8sRUFBQzt3QkFDTixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSxDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGxvY2FsZUZyIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2ZyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FyZE1vZHVsZSB9IGZyb20gJ25neC1jYXJkJztcbmltcG9ydCB7IENyZWRpdENhcmREaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYy1saWJyYXJ5JztcblxuXG5pbXBvcnQgeyBQYXJlbnRwYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJlbnRwYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudEJhbmtEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1iYW5rLWRldGFpbHMvcGF5bWVudC1iYW5rLWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDYXJkRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzL3BheW1lbnQtY2FyZC1kZXRhaWxzLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudCxcbiAgICBQYXltZW50RGV0YWlsc0NvbXBvbmVudCxcbiAgICBQYXltZW50QmFua0RldGFpbHNDb21wb25lbnQsXG4gICAgUGF5bWVudENhcmREZXRhaWxzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENhcmRNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=