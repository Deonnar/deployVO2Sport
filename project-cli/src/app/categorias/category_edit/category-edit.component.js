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
var CategoryEditComponent = (function () {
    function CategoryEditComponent(_categoryService, _router, _currentRoute) {
        this._categoryService = _categoryService;
        this._router = _router;
        this._currentRoute = _currentRoute;
        this.submitted = false;
        this.pageTitle = "Editar Categoría";
        this.category = new category_1.Category();
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._currentRoute.snapshot.params['id'];
        this._categoryService.get(id)
            .subscribe(function (obtainedCategory) { return _this.category = obtainedCategory; }),
            function (error) { return console.log(error); };
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._categoryService.update(this.category)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/categorias']);
    };
    return CategoryEditComponent;
}());
CategoryEditComponent = __decorate([
    core_1.Component({
        selector: 'vo2-categoryEdit',
        templateUrl: './category-edit.component.html',
        styleUrls: ['./category-edit.component.css'],
        providers: [category_service_1.CategoryService]
    }),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        router_1.Router,
        router_1.ActivatedRoute])
], CategoryEditComponent);
exports.CategoryEditComponent = CategoryEditComponent;
//# sourceMappingURL=category-edit.component.js.map