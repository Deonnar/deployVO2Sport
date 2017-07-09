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
var ProductFieldEditComponent = (function () {
    function ProductFieldEditComponent(_product_Field_Service, _router, _currentRoute) {
        this._product_Field_Service = _product_Field_Service;
        this._router = _router;
        this._currentRoute = _currentRoute;
        this.submitted = false;
        this.pageTitle = "Campos de Productos Categoría";
        this.product_field = new product_fields_1.ProductField();
    }
    ProductFieldEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._currentRoute.snapshot.params['id'];
        this._product_Field_Service.get(id)
            .subscribe(function (obtainedProductField) { return _this.product_field = obtainedProductField; }),
            function (error) { return console.log(error); };
    };
    ProductFieldEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._product_Field_Service.update(this.product_field)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/productos/campos']);
    };
    return ProductFieldEditComponent;
}());
ProductFieldEditComponent = __decorate([
    core_1.Component({
        selector: 'vo2-ProductFieldEdit',
        templateUrl: './product_fields_edit.component.html',
        styleUrls: ['./product_fields_edit.component.css'],
        providers: [product_fields_service_1.ProductFieldService]
    }),
    __metadata("design:paramtypes", [product_fields_service_1.ProductFieldService,
        router_1.Router,
        router_1.ActivatedRoute])
], ProductFieldEditComponent);
exports.ProductFieldEditComponent = ProductFieldEditComponent;
//# sourceMappingURL=product_fields_edit.component.js.map