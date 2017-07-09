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
var product_service_1 = require("../product.service");
var router_1 = require("@angular/router");
var ProductAdminComponent = (function () {
    function ProductAdminComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
        this.pageTitle = "Lista de Productos";
    }
    ProductAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProductos()
            .subscribe(function (products) { return _this.productos = products; })
            , function (error) { return console.log('error!!!!!!!!!: ' + error); };
    };
    ProductAdminComponent.prototype.onRemoveRow = function (id) {
        this._productService.deleteWithId(id)
            .subscribe(function (result) { console.log(result); }, function (error) { return console.log(error); });
    };
    ProductAdminComponent.prototype.onNewProduct = function () {
        this._router.navigate(['/productos/nuevo']);
    };
    ProductAdminComponent.prototype.onEditRow = function (id) {
        this._router.navigate(['/productos/editar/' + id]);
    };
    ProductAdminComponent.prototype.onDetailRow = function (id) {
        this._router.navigate(['/productos/detalles/' + id]);
    };
    return ProductAdminComponent;
}());
ProductAdminComponent = __decorate([
    core_1.Component({
        selector: 'vo2-productList',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css'],
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.Router])
], ProductAdminComponent);
exports.ProductAdminComponent = ProductAdminComponent;
//# sourceMappingURL=product-list.component.js.map