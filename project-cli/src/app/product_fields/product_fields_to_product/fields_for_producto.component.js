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
var product_fields_1 = require("../product_fields");
var product_fields_service_1 = require("../product_fields.service");
var router_1 = require("@angular/router");
var AddProductFieldToProductComponent = (function () {
    function AddProductFieldToProductComponent(_product_fieldsService, _router, _currentRoute) {
        this._product_fieldsService = _product_fieldsService;
        this._router = _router;
        this._currentRoute = _currentRoute;
        this.pageTitle = "Agregar Campos al Producto";
    }
    AddProductFieldToProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idProduct = +this._currentRoute.snapshot.params['id'];
        console.log('el ID es: ' + idProduct);
        this._product_fieldsService.fieldId = idProduct;
        this._product_fieldsService.getAll()
            .subscribe(function (productField) { return _this.itemsProductField = productField; }),
            function (error) { return console.log(error); };
        this.productFieldtoProduct = new product_fields_1.ProductFieldtoProduct();
    };
    AddProductFieldToProductComponent.prototype.onAddCategory = function (idField) {
        var idProduct = this._product_fieldsService.productId;
        this._product_fieldsService.setParametersFieldtoProductField(idProduct, idField);
        /*   this._product_fieldsService.createFieldToProduct(idField)
                                    .subscribe(
                                        result => console.log(result),
                                    (error:Error)  => console.log(error)
                                    ); */
        this._router.navigate(['/productos/campos']);
    };
    return AddProductFieldToProductComponent;
}());
AddProductFieldToProductComponent = __decorate([
    core_1.Component({
        selector: 'vo2-product_fieldsList',
        templateUrl: './fields_for_producto.component.html',
        styleUrls: ['./fields_for_producto.component.css'],
        providers: [product_fields_service_1.ProductFieldService]
    }),
    __metadata("design:paramtypes", [product_fields_service_1.ProductFieldService,
        router_1.Router,
        router_1.ActivatedRoute])
], AddProductFieldToProductComponent);
exports.AddProductFieldToProductComponent = AddProductFieldToProductComponent;
//# sourceMappingURL=fields_for_producto.component.js.map