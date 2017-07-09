"use strict";
var product_1 = require("../home/sale_product/product");
var Purchase = (function () {
    function Purchase() {
        this.ProductLines = new Array();
    }
    return Purchase;
}());
exports.Purchase = Purchase;
var ProductItems = (function () {
    function ProductItems() {
        this.Product = new product_1.Product();
    }
    return ProductItems;
}());
exports.ProductItems = ProductItems;
//# sourceMappingURL=purchase.js.map