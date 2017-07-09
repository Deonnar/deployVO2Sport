"use strict";
var Review = (function () {
    function Review(id, IdProducto, texto, fecha) {
        this.id = id;
        this.idProducto = IdProducto;
        this.texto = texto;
        this.fecha = fecha;
    }
    return Review;
}());
exports.Review = Review;
//# sourceMappingURL=realizar-review.js.map