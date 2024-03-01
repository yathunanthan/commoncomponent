import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentSectionsComponent } from './payment-sections/payment-sections.component';
import { PaymentCardComponent } from './payment-sections/payment-card/payment-card.component';
import { PaymentBankComponent } from './payment-sections/payment-bank/payment-bank.component';
import { PaymentApplepayComponent } from './payment-sections/payment-applepay/payment-applepay.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentBankDetailsComponent } from './payment-details/payment-bank-details/payment-bank-details.component';
import { PaymentCardDetailsComponent } from './payment-details/payment-card-details/payment-card-details.component';
import * as i0 from "@angular/core";
export class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        PaymentSectionsComponent,
        PaymentCardComponent,
        PaymentBankComponent,
        PaymentApplepayComponent,
        PaymentDetailsComponent,
        PaymentBankDetailsComponent,
        PaymentCardDetailsComponent], imports: [CommonModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        PaymentSectionsComponent,
                        PaymentCardComponent,
                        PaymentBankComponent,
                        PaymentApplepayComponent,
                        PaymentDetailsComponent,
                        PaymentBankDetailsComponent,
                        PaymentCardDetailsComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBS2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDOztBQXdCcEgsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQW5CNUIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLDJCQUEyQixhQUczQixZQUFZLGFBTVosc0JBQXNCO2tIQUdiLG1CQUFtQixZQVZyQjtZQUNQLFlBQVk7U0FDYjs0RkFRVSxtQkFBbUI7a0JBckIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFDO3dCQUNOLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjtxQkFDdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhLENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgbG9jYWxlRnIgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZnInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuXG5pbXBvcnQgeyBQYXJlbnRwYXltZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYXJlbnRwYXltZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50U2VjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtc2VjdGlvbnMvcGF5bWVudC1zZWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENhcmRDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtc2VjdGlvbnMvcGF5bWVudC1jYXJkL3BheW1lbnQtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudEJhbmtDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtc2VjdGlvbnMvcGF5bWVudC1iYW5rL3BheW1lbnQtYmFuay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudEFwcGxlcGF5Q29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtYXBwbGVwYXkvcGF5bWVudC1hcHBsZXBheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBhcmVudHBheW1lbnRDb21wb25lbnQsXG4gICAgUGF5bWVudFNlY3Rpb25zQ29tcG9uZW50LFxuICAgIFBheW1lbnRDYXJkQ29tcG9uZW50LFxuICAgIFBheW1lbnRCYW5rQ29tcG9uZW50LFxuICAgIFBheW1lbnRBcHBsZXBheUNvbXBvbmVudCxcbiAgICBQYXltZW50RGV0YWlsc0NvbXBvbmVudCxcbiAgICBQYXltZW50QmFua0RldGFpbHNDb21wb25lbnQsXG4gICAgUGF5bWVudENhcmREZXRhaWxzQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=