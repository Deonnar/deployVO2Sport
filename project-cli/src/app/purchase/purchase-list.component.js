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
var router_1 = require("@angular/router");
var purchase_service_1 = require("./purchase.service");
var PurchaseListComponent = (function () {
    function PurchaseListComponent(_purchaseService, _router) {
        this._purchaseService = _purchaseService;
        this._router = _router;
        this.pageTitle = "Mis Compras";
    }
    PurchaseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var UserId = currentUser[Object.keys(currentUser)[3]];
        this._purchaseService.getAll(UserId)
            .subscribe(function (response) {
            _this.purchases = response;
        })
            , function (error) { return console.log('error: ' + error); };
    };
    PurchaseListComponent.prototype.onDetailRow = function (id) {
        console.log(id);
        this.purchase = this.purchases[id];
        this._router.navigate(['/compras/' + id]);
    };
    return PurchaseListComponent;
}());
PurchaseListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-purchaseproducts',
        templateUrl: './purchase-list.component.html',
        styleUrls: ['./purchase-list.component.css'],
        providers: [purchase_service_1.PurchaseService]
    }),
    __metadata("design:paramtypes", [purchase_service_1.PurchaseService,
        router_1.Router])
], PurchaseListComponent);
exports.PurchaseListComponent = PurchaseListComponent;
//# sourceMappingURL=purchase-list.component.js.map