"use strict";
var product_1 = require("../home/sale_product/product");
var Cart = (function () {
    function Cart() {
        this.CartItems = new Array();
    }
    return Cart;
}());
exports.Cart = Cart;
var CartItems = (function () {
    function CartItems() {
        this.Product = new product_1.Product();
    }
    return CartItems;
}());
exports.CartItems = CartItems;
//# sourceMappingURL=cart.js.map