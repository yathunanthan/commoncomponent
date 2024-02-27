(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-payment-ui', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-payment-ui"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var NgxPaymentUiService = /** @class */ (function () {
        function NgxPaymentUiService() {
        }
        return NgxPaymentUiService;
    }());
    NgxPaymentUiService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NgxPaymentUiService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NgxPaymentUiComponent = /** @class */ (function () {
        function NgxPaymentUiComponent() {
        }
        NgxPaymentUiComponent.prototype.ngOnInit = function () {
        };
        return NgxPaymentUiComponent;
    }());
    NgxPaymentUiComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgxPaymentUiComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: NgxPaymentUiComponent, selector: "payment-ngx-payment-ui", ngImport: i0__namespace, template: "\n    <p>\n      ngx-payment-ui works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'payment-ngx-payment-ui',
                        template: "\n    <p>\n      ngx-payment-ui works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
            this.label = 'Accept';
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ButtonComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ButtonComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ButtonComponent, selector: "payment-button", inputs: { label: "label" }, ngImport: i0__namespace, template: "<button class=\"button\">{{label}}</button>", styles: [".button{background-color:#0a0a23;color:#fff;box-sizing:border-box;display:inline-block;border:0;border-radius:10px;padding:15px;min-height:30px;min-width:120px;opacity:.8;cursor:pointer;text-align:center;font-size:1rem;line-height:1.2;transition:opacity .3s ease}.button:hover{opacity:1}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ButtonComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'payment-button',
                        templateUrl: './button.component.html',
                        styleUrls: ['./button.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                    type: i0.Input
                }] } });

    var NgxPaymentUiModule = /** @class */ (function () {
        function NgxPaymentUiModule() {
        }
        return NgxPaymentUiModule;
    }());
    NgxPaymentUiModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgxPaymentUiModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiModule, declarations: [NgxPaymentUiComponent,
            ButtonComponent], exports: [NgxPaymentUiComponent,
            ButtonComponent] });
    NgxPaymentUiModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: NgxPaymentUiModule, decorators: [{
                type: i0.NgModule,
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

    exports.ButtonComponent = ButtonComponent;
    exports.NgxPaymentUiComponent = NgxPaymentUiComponent;
    exports.NgxPaymentUiModule = NgxPaymentUiModule;
    exports.NgxPaymentUiService = NgxPaymentUiService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-payment-ui.umd.js.map
