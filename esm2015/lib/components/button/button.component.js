import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wYXltZW50LXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wYXltZW50LXVpL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU96RCxNQUFNLE9BQU8sZUFBZTtJQUkxQjtRQUZTLFVBQUssR0FBRyxRQUFRLENBQUM7SUFFVixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs2R0FQVSxlQUFlO2lHQUFmLGVBQWUsa0ZDUDVCLDZDQUF5Qzs0RkRPNUIsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7MEVBR1UsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BheW1lbnQtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2J1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsYWJlbCA9ICdBY2NlcHQnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiPnt7bGFiZWx9fTwvYnV0dG9uPiJdfQ==