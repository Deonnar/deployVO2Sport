"use strict";
var Notificaciones = (function () {
    function Notificaciones(id, carrito) {
        this.id = id;
        this.carrito = carrito;
        this.isPendingPurchase = true;
        this.isPendingReview = false;
    }
    return Notificaciones;
}());
exports.Notificaciones = Notificaciones;
//# sourceMappingURL=notificaciones.js.map