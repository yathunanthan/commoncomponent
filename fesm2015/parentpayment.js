import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ParentpaymentService {
    constructor() { }
}
ParentpaymentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ParentpaymentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ChildpaymentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChildpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChildpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ChildpaymentComponent, selector: "lib-childpayment", ngImport: i0, template: "<p>childpayment works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ChildpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-childpayment',
                    templateUrl: './childpayment.component.html',
                    styleUrls: ['./childpayment.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ParentpaymentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentpaymentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ParentpaymentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", ngImport: i0, template: "<lib-childpayment></lib-childpayment>", styles: [""], components: [{ type: ChildpaymentComponent, selector: "lib-childpayment" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-parentpayment',
                    templateUrl: './parentpayment.component.html',
                    styleUrls: ['./parentpayment.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class ParentpaymentModule {
}
ParentpaymentModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ParentpaymentModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, declarations: [ParentpaymentComponent,
        ChildpaymentComponent], exports: [ParentpaymentComponent] });
ParentpaymentModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: ParentpaymentModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentpaymentComponent,
                        ChildpaymentComponent,
                    ],
                    imports: [],
                    exports: [
                        ParentpaymentComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of parentpayment
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChildpaymentComponent, ParentpaymentComponent, ParentpaymentModule, ParentpaymentService };
//# sourceMappingURL=parentpayment.js.map
