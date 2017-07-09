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
var router_1 = require("@angular/router");
var product_1 = require("../product");
var product_service_1 = require("../product.service");
var cart_1 = require("../../../carrito/cart");
var cart_service_1 = require("../../../carrito/cart.service");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(_productService, _currentRoute, _router, _cartService) {
        this._productService = _productService;
        this._currentRoute = _currentRoute;
        this._router = _router;
        this._cartService = _cartService;
        this.pageTitle = "Detalles del Producto";
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = new product_1.Product();
        this.quantity = 1;
        var id = this._currentRoute.snapshot.params['id'];
        this._productService.get(id)
            .subscribe(function (_product) { return _this.product = _product; })
            , function (error) { return console.log('error: ' + error); };
        // this.pageTitle +=  `: ${id}`;
    };
    ProductDetailsComponent.prototype.addToCart = function (productId) {
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
                .subscribe(function (_cart) {
                _this.cart = _cart;
                _this.message = "Se agregó al carrito";
            })
                , function (error) {
                    console.log('error: ' + error);
                    _this.messageError = "Se produjo un error";
                };
        }
        else {
            this._cartService.get(this.cart.UserId)
                .subscribe(function (_cart) {
                _this.cart = _cart;
                console.log(_this.cart);
                var cartUser = localStorage.setItem('cartUser', JSON.stringify(_this.cart));
                _this._cartService.update(_this.cart.CartId, _this.cartItem.productId, _this.cartItem.quantity)
                    .subscribe(function (_cart) {
                    _this.cart = _cart;
                    _this.message = "Se agregó al carrito";
                })
                    , function (error) {
                        console.log('error: ' + error);
                        _this.messageError = "Se produjo un error";
                    };
            })
                , function (error) { return console.log('error: ' + error); };
        }
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: 'vo2-product-details',
        templateUrl: './product-details.component.html',
        providers: [product_service_1.ProductService, cart_service_1.CartService],
        styleUrls: ['./product-details.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        router_1.Router,
        cart_service_1.CartService])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map