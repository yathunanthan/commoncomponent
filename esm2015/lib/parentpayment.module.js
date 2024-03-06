import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardModule } from 'ngx-card';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentBankDetailsComponent } from './payment-details/payment-bank-details/payment-bank-details.component';
import { PaymentCardDetailsComponent } from './payment-details/payment-card-details/payment-card-details.component';
import { PaymentCompleteComponent } from './payment-complete/payment-complete.component';
import * as i0 from "@angular/core";
export class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        PaymentDetailsComponent,
        PaymentBankDetailsComponent,
        PaymentCardDetailsComponent,
        PaymentCompleteComponent], imports: [CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        CardModule,
        CreditCardDirectivesModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CommonModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule,
            CardModule,
            CreditCardDirectivesModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        PaymentDetailsComponent,
                        PaymentBankDetailsComponent,
                        PaymentCardDetailsComponent,
                        PaymentCompleteComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ReactiveFormsModule,
                        FormsModule,
                        CardModule,
                        CreditCardDirectivesModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQTBCekYsTUFBTSxPQUFPLG1CQUFtQjs7aUhBQW5CLG1CQUFtQjtrSEFBbkIsbUJBQW1CLGlCQXJCNUIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLHdCQUF3QixhQUd4QixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsVUFBVTtRQUNWLDBCQUEwQixhQU0xQixzQkFBc0I7a0hBR2IsbUJBQW1CLFlBZnJCO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFVBQVU7WUFDViwwQkFBMEI7U0FDM0I7NEZBUVUsbUJBQW1CO2tCQXZCL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjt3QkFDM0IsMkJBQTJCO3dCQUMzQix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLFVBQVU7d0JBQ1YsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckxvY2FsZURhdGEsQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBsb2NhbGVGciBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9mcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSxGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICduZ3gtY2FyZCc7XG5pbXBvcnQgeyBDcmVkaXRDYXJkRGlyZWN0aXZlc01vZHVsZSB9IGZyb20gJ2FuZ3VsYXItY2MtbGlicmFyeSc7XG5cblxuaW1wb3J0IHsgUGFyZW50cGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vcGFyZW50cGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzL3BheW1lbnQtYmFuay1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy9wYXltZW50LWNhcmQtZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWNvbXBsZXRlL3BheW1lbnQtY29tcGxldGUuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQYXJlbnRwYXltZW50Q29tcG9uZW50LFxuICAgIFBheW1lbnREZXRhaWxzQ29tcG9uZW50LFxuICAgIFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCxcbiAgICBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnQsXG4gICAgUGF5bWVudENvbXBsZXRlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIENhcmRNb2R1bGUsXG4gICAgQ3JlZGl0Q2FyZERpcmVjdGl2ZXNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=