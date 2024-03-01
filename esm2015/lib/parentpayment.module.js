import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { CardModule } from 'ngx-card';
import { ParentpaymentComponent } from './parentpayment.component';
import { PaymentSectionsComponent } from './payment-sections/payment-sections.component';
import { PaymentCardComponent } from './payment-sections/payment-card/payment-card.component';
import { PaymentBankComponent } from './payment-sections/payment-bank/payment-bank.component';
import { PaymentApplepayComponent } from './payment-sections/payment-applepay/payment-applepay.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentBankDetailsComponent } from './payment-details/payment-bank-details/payment-bank-details.component';
import { PaymentCardDetailsComponent } from './payment-details/payment-card-details/payment-card-details.component';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
registerLocaleData(localeFr, 'fr');
export function httpTranslateLoader(http) {
    return new TranslateHttpLoader(http, '');
}
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
        PaymentCardDetailsComponent], imports: [CardModule, i1.TranslateModule, CreditCardDirectivesModule], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[
            CardModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: httpTranslateLoader,
                    deps: [HttpClient]
                }
            }),
            CreditCardDirectivesModule
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
                        CardModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: httpTranslateLoader,
                                deps: [HttpClient]
                            }
                        }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50cGF5bWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9wYXJlbnRwYXltZW50L3NyYy9saWIvcGFyZW50cGF5bWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQW9CLE1BQU0sc0JBQXNCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd0QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUMxRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7O0FBRXBILGtCQUFrQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsSUFBZ0I7SUFDbEQsT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBK0JELE1BQU0sT0FBTyxtQkFBbUI7O2lIQUFuQixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkEzQjVCLHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtRQUMzQiwyQkFBMkIsYUFHM0IsVUFBVSxzQkFRViwwQkFBMEIsYUFNMUIsc0JBQXNCO2tIQUdiLG1CQUFtQixZQWxCckI7WUFDUCxVQUFVO1lBQ1YsZUFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDdEIsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsbUJBQW1CO29CQUMvQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7aUJBQ25CO2FBQ0YsQ0FBQztZQUNGLDBCQUEwQjtTQUMzQjs0RkFRVSxtQkFBbUI7a0JBN0IvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFVBQVU7d0JBQ1YsZUFBZSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixVQUFVLEVBQUUsbUJBQW1CO2dDQUMvQixJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkJBQ25CO3lCQUNGLENBQUM7d0JBQ0YsMEJBQTBCO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUM7d0JBQ04sc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCBsb2NhbGVGciBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9mcic7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENyZWRpdENhcmREaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYy1saWJyYXJ5JztcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICduZ3gtY2FyZCc7XG5cblxuaW1wb3J0IHsgUGFyZW50cGF5bWVudENvbXBvbmVudCB9IGZyb20gJy4vcGFyZW50cGF5bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudFNlY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtc2VjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtY2FyZC9wYXltZW50LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRCYW5rQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LXNlY3Rpb25zL3BheW1lbnQtYmFuay9wYXltZW50LWJhbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnRBcHBsZXBheUNvbXBvbmVudCB9IGZyb20gJy4vcGF5bWVudC1zZWN0aW9ucy9wYXltZW50LWFwcGxlcGF5L3BheW1lbnQtYXBwbGVwYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXltZW50QmFua0RldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWJhbmstZGV0YWlscy9wYXltZW50LWJhbmstZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGF5bWVudENhcmREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1jYXJkLWRldGFpbHMvcGF5bWVudC1jYXJkLWRldGFpbHMuY29tcG9uZW50JztcblxucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZUZyLCAnZnInKTtcbmV4cG9ydCBmdW5jdGlvbiBodHRwVHJhbnNsYXRlTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICcnKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudCxcbiAgICBQYXltZW50U2VjdGlvbnNDb21wb25lbnQsXG4gICAgUGF5bWVudENhcmRDb21wb25lbnQsXG4gICAgUGF5bWVudEJhbmtDb21wb25lbnQsXG4gICAgUGF5bWVudEFwcGxlcGF5Q29tcG9uZW50LFxuICAgIFBheW1lbnREZXRhaWxzQ29tcG9uZW50LFxuICAgIFBheW1lbnRCYW5rRGV0YWlsc0NvbXBvbmVudCxcbiAgICBQYXltZW50Q2FyZERldGFpbHNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENhcmRNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogaHR0cFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdXG4gICAgICB9XG4gICAgfSksXG4gICAgQ3JlZGl0Q2FyZERpcmVjdGl2ZXNNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczpbXG4gICAgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUGFyZW50cGF5bWVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudHBheW1lbnRNb2R1bGUgeyB9XG4iXX0=