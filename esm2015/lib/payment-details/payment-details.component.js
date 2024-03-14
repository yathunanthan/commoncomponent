import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../serivces/common-payment.service";
import * as i2 from "./payment-bank-details/payment-bank-details.component";
import * as i3 from "./payment-card-details/payment-card-details.component";
import * as i4 from "../payment-complete/payment-complete.component";
import * as i5 from "@angular/common";
export class PaymentDetailsComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.paymentMethodType = 'Bank transfer';
        this.devicePayment = false;
        this.testResult = "testResult";
        this.total = 0;
        this.paymentMethodAllowed = 3;
        this.paymentMethod = 1;
        this.paymentCompleted = true;
        this.canDoWalletPay = false;
        this.walletPayLogoName = '';
        this.walletPayDesc = '';
        this.emitter = new EventEmitter();
        this.payEmitter = new EventEmitter();
    }
    valid(paymentEnable) {
        this.paymentEnable = paymentEnable;
        this.payEmitter.emit(paymentEnable);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e;
        this.commonService.userUrl$.subscribe((res) => {
            this.portalName = res === null || res === void 0 ? void 0 : res.portal;
        });
        this.commonService.paymentDetails$.subscribe((response) => {
            this.genericPaymentDetails = response;
        });
        console.log('portalname', this.portalName);
        console.log('statemtn', this.genericPaymentDetails);
        if (((_a = this.commonService.apiUrl) === null || _a === void 0 ? void 0 : _a.portal) == 'InvoicePortal') {
            this.amountToBePaid = this.genericPaymentDetails.paymentDetails.amountToBePaid;
            this.pendingAmount = this.genericPaymentDetails.paymentDetails.pendingAmount;
            this.paymentCompleted = (this.amountToBePaid - this.genericPaymentDetails.paymentDetails.pendingAmount) < 1;
            this.paymentMethod = this.genericPaymentDetails.isGocardlessEnabled && this.genericPaymentDetails.customerDetails.postcode ? 1 : (this.genericPaymentDetails.cardIntegration && this.genericPaymentDetails.cardCharges != -1 && (this.genericPaymentDetails.isBasysEnabled || this.genericPaymentDetails.isPayFortEnabled || this.genericPaymentDetails.isStripeEnabled || this.genericPaymentDetails.isWorldPayEnbled) && (!this.settings.cardEnable || this.settings.cardEnable == 'Always' || this.genericPaymentDetails.invoiceDetails.total + this.genericPaymentDetails.invoiceDetails.taxes + this.genericPaymentDetails.invoiceDetails.total * (this.tip / 100) + (this.genericPaymentDetails.cardCharges[this.genericPaymentDetails.cardCharges].charge / 100) * (this.genericPaymentDetails.invoiceDetails.total + this.genericPaymentDetails.invoiceDetails.taxes + this.genericPaymentDetails.invoiceDetails.total * (this.tip / 100)) <= this.settings.creditDebitCard)) ? 2 : 0;
            this.clientTelephone = this.genericPaymentDetails.clientDetails.countrycode + this.genericPaymentDetails.clientDetails.telephone;
        }
        else if (((_b = this.commonService.apiUrl) === null || _b === void 0 ? void 0 : _b.portal) == 'StatementPortal') {
            this.paymentMethod = this.genericPaymentDetails.isGocardlessEnabled && this.genericPaymentDetails.customerDetails.postcode ? 1 : (this.genericPaymentDetails.cardIntegration && (this.genericPaymentDetails.isStripeEnabled || this.genericPaymentDetails.isWorldPayEnbled || this.genericPaymentDetails.isPayFort) && (this.settings.cardEnable == undefined || (this.settings.cardEnable != 'No' && (this.settings.cardEnable == 'Always' || this.total <= this.settings.creditDebitCard)))) ? 2 : 0;
            this.clientTelephone = this.genericPaymentDetails.client_telephone;
        }
        this.isGocardlessEnabled = this.genericPaymentDetails.isGocardlessEnabled;
        this.postCode = ((_d = (_c = this.genericPaymentDetails) === null || _c === void 0 ? void 0 : _c.customerDetails) === null || _d === void 0 ? void 0 : _d.postcode) ? (_e = this.genericPaymentDetails) === null || _e === void 0 ? void 0 : _e.customerDetails.postcode : this.genericPaymentDetails['postcode'];
        this.commonService.setUserResponse(this.genericPaymentDetails, '');
        if ("settings" in this.genericPaymentDetails) {
            this.settings = this.genericPaymentDetails.settings.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
        }
        setTimeout(() => {
            this.paymentSelected(this.paymentMethod);
        }, 100);
        this.paymentMethodType = this.settings.countryRegion == 6 ? 'ACH' : 'Bank transfer';
        this.emitter.emit(this.paymentMethodType);
    }
    paymentSelected(value) {
        var temp = this.paymentMethod != value;
        if (value > 0) {
            this.paymentMethod = value;
            this.emitter.emit(value);
            var check = document.getElementById(value);
            if (check) {
                check.checked = true;
            }
            if (temp) {
                this.payEmitter.emit(true);
            }
        }
    }
}
PaymentDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentDetailsComponent, deps: [{ token: i1.CommonPaymentService }], target: i0.ɵɵFactoryTarget.Component });
PaymentDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: PaymentDetailsComponent, selector: "lib-payment-details", inputs: { genericPaymentDetails: "genericPaymentDetails", tip: "tip", total: "total" }, outputs: { emitter: "emitter", payEmitter: "payEmitter" }, ngImport: i0, template: "<div class=\"row pay-body\">\n    <div class=\"pay-title-box\">\n        <div class=\"pay-title\">Payment details</div>\n        <div class=\"pay-details\">\n            <span *ngIf=\"portalName == 'InvoicePortal' && (amountToBePaid - (pendingAmount ? pendingAmount : 0)) >0\">Please fill the information below about your payment method</span>\n            <span *ngIf=\"portalName == 'StatementPortal'\">Please fill the information below about your payment method</span>\n        </div>\n        <div class=\"pay-details\" *ngIf=\"portalName == 'InvoicePortal' && (amountToBePaid - (pendingAmount ? pendingAmount : 0)) <= 0\">\n            Payment status and summary information</div>\n    </div>\n    <div class=\"pay-selection\" *ngIf=\"(amountToBePaid - pendingAmount) >0 || portalName == 'StatementPortal'\">\n\n        <div class=\"col pay-width\">Pay with</div>\n        <div class=\"row width-q\">\n            <div *ngIf=\"isGocardlessEnabled && postCode\" class=\"col pay-btn\" (click)=\"paymentSelected(1)\" [ngClass]=\"{'pay-btn-active' : paymentMethod == '1'}\"><input type=\"radio\" name=\"payWith\" id=\"1\"><span\n                    class=\"pay-btn-text\">{{paymentMethodType }}</span>\n                <img class=\"icon-align\" src=\"assets/icon/bank-transfer.svg\" alt=\"\">\n            </div>\n            <div class=\"col pay-btn\" (click)=\"paymentSelected(2)\" [ngClass]=\"{'pay-btn-active' : paymentMethod == '2'}\"><input type=\"radio\" name=\"payWith\" id=\"2\"><span\n                    class=\"pay-btn-text\">Debit or credit card</span>\n                    <svg width=\"20\" height=\"14\" viewBox=\"0 0 20 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14H17C17.7956 14 18.5587 13.6839 19.1213 13.1213C19.6839 12.5587 20 11.7956 20 11V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H9C9.26522 8 9.51957 8.10536 9.70711 8.29289C9.89464 8.48043 10 8.73478 10 9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10ZM15 10H13C12.7348 10 12.4804 9.89464 12.2929 9.70711C12.1054 9.51957 12 9.26522 12 9C12 8.73478 12.1054 8.48043 12.2929 8.29289C12.4804 8.10536 12.7348 8 13 8H15C15.2652 8 15.5196 8.10536 15.7071 8.29289C15.8946 8.48043 16 8.73478 16 9C16 9.26522 15.8946 9.51957 15.7071 9.70711C15.5196 9.89464 15.2652 10 15 10ZM18 4H2V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V4Z\" fill=\"#505B65\"/>\n                    </svg>\n                    </div>\n            <!-- <div *ngIf=\"userData.isStripeEnabled && userData.isWalletPayEnabled && canDoWalletPay\" class=\"col pay-btn\"\n                [ngClass]=\"{'pay-btn-active' : paymentMethod == '3'}\" (click)=\"paymentSelected(3)\"><input type=\"radio\"\n                    name=\"payWith\" id=\"3\"><span class=\"pay-btn-text\">{{ walletPayDesc }}</span><img\n                    class=\"icon-align\" src=\"\" alt=\"\">\n            </div> -->\n\n        </div>\n        <lib-payment-bank-details *ngIf=\"paymentMethod == '1' && isGocardlessEnabled && postCode\" [paymentTypeS]=\"paymentMethodType\" (payEmitter)=\"valid($event)\"\n            [paymentData]=\"genericPaymentDetails\"></lib-payment-bank-details>\n        <lib-payment-card-details *ngIf=\"(portalName == 'StatementPortal' && paymentMethod == '2') || (portalName == 'AcceptProposal' && paymentMethod == '2') || (portalName == 'InvoicePortal' && paymentMethod == '2' && genericPaymentDetails.cardIntegration && (genericPaymentDetails.isBasysEnabled || genericPaymentDetails.isPayFortEnabled || genericPaymentDetails.isStripeEnabled || genericPaymentDetails.isWorldPayEnbled )  && genericPaymentDetails.cardCharges.length != 0 &&  ( !settings.cardEnable || settings.cardEnable =='Always'|| genericPaymentDetails.invoiceDetails.total + genericPaymentDetails.invoiceDetails.taxes + genericPaymentDetails.invoiceDetails.total*(tip/100) <= settings.creditDebitCard))\" [cardPaymentData]=\"genericPaymentDetails\"\n            (payEmitter)=\"valid($event)\"></lib-payment-card-details>\n    </div>\n    <div class=\"(portalName == 'StatementPortal' || portalName == 'InvoicePortal') && paymentCompleted\" *ngIf=\"(amountToBePaid - pendingAmount)  <= 0\">\n        <lib-payment-complete [valid]=\"paymentCompleted\"\n            [completePageDetails]=\"genericPaymentDetails\"></lib-payment-complete>\n    </div>\n</div>\n<div class=\"row pay-body error-body\" *ngIf=\"paymentMethod == 0\">\n    <span *ngIf=\"settings.cardEnable =='Always' || total <= settings.creditDebitCard\" style=\"display: none\">\n        <span\n            *ngIf=\"paymentMethod != '0' ? '':paymentSelected((genericPaymentDetails.isGocardlessEnabled && genericPaymentDetails.customerDetails.postcode)?1:(genericPaymentDetails.cardIntegration && settings.cardEnable !='No' && (settings.cardEnable =='Always'|| total <= settings.creditDebitCard))?2:0)\"></span>\n    </span>\n    <div class=\"error-title\">\n        <div class=\"logo\"><img class=\"fa-check\" src=\"assets/icon/warning.svg\" alt=\"link-invalid\"></div>\n        <div>'We`re unable to process a payment. Please contact {{clientTelephone}}  for assistance'\n        </div>\n    </div>\n</div>", styles: [".pay-body{border:1px solid var(--primaryBorderColor);box-shadow:0 4px 8px #0000000a,0 0 2px #0000000f,0 0 1px #0000000a;border-radius:4px;margin:24px;overflow:hidden}.error-body{text-align:center;height:280px}.error-body .error-title{font-weight:700;font-size:14px;line-height:20px;color:#f2994a;padding-top:120px;padding-bottom:12px}.error-body .error-content{font-weight:400;font-size:12px;line-height:20px;color:var(--primaryTextColor)}.pay-title-box{background:var(--titleBarBackground);width:100%;padding:16px 24.5px}.pay-title{font-weight:700;font-size:16px;line-height:24px;color:var(--titleBarFontColor)}.pay-details{font-size:14px;line-height:20px;color:var(--titleBarSecondaryFontColour);padding-top:12px}.pay-selection{width:100%;padding:24px}.width-q{margin:0;grid-gap:24px;gap:24px}.pay-width{font-weight:700;font-size:16px;color:var(--primaryTextColor);padding-bottom:8px}.pay-btn{background:#FFFFFF;border:1px solid var(--primaryBorderColor);border-radius:4px;font-size:14px;color:var(--primaryTextColor);display:flex;align-items:center;cursor:pointer;margin-bottom:0;padding-right:18px}.pay-btn-active{border:1px solid var(--secondaryButtonColour)}.pay-btn-text{font-size:14px;color:var(--primaryTextColor);padding:8px 8px 8px 16px;width:95%}.icon-align{width:20px;height:19px}.paymentCompleted{padding:0}@media (max-width: 578px){.pay-body{margin:16px 0 0;border:none;box-shadow:none;border-radius:0}.pay-title-box{padding:22px 16px}.pay-selection{padding:16px}}@media (max-width: 784px){.pay-btn{min-width:100%;padding-right:16px;padding-left:12px}.width-q{grid-gap:12px;gap:12px}.pay-width{padding-bottom:12px}.pay-details{padding-top:8px}}\n"], components: [{ type: i2.PaymentBankDetailsComponent, selector: "lib-payment-bank-details", inputs: ["paymentData", "paymentTypeS"], outputs: ["payEmitter"] }, { type: i3.PaymentCardDetailsComponent, selector: "lib-payment-card-details", inputs: ["cardPaymentData"], outputs: ["payEmitter"] }, { type: i4.PaymentCompleteComponent, selector: "lib-payment-complete", inputs: ["valid", "cardDetails", "completePageDetails"], outputs: ["close"] }], directives: [{ type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PaymentDetailsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-payment-details',
                    templateUrl: './payment-details.component.html',
                    styleUrls: ['./payment-details.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.CommonPaymentService }]; }, propDecorators: { genericPaymentDetails: [{
                type: Input
            }], tip: [{
                type: Input
            }], total: [{
                type: Input
            }], emitter: [{
                type: Output
            }], payEmitter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BhcmVudHBheW1lbnQvc3JjL2xpYi9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFRL0UsTUFBTSxPQUFPLHVCQUF1QjtJQWlDbEMsWUFBb0IsYUFBa0M7UUFBbEMsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBL0J0RCxzQkFBaUIsR0FBUSxlQUFlLENBQUM7UUFHekMsa0JBQWEsR0FBVSxLQUFLLENBQUM7UUFFN0IsZUFBVSxHQUFNLFlBQVksQ0FBQztRQVNwQixVQUFLLEdBQVEsQ0FBQyxDQUFDO1FBQ3hCLHlCQUFvQixHQUFRLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFRLENBQUMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBTWpCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzRCxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFJUixDQUFDO0lBdkIzRCxLQUFLLENBQUMsYUFBa0I7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXNCRCxRQUFROztRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQU8sRUFBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU0sQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVksRUFBQyxFQUFFO1lBQzNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsSUFBRyxDQUFBLE1BQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLDBDQUFFLE1BQU0sS0FBSSxlQUFlLEVBQUM7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUMvRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFBO1lBQzVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBRSxJQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsSUFBRyxRQUFRLElBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNoN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztTQUNsSTthQUFLLElBQUcsQ0FBQSxNQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEtBQUksaUJBQWlCLEVBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUcsUUFBUSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUEsQ0FBQyxDQUFBLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFDM2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUE7U0FDbkU7UUFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQSxNQUFBLE1BQUEsSUFBSSxDQUFDLHFCQUFxQiwwQ0FBRSxlQUFlLDBDQUFFLFFBQVEsRUFBQyxDQUFDLENBQUMsTUFBQSxJQUFJLENBQUMscUJBQXFCLDBDQUFFLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0SyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFFbEUsSUFBRyxVQUFVLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFRLEVBQUUsSUFBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pJO1FBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRzVDLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBcUIsQ0FBQTtZQUM5RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7SUFDTCxDQUFDOztxSEFwRlksdUJBQXVCO3lHQUF2Qix1QkFBdUIsOE1DUnBDLHc5S0FtRE07NEZEM0NPLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7MkdBZVUscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBWUksT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uUGF5bWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJpdmNlcy9jb21tb24tcGF5bWVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBheW1lbnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcGF5bWVudE1ldGhvZFR5cGU6IGFueSA9ICdCYW5rIHRyYW5zZmVyJztcbiAgcGF5bWVudEVuYWJsZTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBkZXZpY2VQYXltZW50OiBib29sZWFuPWZhbHNlO1xuICBjbGllbnRUZWxlcGhvbmU6IGFueTtcbiAgdGVzdFJlc3VsdDogYW55PVwidGVzdFJlc3VsdFwiO1xuICBwb3N0Q29kZTogYW55O1xuICBpc0dvY2FyZGxlc3NFbmFibGVkOiBhbnk7XG4gIHZhbGlkKHBheW1lbnRFbmFibGU6IGFueSkge1xuICAgIHRoaXMucGF5bWVudEVuYWJsZSA9IHBheW1lbnRFbmFibGU7XG4gICAgdGhpcy5wYXlFbWl0dGVyLmVtaXQocGF5bWVudEVuYWJsZSk7XG4gIH1cbiAgQElucHV0KCkgZ2VuZXJpY1BheW1lbnREZXRhaWxzOmFueTtcbiAgQElucHV0KCkgdGlwOiBhbnk7XG4gIEBJbnB1dCgpIHRvdGFsOm51bWJlcj0wO1xuICBwYXltZW50TWV0aG9kQWxsb3dlZDogYW55ID0gMztcbiAgcGF5bWVudE1ldGhvZDogYW55ID0gMTtcbiAgcGF5bWVudENvbXBsZXRlZDogYm9vbGVhbiA9IHRydWU7XG4gIGNhbkRvV2FsbGV0UGF5OiBib29sZWFuID0gZmFsc2U7XG4gIHdhbGxldFBheUxvZ29OYW1lOiBzdHJpbmcgPSAnJztcbiAgd2FsbGV0UGF5RGVzYzogc3RyaW5nID0gJyc7XG4gIHdhbGxldERldGFpbHM6IGFueTtcbiAgYW1vdW50VG9CZVBhaWQ6YW55O1xuICBwZW5kaW5nQW1vdW50OmFueTtcbiAgcG9ydGFsTmFtZTphbnk7XG5cbiAgQE91dHB1dCgpIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBwYXlFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1vblNlcnZpY2U6Q29tbW9uUGF5bWVudFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyAgICBcbiAgICB0aGlzLmNvbW1vblNlcnZpY2UudXNlclVybCQuc3Vic2NyaWJlKChyZXM6YW55KT0+e1xuICAgICAgdGhpcy5wb3J0YWxOYW1lID0gcmVzPy5wb3J0YWw7XG4gICAgfSk7XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnBheW1lbnREZXRhaWxzJC5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSk9PntcbiAgICAgIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzID0gcmVzcG9uc2U7XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygncG9ydGFsbmFtZScsdGhpcy5wb3J0YWxOYW1lKTtcbiAgICBjb25zb2xlLmxvZygnc3RhdGVtdG4nLHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzKTtcbiAgICBpZih0aGlzLmNvbW1vblNlcnZpY2UuYXBpVXJsPy5wb3J0YWwgPT0gJ0ludm9pY2VQb3J0YWwnKXtcbiAgICAgIHRoaXMuYW1vdW50VG9CZVBhaWQgPSB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5wYXltZW50RGV0YWlscy5hbW91bnRUb0JlUGFpZDtcbiAgICAgIHRoaXMucGVuZGluZ0Ftb3VudCA9IHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLnBheW1lbnREZXRhaWxzLnBlbmRpbmdBbW91bnRcbiAgICAgIHRoaXMucGF5bWVudENvbXBsZXRlZCA9ICh0aGlzLmFtb3VudFRvQmVQYWlkIC0gdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMucGF5bWVudERldGFpbHMucGVuZGluZ0Ftb3VudCkgPCAxO1xuICAgICAgdGhpcy5wYXltZW50TWV0aG9kID0gdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaXNHb2NhcmRsZXNzRW5hYmxlZCAmJiB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5jdXN0b21lckRldGFpbHMucG9zdGNvZGUgPzE6KHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmNhcmRJbnRlZ3JhdGlvbiAmJiB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5jYXJkQ2hhcmdlcyAhPSAtMSAmJiAodGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaXNCYXN5c0VuYWJsZWQgfHwgdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaXNQYXlGb3J0RW5hYmxlZCB8fCB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5pc1N0cmlwZUVuYWJsZWQgfHwgdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaXNXb3JsZFBheUVuYmxlZCApICAgJiYgICghdGhpcy5zZXR0aW5ncy5jYXJkRW5hYmxlfHwgdGhpcy5zZXR0aW5ncy5jYXJkRW5hYmxlID09J0Fsd2F5cyd8fCB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5pbnZvaWNlRGV0YWlscy50b3RhbCArIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmludm9pY2VEZXRhaWxzLnRheGVzICsgdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMudG90YWwqKHRoaXMudGlwLzEwMCkgKyAodGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuY2FyZENoYXJnZXNbdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuY2FyZENoYXJnZXNdLmNoYXJnZSAvIDEwMCkgKiAodGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMudG90YWwgKyB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5pbnZvaWNlRGV0YWlscy50YXhlcyArIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmludm9pY2VEZXRhaWxzLnRvdGFsKih0aGlzLnRpcC8xMDApKSA8PSB0aGlzLnNldHRpbmdzLmNyZWRpdERlYml0Q2FyZCkpPzI6MDtcbiAgICAgIHRoaXMuY2xpZW50VGVsZXBob25lID0gdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuY2xpZW50RGV0YWlscy5jb3VudHJ5Y29kZSArIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmNsaWVudERldGFpbHMudGVsZXBob25lO1xuICAgIH1lbHNlIGlmKHRoaXMuY29tbW9uU2VydmljZS5hcGlVcmw/LnBvcnRhbCA9PSAnU3RhdGVtZW50UG9ydGFsJyl7XG4gICAgICB0aGlzLnBheW1lbnRNZXRob2QgPSB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5pc0dvY2FyZGxlc3NFbmFibGVkICYmIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmN1c3RvbWVyRGV0YWlscy5wb3N0Y29kZT8xOih0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5jYXJkSW50ZWdyYXRpb24gJiYgKHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmlzU3RyaXBlRW5hYmxlZCB8fCB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5pc1dvcmxkUGF5RW5ibGVkIHx8IHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmlzUGF5Rm9ydCkgJiYgKHRoaXMuc2V0dGluZ3MuY2FyZEVuYWJsZSA9PSB1bmRlZmluZWQgfHwodGhpcy5zZXR0aW5ncy5jYXJkRW5hYmxlICE9J05vJyAmJiAodGhpcy5zZXR0aW5ncy5jYXJkRW5hYmxlID09J0Fsd2F5cyd8fCB0aGlzLnRvdGFsIDw9IHRoaXMuc2V0dGluZ3MuY3JlZGl0RGViaXRDYXJkKSkpKT8yOjA7XG4gICAgICB0aGlzLmNsaWVudFRlbGVwaG9uZSA9IHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzLmNsaWVudF90ZWxlcGhvbmVcbiAgICB9XG4gICAgdGhpcy5pc0dvY2FyZGxlc3NFbmFibGVkID0gdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHMuaXNHb2NhcmRsZXNzRW5hYmxlZDtcbiAgICB0aGlzLnBvc3RDb2RlID0gdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHM/LmN1c3RvbWVyRGV0YWlscz8ucG9zdGNvZGUgPyB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscz8uY3VzdG9tZXJEZXRhaWxzLnBvc3Rjb2RlIDogdGhpcy5nZW5lcmljUGF5bWVudERldGFpbHNbJ3Bvc3Rjb2RlJ107XG4gICAgdGhpcy5jb21tb25TZXJ2aWNlLnNldFVzZXJSZXNwb25zZSh0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscywnJyk7XG4gICAgXG4gICAgaWYoXCJzZXR0aW5nc1wiIGluIHRoaXMuZ2VuZXJpY1BheW1lbnREZXRhaWxzKXtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLmdlbmVyaWNQYXltZW50RGV0YWlscy5zZXR0aW5ncy5yZWR1Y2UoKG9iajogYW55LCBpdGVtOiBhbnkpID0+IE9iamVjdC5hc3NpZ24ob2JqLCB7IFtpdGVtLmtleV06IGl0ZW0udmFsdWUgfSksIHt9KTtcbiAgICB9XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnBheW1lbnRTZWxlY3RlZCh0aGlzLnBheW1lbnRNZXRob2QpXG4gICAgfSwgMTAwKTtcbiAgICB0aGlzLnBheW1lbnRNZXRob2RUeXBlPSB0aGlzLnNldHRpbmdzLmNvdW50cnlSZWdpb249PSA2ID8gJ0FDSCcgOiAnQmFuayB0cmFuc2Zlcic7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5wYXltZW50TWV0aG9kVHlwZSk7XG4gICAgXG4gICAgXG4gIH1cblxuICBwYXltZW50U2VsZWN0ZWQodmFsdWU6IGFueSkge1xuICAgIHZhciB0ZW1wID0gdGhpcy5wYXltZW50TWV0aG9kICE9IHZhbHVlXG4gICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICB0aGlzLnBheW1lbnRNZXRob2QgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodmFsdWUpO1xuICAgICAgICB2YXIgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2YWx1ZSkgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBheUVtaXR0ZXIuZW1pdCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxufVxuIiwiPGRpdiBjbGFzcz1cInJvdyBwYXktYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGUtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXktdGl0bGVcIj5QYXltZW50IGRldGFpbHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBheS1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cInBvcnRhbE5hbWUgPT0gJ0ludm9pY2VQb3J0YWwnICYmIChhbW91bnRUb0JlUGFpZCAtIChwZW5kaW5nQW1vdW50ID8gcGVuZGluZ0Ftb3VudCA6IDApKSA+MFwiPlBsZWFzZSBmaWxsIHRoZSBpbmZvcm1hdGlvbiBiZWxvdyBhYm91dCB5b3VyIHBheW1lbnQgbWV0aG9kPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJwb3J0YWxOYW1lID09ICdTdGF0ZW1lbnRQb3J0YWwnXCI+UGxlYXNlIGZpbGwgdGhlIGluZm9ybWF0aW9uIGJlbG93IGFib3V0IHlvdXIgcGF5bWVudCBtZXRob2Q8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF5LWRldGFpbHNcIiAqbmdJZj1cInBvcnRhbE5hbWUgPT0gJ0ludm9pY2VQb3J0YWwnICYmIChhbW91bnRUb0JlUGFpZCAtIChwZW5kaW5nQW1vdW50ID8gcGVuZGluZ0Ftb3VudCA6IDApKSA8PSAwXCI+XG4gICAgICAgICAgICBQYXltZW50IHN0YXR1cyBhbmQgc3VtbWFyeSBpbmZvcm1hdGlvbjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYXktc2VsZWN0aW9uXCIgKm5nSWY9XCIoYW1vdW50VG9CZVBhaWQgLSBwZW5kaW5nQW1vdW50KSA+MCB8fCBwb3J0YWxOYW1lID09ICdTdGF0ZW1lbnRQb3J0YWwnXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBwYXktd2lkdGhcIj5QYXkgd2l0aDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdpZHRoLXFcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0dvY2FyZGxlc3NFbmFibGVkICYmIHBvc3RDb2RlXCIgY2xhc3M9XCJjb2wgcGF5LWJ0blwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMSlcIiBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzEnfVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMVwiPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+e3twYXltZW50TWV0aG9kVHlwZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvbi1hbGlnblwiIHNyYz1cImFzc2V0cy9pY29uL2JhbmstdHJhbnNmZXIuc3ZnXCIgYWx0PVwiXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgcGF5LWJ0blwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMilcIiBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzInfVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGF5V2l0aFwiIGlkPVwiMlwiPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicGF5LWJ0bi10ZXh0XCI+RGViaXQgb3IgY3JlZGl0IGNhcmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyMCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcgMEgzQzIuMjA0MzUgMCAxLjQ0MTI5IDAuMzE2MDcxIDAuODc4NjggMC44Nzg2OEMwLjMxNjA3MSAxLjQ0MTI5IDAgMi4yMDQzNSAwIDNWMTFDMCAxMS43OTU2IDAuMzE2MDcxIDEyLjU1ODcgMC44Nzg2OCAxMy4xMjEzQzEuNDQxMjkgMTMuNjgzOSAyLjIwNDM1IDE0IDMgMTRIMTdDMTcuNzk1NiAxNCAxOC41NTg3IDEzLjY4MzkgMTkuMTIxMyAxMy4xMjEzQzE5LjY4MzkgMTIuNTU4NyAyMCAxMS43OTU2IDIwIDExVjNDMjAgMi4yMDQzNSAxOS42ODM5IDEuNDQxMjkgMTkuMTIxMyAwLjg3ODY4QzE4LjU1ODcgMC4zMTYwNzEgMTcuNzk1NiAwIDE3IDBaTTkgMTBINUM0LjczNDc4IDEwIDQuNDgwNDMgOS44OTQ2NCA0LjI5Mjg5IDkuNzA3MTFDNC4xMDUzNiA5LjUxOTU3IDQgOS4yNjUyMiA0IDlDNCA4LjczNDc4IDQuMTA1MzYgOC40ODA0MyA0LjI5Mjg5IDguMjkyODlDNC40ODA0MyA4LjEwNTM2IDQuNzM0NzggOCA1IDhIOUM5LjI2NTIyIDggOS41MTk1NyA4LjEwNTM2IDkuNzA3MTEgOC4yOTI4OUM5Ljg5NDY0IDguNDgwNDMgMTAgOC43MzQ3OCAxMCA5QzEwIDkuMjY1MjIgOS44OTQ2NCA5LjUxOTU3IDkuNzA3MTEgOS43MDcxMUM5LjUxOTU3IDkuODk0NjQgOS4yNjUyMiAxMCA5IDEwWk0xNSAxMEgxM0MxMi43MzQ4IDEwIDEyLjQ4MDQgOS44OTQ2NCAxMi4yOTI5IDkuNzA3MTFDMTIuMTA1NCA5LjUxOTU3IDEyIDkuMjY1MjIgMTIgOUMxMiA4LjczNDc4IDEyLjEwNTQgOC40ODA0MyAxMi4yOTI5IDguMjkyODlDMTIuNDgwNCA4LjEwNTM2IDEyLjczNDggOCAxMyA4SDE1QzE1LjI2NTIgOCAxNS41MTk2IDguMTA1MzYgMTUuNzA3MSA4LjI5Mjg5QzE1Ljg5NDYgOC40ODA0MyAxNiA4LjczNDc4IDE2IDlDMTYgOS4yNjUyMiAxNS44OTQ2IDkuNTE5NTcgMTUuNzA3MSA5LjcwNzExQzE1LjUxOTYgOS44OTQ2NCAxNS4yNjUyIDEwIDE1IDEwWk0xOCA0SDJWM0MyIDIuNzM0NzggMi4xMDUzNiAyLjQ4MDQzIDIuMjkyODkgMi4yOTI4OUMyLjQ4MDQzIDIuMTA1MzYgMi43MzQ3OCAyIDMgMkgxN0MxNy4yNjUyIDIgMTcuNTE5NiAyLjEwNTM2IDE3LjcwNzEgMi4yOTI4OUMxNy44OTQ2IDIuNDgwNDMgMTggMi43MzQ3OCAxOCAzVjRaXCIgZmlsbD1cIiM1MDVCNjVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gPGRpdiAqbmdJZj1cInVzZXJEYXRhLmlzU3RyaXBlRW5hYmxlZCAmJiB1c2VyRGF0YS5pc1dhbGxldFBheUVuYWJsZWQgJiYgY2FuRG9XYWxsZXRQYXlcIiBjbGFzcz1cImNvbCBwYXktYnRuXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BheS1idG4tYWN0aXZlJyA6IHBheW1lbnRNZXRob2QgPT0gJzMnfVwiIChjbGljayk9XCJwYXltZW50U2VsZWN0ZWQoMylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBheVdpdGhcIiBpZD1cIjNcIj48c3BhbiBjbGFzcz1cInBheS1idG4tdGV4dFwiPnt7IHdhbGxldFBheURlc2MgfX08L3NwYW4+PGltZ1xuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImljb24tYWxpZ25cIiBzcmM9XCJcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGxpYi1wYXltZW50LWJhbmstZGV0YWlscyAqbmdJZj1cInBheW1lbnRNZXRob2QgPT0gJzEnICYmIGlzR29jYXJkbGVzc0VuYWJsZWQgJiYgcG9zdENvZGVcIiBbcGF5bWVudFR5cGVTXT1cInBheW1lbnRNZXRob2RUeXBlXCIgKHBheUVtaXR0ZXIpPVwidmFsaWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbcGF5bWVudERhdGFdPVwiZ2VuZXJpY1BheW1lbnREZXRhaWxzXCI+PC9saWItcGF5bWVudC1iYW5rLWRldGFpbHM+XG4gICAgICAgIDxsaWItcGF5bWVudC1jYXJkLWRldGFpbHMgKm5nSWY9XCIocG9ydGFsTmFtZSA9PSAnU3RhdGVtZW50UG9ydGFsJyAmJiBwYXltZW50TWV0aG9kID09ICcyJykgfHwgKHBvcnRhbE5hbWUgPT0gJ0FjY2VwdFByb3Bvc2FsJyAmJiBwYXltZW50TWV0aG9kID09ICcyJykgfHwgKHBvcnRhbE5hbWUgPT0gJ0ludm9pY2VQb3J0YWwnICYmIHBheW1lbnRNZXRob2QgPT0gJzInICYmIGdlbmVyaWNQYXltZW50RGV0YWlscy5jYXJkSW50ZWdyYXRpb24gJiYgKGdlbmVyaWNQYXltZW50RGV0YWlscy5pc0Jhc3lzRW5hYmxlZCB8fCBnZW5lcmljUGF5bWVudERldGFpbHMuaXNQYXlGb3J0RW5hYmxlZCB8fCBnZW5lcmljUGF5bWVudERldGFpbHMuaXNTdHJpcGVFbmFibGVkIHx8IGdlbmVyaWNQYXltZW50RGV0YWlscy5pc1dvcmxkUGF5RW5ibGVkICkgICYmIGdlbmVyaWNQYXltZW50RGV0YWlscy5jYXJkQ2hhcmdlcy5sZW5ndGggIT0gMCAmJiAgKCAhc2V0dGluZ3MuY2FyZEVuYWJsZSB8fCBzZXR0aW5ncy5jYXJkRW5hYmxlID09J0Fsd2F5cyd8fCBnZW5lcmljUGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMudG90YWwgKyBnZW5lcmljUGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMudGF4ZXMgKyBnZW5lcmljUGF5bWVudERldGFpbHMuaW52b2ljZURldGFpbHMudG90YWwqKHRpcC8xMDApIDw9IHNldHRpbmdzLmNyZWRpdERlYml0Q2FyZCkpXCIgW2NhcmRQYXltZW50RGF0YV09XCJnZW5lcmljUGF5bWVudERldGFpbHNcIlxuICAgICAgICAgICAgKHBheUVtaXR0ZXIpPVwidmFsaWQoJGV2ZW50KVwiPjwvbGliLXBheW1lbnQtY2FyZC1kZXRhaWxzPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCIocG9ydGFsTmFtZSA9PSAnU3RhdGVtZW50UG9ydGFsJyB8fCBwb3J0YWxOYW1lID09ICdJbnZvaWNlUG9ydGFsJykgJiYgcGF5bWVudENvbXBsZXRlZFwiICpuZ0lmPVwiKGFtb3VudFRvQmVQYWlkIC0gcGVuZGluZ0Ftb3VudCkgIDw9IDBcIj5cbiAgICAgICAgPGxpYi1wYXltZW50LWNvbXBsZXRlIFt2YWxpZF09XCJwYXltZW50Q29tcGxldGVkXCJcbiAgICAgICAgICAgIFtjb21wbGV0ZVBhZ2VEZXRhaWxzXT1cImdlbmVyaWNQYXltZW50RGV0YWlsc1wiPjwvbGliLXBheW1lbnQtY29tcGxldGU+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3cgcGF5LWJvZHkgZXJyb3ItYm9keVwiICpuZ0lmPVwicGF5bWVudE1ldGhvZCA9PSAwXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJzZXR0aW5ncy5jYXJkRW5hYmxlID09J0Fsd2F5cycgfHwgdG90YWwgPD0gc2V0dGluZ3MuY3JlZGl0RGViaXRDYXJkXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cInBheW1lbnRNZXRob2QgIT0gJzAnID8gJyc6cGF5bWVudFNlbGVjdGVkKChnZW5lcmljUGF5bWVudERldGFpbHMuaXNHb2NhcmRsZXNzRW5hYmxlZCAmJiBnZW5lcmljUGF5bWVudERldGFpbHMuY3VzdG9tZXJEZXRhaWxzLnBvc3Rjb2RlKT8xOihnZW5lcmljUGF5bWVudERldGFpbHMuY2FyZEludGVncmF0aW9uICYmIHNldHRpbmdzLmNhcmRFbmFibGUgIT0nTm8nICYmIChzZXR0aW5ncy5jYXJkRW5hYmxlID09J0Fsd2F5cyd8fCB0b3RhbCA8PSBzZXR0aW5ncy5jcmVkaXREZWJpdENhcmQpKT8yOjApXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItdGl0bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48aW1nIGNsYXNzPVwiZmEtY2hlY2tcIiBzcmM9XCJhc3NldHMvaWNvbi93YXJuaW5nLnN2Z1wiIGFsdD1cImxpbmstaW52YWxpZFwiPjwvZGl2PlxuICAgICAgICA8ZGl2PidXZWByZSB1bmFibGUgdG8gcHJvY2VzcyBhIHBheW1lbnQuIFBsZWFzZSBjb250YWN0IHt7Y2xpZW50VGVsZXBob25lfX0gIGZvciBhc3Npc3RhbmNlJ1xuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdfQ==