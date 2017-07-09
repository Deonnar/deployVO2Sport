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
var productos_service_1 = require("./productos.service");
var VerProductoComponent = (function () {
    function VerProductoComponent(_productosService) {
        this._productosService = _productosService;
        this.pageTitle = "Producto";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
        // esta forma de escribir el parametro en el constructor lo que hace es:
        // 1) declara un parametro de tipo ProductoService en el constructor
        // 2) declara un atributo de clase privado llamado _rolService
        // 3) asigna el valor del parámetro al atributo de la clase
    }
    VerProductoComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    VerProductoComponent.prototype.ngOnInit = function () {
        this.productos = this._productosService.getProductos();
    };
    VerProductoComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Producto List: ' + message;
    };
    return VerProductoComponent;
}());
VerProductoComponent = __decorate([
    core_1.Component({
        selector: 'pm-ver-productos',
        templateUrl: './productos.component.html',
        providers: [productos_service_1.ProductoService],
        styleUrls: ['./productos.component.css']
    }),
    __metadata("design:paramtypes", [productos_service_1.ProductoService])
], VerProductoComponent);
exports.VerProductoComponent = VerProductoComponent;
//# sourceMappingURL=productos-list.component.js.map