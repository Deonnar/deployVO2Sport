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
var product_service_1 = require("../product.service");
var router_1 = require("@angular/router");
var cart_service_1 = require("../../../carrito/cart.service");
var cart_1 = require("../../../carrito/cart");
var SaleProductsComponent = (function () {
    function SaleProductsComponent(_productService, _cartService, _router) {
        this._productService = _productService;
        this._cartService = _cartService;
        this._router = _router;
        this.pageTitle = "Lista de Productos";
    }
    SaleProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getAll()
            .subscribe(function (products) {
            _this.productos = products;
        })
            , function (error) { return console.log('error: ' + error); };
    };
    SaleProductsComponent.prototype.onDetailRow = function (id) {
        this._router.navigate(['/productos/detalles/' + id]);
    };
    SaleProductsComponent.prototype.addToCart = function (productId) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.cart = new cart_1.Cart();
        this.cart.UserId = currentUser[Object.keys(currentUser)[3]];
        console.log(this.cart.UserId);
        this.cartItem = new cart_1.CartItems();
        this.cartItem.productId = productId;
        this.cartItem.quantity = 1;
        var cartUser = JSON.parse(localStorage.getItem('cartUser'));
        console.log(cartUser);
        if (cartUser == null) {
            this.cart.CartItems.push(this.cartItem);
            this._cartService.add(this.cart)
                .subscribe(function (_cart) { return _this.cart = _cart; })
                , function (error) { return console.log('error: ' + error); };
        }
        else {
            this._cartService.get(this.cart.UserId)
                .subscribe(function (_cart) {
                _this.cart = _cart;
                console.log(_this.cart);
                var cartUser = localStorage.setItem('cartUser', JSON.stringify(_this.cart));
                _this._cartService.update(_this.cart.CartId, _this.cartItem.productId, _this.cartItem.quantity)
                    .subscribe(function (_cart) { return _this.cart = _cart; })
                    , function (error) { return console.log('error: ' + error); };
            })
                , function (error) { return console.log('error: ' + error); };
        }
    };
    return SaleProductsComponent;
}());
SaleProductsComponent = __decorate([
    core_1.Component({
        selector: 'vo2-saleproducts',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.css'],
        providers: [product_service_1.ProductService, cart_service_1.CartService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, cart_service_1.CartService,
        router_1.Router])
], SaleProductsComponent);
exports.SaleProductsComponent = SaleProductsComponent;
//# sourceMappingURL=product-list.component.js.map