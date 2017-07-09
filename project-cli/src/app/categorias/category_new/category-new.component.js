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
var category_1 = require("../category");
var category_service_1 = require("../category.service");
var router_1 = require("@angular/router");
var CategoryNewComponent = (function () {
    function CategoryNewComponent(_categoryService, _router) {
        this._categoryService = _categoryService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Nueva Categoría";
    }
    CategoryNewComponent.prototype.ngOnInit = function () {
        this.category = new category_1.Category();
    };
    CategoryNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._categoryService.create(this.category)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/categorias']);
    };
    return CategoryNewComponent;
}());
CategoryNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-categoryNew',
        templateUrl: './category-new.component.html',
        styleUrls: ['./category-new.component.css'],
        providers: [category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        router_1.Router])
], CategoryNewComponent);
exports.CategoryNewComponent = CategoryNewComponent;
//# sourceMappingURL=category-new.component.js.map