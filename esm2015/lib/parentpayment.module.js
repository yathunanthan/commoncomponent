import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
        FormsModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CommonModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule
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
                        FormsModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sRUFBYyxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBQyxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7QUF1QnBILE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFsQjVCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLDJCQUEyQixhQUczQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixXQUFXLGFBTVgsc0JBQXNCO2tIQUdiLG1CQUFtQixZQWJyQjtZQUNQLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFdBQVc7U0FDWjs0RkFRVSxtQkFBbUI7a0JBcEIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsMkJBQTJCO3dCQUMzQiwyQkFBMkI7cUJBQzVCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBQzt3QkFDTixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyTG9jYWxlRGF0YSxDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IGxvY2FsZUZyIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2ZyJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbmltcG9ydCB7IFBhcmVudHBheW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3BhcmVudHBheW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50QmFua0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWJhbmstZGV0YWlscy9wYXltZW50LWJhbmstZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENhcmREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1jYXJkLWRldGFpbHMvcGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBQYXJlbnRwYXltZW50Q29tcG9uZW50LFxuICAgIFBheW1lbnREZXRhaWxzQ29tcG9uZW50LFxuICAgIFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCxcbiAgICBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=