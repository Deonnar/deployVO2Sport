"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CartFilterPipe = (function () {
    function CartFilterPipe() {
    }
    CartFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        // usamos programacíon funcional (similar a las lambdas expressions en .NET)
        // esto se llama 'arrow syntax' (por la flechita :P)
        return filterBy ? value.filter(function (compra) {
            return compra.CartId != -1;
        }) : value;
    };
    return CartFilterPipe;
}());
CartFilterPipe = __decorate([
    core_1.Pipe({
        name: 'compraFilter'
    })
], CartFilterPipe);
exports.CartFilterPipe = CartFilterPipe;
//# sourceMappingURL=cart-filter.pipe.js.map