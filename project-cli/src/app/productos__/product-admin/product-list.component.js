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
var product_1 = require("../product");
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
            .subscribe(function (products) { return _this.productos = _this.renderProductos(products); }, function (error) { return console.log('error!!!!!!!!!: ' + error); });
    };
    ProductAdminComponent.prototype.renderProductos = function (products) {
        var productsToRender = [];
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            var nombre = product[Object.keys(product)[6]];
            var codigo = product[Object.keys(product)[7]];
            var descripcion = product[Object.keys(product)[8]];
            var marca = product[Object.keys(product)[9]];
            var precio = product[Object.keys(product)[10]];
            var stock = product[Object.keys(product)[11]];
            var _product = new product_1.Product();
            _product.setNombre(nombre);
            _product.setDescription(descripcion);
            _product.setCodigo(codigo);
            _product.setMarca(descripcion);
            _product.setPrecio(marca);
            _product.setStock(stock);
            productsToRender.push(_product);
        }
        return productsToRender;
    };
    ProductAdminComponent.prototype.onRemoveRow = function (id) {
        this._productService.deleteWithId(id)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/productos/']);
    };
    ProductAdminComponent.prototype.onNewProduct = function () {
        this._router.navigate(['/productos/nuevo']);
    };
    ProductAdminComponent.prototype.onEditRow = function (id) {
        this._router.navigate(['/productos/editar/' + id]);
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