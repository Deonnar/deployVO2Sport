"use strict";
var Producto = (function () {
    function Producto(nombre, codigo, descripcion, marca, precio, stock) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map