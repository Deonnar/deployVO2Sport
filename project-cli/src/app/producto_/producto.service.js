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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
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
var ProductoService = (function () {
    function ProductoService(_httpService) {
        this._httpService = _httpService;
        this.ROOT_URL = 'http://localhost:3600/api/product/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ProductoService.prototype.get = function (val) {
        var url = this.ROOT_URL;
        return this._httpService.get(url + "/" + val)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductoService.prototype.getAll = function () {
        var url = this.ROOT_URL;
        return this._httpService.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductoService.prototype.create = function (param) {
        var body = JSON.stringify(param);
        console.log('body -- : ' + body);
        var url = this.ROOT_URL;
        console.log('url -- : ' + url);
        console.log('OPTION ------------- : ' + this.options);
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductoService.prototype.deleteWithId = function (val) {
        var url = this.ROOT_URL;
        return this._httpService
            .delete(url + "/" + val, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductoService.prototype.update = function (param) {
        var body = JSON.stringify(param);
        var url = this.ROOT_URL;
        return this._httpService
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductoService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductoService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return ProductoService;
}());
ProductoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map