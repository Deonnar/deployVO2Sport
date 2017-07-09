"use strict";
var Producto = (function () {
    function Producto() {
    }
    Producto.prototype.setNombre = function (_nombre) {
        this.nombre = _nombre;
    };
    Producto.prototype.getnombre = function () {
        return this.nombre;
    };
    Producto.prototype.setName = function (_codigo) {
        this.codigo = _codigo;
    };
    Producto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Producto.prototype.setDescription = function (_descripcion) {
        this.descripcion = _descripcion;
    };
    Producto.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Producto.prototype.setMarca = function (_marca) {
        this.marca = _marca;
    };
    Producto.prototype.getMarca = function () {
        return this.marca;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (_precio) {
        this.precio = _precio;
    };
    Producto.prototype.setStock = function (_stock) {
        this.stock = _stock;
    };
    Producto.prototype.getStock = function () {
        return this.stock;
    };
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map