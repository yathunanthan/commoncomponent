import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyLibComponent, selector: "lib-my-lib", ngImport: i0, template: `
    <p>
      my-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-lib',
                    template: `
    <p>
      my-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class MyComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyComponentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: MyComponentComponent, selector: "lib-my-component", ngImport: i0, template: "<p>my-component works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyComponentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-component',
                    templateUrl: './my-component.component.html',
                    styleUrls: ['./my-component.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, declarations: [MyLibComponent,
        MyComponentComponent], exports: [MyLibComponent] });
MyLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLibComponent,
                        MyComponentComponent
                    ],
                    imports: [],
                    exports: [
                        MyLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyComponentComponent, MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
