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
var category_service_1 = require("../../categorias/category.service");
var ProductNewComponent = (function () {
    function ProductNewComponent(_productService, _categoryService, _router) {
        this._productService = _productService;
        this._categoryService = _categoryService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Nuevo Producto";
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new product_1.Product();
        this.picture = new product_1.Images();
        this.product.Pictures = new Array();
        this._categoryService.getAll()
            .subscribe(function (categories) { return _this.itemsCategories = categories; }),
            function (error) { return console.log(error); };
    };
    ProductNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.categoyId);
        this.product.Category = this.categoyId;
        this.product.Pictures.push(this.picture);
        this._productService.create(this.product)
            .subscribe(function (result) { return console.log('va a guardar: ' + result); }, function (error) { return console.log('ErrOR : ' + error); });
        this._router.navigate(['/administar-productos']);
    };
    ProductNewComponent.prototype.onChange = function (value) {
        console.log(value);
        console.log(value.toString().split(':')[1]);
        this.categoyId = value.toString().split(':')[1];
    };
    return ProductNewComponent;
}());
ProductNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-productNew',
        templateUrl: './product-new.component.html',
        styleUrls: ['./product-new.component.css'],
        providers: [product_service_1.ProductService, category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService,
        router_1.Router])
], ProductNewComponent);
exports.ProductNewComponent = ProductNewComponent;
//# sourceMappingURL=product-new.component.js.map