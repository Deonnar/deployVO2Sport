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
var producto_1 = require("../producto");
var producto_service_1 = require("../producto.service");
var router_1 = require("@angular/router");
var ProductNewComponent = (function () {
    function ProductNewComponent(_currentRoute, _router, _productosService) {
        this._currentRoute = _currentRoute;
        this._router = _router;
        this._productosService = _productosService;
        this.submitted = false;
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        this.producto = new producto_1.Producto();
    };
    ProductNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._productosService.create(this.producto)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/administar-productos']);
    };
    return ProductNewComponent;
}());
ProductNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-productoNew',
        templateUrl: './producto-new.component.html',
        providers: [producto_service_1.ProductoService],
        styleUrls: ['./productos-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        producto_service_1.ProductoService])
], ProductNewComponent);
exports.ProductNewComponent = ProductNewComponent;
//# sourceMappingURL=productos-new.component.js.map