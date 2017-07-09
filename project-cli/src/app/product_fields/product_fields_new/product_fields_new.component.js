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
var ProductFieldNewComponent = (function () {
    function ProductFieldNewComponent(_productFieldService, _router) {
        this._productFieldService = _productFieldService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Nuevo Campo";
    }
    ProductFieldNewComponent.prototype.ngOnInit = function () {
        this.productField = new product_fields_1.ProductField();
    };
    ProductFieldNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.productField);
        this._productFieldService.create(this.productField)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/productos/campos']);
    };
    return ProductFieldNewComponent;
}());
ProductFieldNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-product_fields_new',
        templateUrl: './product_fields_new.component.html',
        styleUrls: ['./product_fields_new.component.css'],
        providers: [product_fields_service_1.ProductFieldService]
    }),
    __metadata("design:paramtypes", [product_fields_service_1.ProductFieldService,
        router_1.Router])
], ProductFieldNewComponent);
exports.ProductFieldNewComponent = ProductFieldNewComponent;
//# sourceMappingURL=product_fields_new.component.js.map