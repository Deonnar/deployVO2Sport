"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var purchase_service_1 = require("../purchase.service");
var router_1 = require("@angular/router");
var PurchaseDetailsComponent = (function () {
    function PurchaseDetailsComponent(_purchaseService, _currentRoute) {
        this._purchaseService = _purchaseService;
        this._currentRoute = _currentRoute;
        this.pageTitle = "Detalles de la compra";
        this.purchase.ProductLines = new Array();
    }
    PurchaseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var UserId = currentUser[Object.keys(currentUser)[3]];
        var id = +this._currentRoute.snapshot.params['id'];
        this._purchaseService.getAll(UserId)
            .subscribe(function (response) {
            _this.purchases = response;
            _this.purchase.ProductLines = _this.purchases[id].ProductLines;
            console.log(_this.purchase);
        })
            , function (error) { return console.log('error: ' + error); };
    };
    return PurchaseDetailsComponent;
}());
PurchaseDetailsComponent = __decorate([
    core_1.Component({
        selector: 'vo2-purchase-details',
        templateUrl: './purchase-details.component.html',
        providers: [purchase_service_1.PurchaseService],
        styleUrls: ['./purchase-details.component.css']
    }),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService, router_1.ActivatedRoute])
], PurchaseDetailsComponent);
exports.PurchaseDetailsComponent = PurchaseDetailsComponent;
//# sourceMappingURL=purchase-details.component.js.map