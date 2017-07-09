"use strict";
var ProductField = (function () {
    function ProductField() {
    }
    return ProductField;
}());
exports.ProductField = ProductField;
var ProductFieldtoProduct = (function () {
    function ProductFieldtoProduct() {
    }
    ProductFieldtoProduct.prototype.setProduct_ProductFieldId = function (_id) {
        this.Product_ProductFieldId = _id;
    };
    ProductFieldtoProduct.prototype.getProduct_ProductFieldId = function () {
        return this.Product_ProductFieldId;
    };
    ProductFieldtoProduct.prototype.setProduct_ProductId = function (_name) {
        this.Product_ProductId = _name;
    };
    ProductFieldtoProduct.prototype.getProduct_ProductId = function () {
        return this.Product_ProductId;
    };
    return ProductFieldtoProduct;
}());
exports.ProductFieldtoProduct = ProductFieldtoProduct;
//# sourceMappingURL=product_fields.js.map