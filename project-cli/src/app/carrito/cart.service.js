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
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var CartService = (function () {
    function CartService(_httpService) {
        this._httpService = _httpService;
        this.ROOT_URL = 'http://localhost:3600/api/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        var cartUser = JSON.parse(localStorage.getItem('cartUser'));
    }
    CartService.prototype.get = function (userId) {
        var url = this.ROOT_URL + "user/" + userId + "/cart";
        return this._httpService.get(url)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    CartService.prototype.add = function (param) {
        var body = JSON.stringify(param);
        localStorage.setItem('cartUser', body);
        var url = this.ROOT_URL + "/cart/";
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CartService.prototype.deleteItem = function (cartId, productId) {
        var url = this.ROOT_URL;
        return this._httpService
            .delete(url + "cart/" + cartId + "/product/" + productId, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CartService.prototype.update = function (cartId, productId, quantity) {
        var body = null;
        var url = this.ROOT_URL + "cart/" + cartId + "/product/" + productId + "/" + quantity;
        return this._httpService
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CartService.prototype.checkOut = function (param) {
        var body = JSON.stringify(param);
        console.log(body);
        var url = this.ROOT_URL + "/purchase/";
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CartService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CartService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return CartService;
}());
CartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map