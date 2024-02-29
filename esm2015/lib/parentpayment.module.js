import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { CardModule } from 'ngx-card';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentSectionsComponent } from './payment-sections/payment-sections.component';
import { PaymentCardComponent } from './payment-sections/payment-card/payment-card.component';
import { PaymentBankComponent } from './payment-sections/payment-bank/payment-bank.component';
import { PaymentApplepayComponent } from './payment-sections/payment-applepay/payment-applepay.component';
import * as i0 from "@angular/core";
export class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        PaymentSectionsComponent,
        PaymentCardComponent,
        PaymentBankComponent,
        PaymentApplepayComponent], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        PaymentSectionsComponent,
                        PaymentCardComponent,
                        PaymentBankComponent,
                        PaymentApplepayComponent
                    ],
                    imports: [],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRSx5Q0FBeUM7QUFHekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7O0FBbUIxRyxNQUFNLE9BQU8sbUJBQW1COztpSEFBbkIsbUJBQW1CO2tIQUFuQixtQkFBbUIsaUJBZjVCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix3QkFBd0IsYUFReEIsc0JBQXNCO2tIQUdiLG1CQUFtQixZQVRyQixFQUNSOzRGQVFVLG1CQUFtQjtrQkFqQi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuLy8gaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIGltcG9ydCBsb2NhbGVGciBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9mcic7XG4vLyBpbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICduZ3gtY2FyZCc7XG5cblxuaW1wb3J0IHsgUGFyZW50cGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vcGFyZW50cGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudFNlY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtY2FyZC9wYXltZW50LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRCYW5rQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtYmFuay9wYXltZW50LWJhbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRBcHBsZXBheUNvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LWFwcGxlcGF5L3BheW1lbnQtYXBwbGVwYXkuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudCxcbiAgICBQYXltZW50U2VjdGlvbnNDb21wb25lbnQsXG4gICAgUGF5bWVudENhcmRDb21wb25lbnQsXG4gICAgUGF5bWVudEJhbmtDb21wb25lbnQsXG4gICAgUGF5bWVudEFwcGxlcGF5Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=