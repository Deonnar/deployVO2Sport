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
var product_fields_service_1 = require("../product_fields.service");
var router_1 = require("@angular/router");
var ProductFieldListComponent = (function () {
    function ProductFieldListComponent(_product_fieldsService, _router) {
        this._product_fieldsService = _product_fieldsService;
        this._router = _router;
        this.pageTitle = "Lista de Campos de Productos";
    }
    ProductFieldListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._product_fieldsService.getAll()
            .subscribe(function (productField) { return _this.itemsProductField = productField; }),
            function (error) { return console.log(error); };
    };
    ProductFieldListComponent.prototype.onRemoveRow = function (id) {
        var _this = this;
        this._product_fieldsService.deleteWithId(id)
            .subscribe(function (result) {
            console.log(result);
            _this.message = "Se eliminó el item";
        }, function (error) { return console.log(error); });
        this._router.navigate(['/productos/campos']);
    };
    ProductFieldListComponent.prototype.onNewProductField = function () {
        console.log('new');
        this._router.navigate(['/productos/campos/nuevo']);
    };
    ProductFieldListComponent.prototype.onEditRow = function (id) {
        this._router.navigate(['/productos/campos/editar/' + id]);
    };
    return ProductFieldListComponent;
}());
ProductFieldListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-product_fieldsList',
        templateUrl: './product_fields_list.component.html',
        styleUrls: ['./product_fields_list.component.css'],
        providers: [product_fields_service_1.ProductFieldService]
    }),
    __metadata("design:paramtypes", [product_fields_service_1.ProductFieldService,
        router_1.Router])
], ProductFieldListComponent);
exports.ProductFieldListComponent = ProductFieldListComponent;
//# sourceMappingURL=product_fields_list.component.js.map