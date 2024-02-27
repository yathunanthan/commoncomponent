(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('parentpayment', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.parentpayment = {}, global.ng.core));
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

    var ParentpaymentService = /** @class */ (function () {
        function ParentpaymentService() {
        }
        return ParentpaymentService;
    }());
    ParentpaymentService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ParentpaymentService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var ParentpaymentComponent = /** @class */ (function () {
        function ParentpaymentComponent() {
        }
        ParentpaymentComponent.prototype.ngOnInit = function () {
        };
        return ParentpaymentComponent;
    }());
    ParentpaymentComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ParentpaymentComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: ParentpaymentComponent, selector: "lib-parentpayment", ngImport: i0__namespace, template: "\n    <p>\n      parentpayment works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-parentpayment',
                        template: "\n    <p>\n      parentpayment works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ParentpaymentModule = /** @class */ (function () {
        function ParentpaymentModule() {
        }
        return ParentpaymentModule;
    }());
    ParentpaymentModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    ParentpaymentModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, declarations: [ParentpaymentComponent], exports: [ParentpaymentComponent] });
    ParentpaymentModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: ParentpaymentModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            ParentpaymentComponent
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

    exports.ParentpaymentComponent = ParentpaymentComponent;
    exports.ParentpaymentModule = ParentpaymentModule;
    exports.ParentpaymentService = ParentpaymentService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=parentpayment.umd.js.map
