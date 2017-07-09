"use strict";
var ProductQuantity = (function () {
    function ProductQuantity(productName, count, dateSale) {
        this.productName = productName;
        this.count = count;
        this.dateSale = dateSale;
    }
    return ProductQuantity;
}());
exports.ProductQuantity = ProductQuantity;
var ProductCategory = (function () {
    function ProductCategory(productName, count, dateSale, categoryName) {
        this.productName = productName;
        this.count = count;
        this.dateSale = dateSale;
        this.categoryName = categoryName;
    }
    return ProductCategory;
}());
exports.ProductCategory = ProductCategory;
//# sourceMappingURL=reportes.js.map