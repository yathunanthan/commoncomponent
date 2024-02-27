import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';

class NgxPaymentUiService {
    constructor() { }
}
NgxPaymentUiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxPaymentUiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxPaymentUiComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxPaymentUiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxPaymentUiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: NgxPaymentUiComponent, selector: "payment-ngx-payment-ui", ngImport: i0, template: `
    <p>
      ngx-payment-ui works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'payment-ngx-payment-ui',
                    template: `
    <p>
      ngx-payment-ui works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ButtonComponent {
    constructor() {
        this.label = 'Accept';
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ButtonComponent, selector: "payment-button", inputs: { label: "label" }, ngImport: i0, template: "<button class=\"button\">{{label}}</button>", styles: [".button{background-color:#0a0a23;color:#fff;box-sizing:border-box;display:inline-block;border:0;border-radius:10px;padding:15px;min-height:30px;min-width:120px;opacity:.8;cursor:pointer;text-align:center;font-size:1rem;line-height:1.2;transition:opacity .3s ease}.button:hover{opacity:1}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'payment-button',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }] } });

class NgxPaymentUiModule {
}
NgxPaymentUiModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxPaymentUiModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiModule, declarations: [NgxPaymentUiComponent,
        ButtonComponent], exports: [NgxPaymentUiComponent,
        ButtonComponent] });
NgxPaymentUiModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: NgxPaymentUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxPaymentUiComponent,
                        ButtonComponent
                    ],
                    imports: [],
                    exports: [
                        NgxPaymentUiComponent,
                        ButtonComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-payment-ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, NgxPaymentUiComponent, NgxPaymentUiModule, NgxPaymentUiService };
//# sourceMappingURL=ngx-payment-ui.js.map
