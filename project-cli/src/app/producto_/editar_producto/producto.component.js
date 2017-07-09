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
var producto_service_1 = require("./producto.service");
var router_1 = require("@angular/router");
var EditarProductoComponent = (function () {
    function EditarProductoComponent(_currentRoute, _router, _productosService) {
        this._currentRoute = _currentRoute;
        this._router = _router;
        this._productosService = _productosService;
        this.pageTitle = "Editar Producto";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
    }
    EditarProductoComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    EditarProductoComponent.prototype.ngOnInit = function () {
        var id = +"" + this._currentRoute.snapshot.params['id'];
        if (id == "0nuevo") {
            this.pageTitle = "Nuevo Producto";
        }
        else {
            this.pageTitle += ": " + id;
        }
        this.producto = this._productosService.getProducto();
    };
    EditarProductoComponent.prototype.onRatingClicked = function (message) {
    };
    return EditarProductoComponent;
}());
EditarProductoComponent = __decorate([
    core_1.Component({
        selector: 'pm-producto',
        templateUrl: './editar-producto.component.html',
        providers: [producto_service_1.ProductoService],
        styleUrls: ['./producto.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        producto_service_1.ProductoService])
], EditarProductoComponent);
exports.EditarProductoComponent = EditarProductoComponent;
//# sourceMappingURL=producto.component.js.map