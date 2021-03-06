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
var ProductEditComponent = (function () {
    function ProductEditComponent(_productService, _categoryService, _router, _currentRoute) {
        this._productService = _productService;
        this._categoryService = _categoryService;
        this._router = _router;
        this._currentRoute = _currentRoute;
        this.submitted = false;
        this.pageTitle = "Editar Categoría";
        this.product = new product_1.Product();
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new product_1.Product();
        this.picture = new product_1.Images();
        // this.product.Pictures = new Array<Images>();
        var id = +this._currentRoute.snapshot.params['id'];
        this._categoryService.getAll()
            .subscribe(function (categories) { return _this.itemsCategories = categories; }),
            function (error) { return console.log(error); };
        this._productService.get(id)
            .subscribe(function (obtainedProducto) { return _this.product = obtainedProducto; }),
            function (error) { return console.log(error); };
    };
    ProductEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.product.Category = this.categoyId;
        if (this.picture.DataFile != null) {
            this.product.Pictures.push(this.picture);
        }
        this._productService.update(this.product)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/administrar-productos']);
    };
    return ProductEditComponent;
}());
ProductEditComponent = __decorate([
    core_1.Component({
        selector: 'vo2-productEdit',
        templateUrl: './product-edit.component.html',
        styleUrls: ['./product-edit.component.css'],
        providers: [product_service_1.ProductService, category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService,
        router_1.Router,
        router_1.ActivatedRoute])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map