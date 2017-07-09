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
var cart_1 = require("./cart");
var cart_service_1 = require("./cart.service");
var CartListComponent = (function () {
    function CartListComponent(_cartService) {
        this._cartService = _cartService;
        this.pageTitle = "Mi Carrito";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
        this.showInfoDelivery = false;
        this.cart = new cart_1.Cart();
    }
    CartListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser[Object.keys(currentUser)[3]];
        this._cartService.get(userId).subscribe((function (obtainedCarritos) {
            _this.cart = obtainedCarritos;
            _this.itemsCart = _this.cart.CartItems;
        }), (function (error) { return console.log(error); }));
    };
    CartListComponent.prototype.toggleInfoDelivery = function () {
        this.showInfoDelivery = !this.showInfoDelivery;
    };
    CartListComponent.prototype.onCheckOut = function (cartId) {
        var _this = this;
        console.log(cartId);
        console.log(this.cart.Address);
        console.log(this.cart.Phone);
        this.cart.CartItems = null;
        this.cart.Quantity = null;
        this.cart.UserId = null;
        this._cartService.checkOut(this.cart).subscribe((function (response) {
            _this.cart = response;
            if (!response.Result) {
                _this.messageError = "Se produjo un error.";
            }
            else {
                localStorage.removeItem('cartUser');
                _this.message = "Compra existosa!!!.";
            }
        }), (function (error) {
            console.log(error);
            _this.messageError = "Se produjo un error.";
        }));
    };
    CartListComponent.prototype.onRemoveRow = function (productId) {
        var _this = this;
        this._cartService.deleteItem(this.cart.CartId, productId)
            .subscribe((function (obtainedCarritos) {
            _this.cart = obtainedCarritos;
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var userId = currentUser[Object.keys(currentUser)[3]];
            _this._cartService.get(userId).subscribe((function (obtainedCarritos) {
                _this.cart = obtainedCarritos;
                _this.itemsCart = _this.cart.CartItems;
                console.log(_this.cart);
                if (_this.cart.CartItems == null) {
                    localStorage.removeItem('cartUser');
                    console.log(JSON.parse(localStorage.getItem('cartUser')));
                }
                else {
                    console.log("Hay:" + _this.itemsCart.length + " items");
                }
            }), (function (error) { return console.log(error); }));
        }), function (error) { return console.log(error); });
    };
    return CartListComponent;
}());
CartListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-cart-list',
        templateUrl: './cart-list.component.html',
        providers: [cart_service_1.CartService],
        styleUrls: ['./cart-list.component.css']
    }),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartListComponent);
exports.CartListComponent = CartListComponent;
//# sourceMappingURL=cart-list.component.js.map