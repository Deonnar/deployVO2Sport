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
var CategoryService = (function () {
    function CategoryService(_httpService) {
        this._httpService = _httpService;
        this.ROOT_URL = 'http://localhost:3600/api/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    CategoryService.prototype.get = function (val) {
        var url = this.ROOT_URL + "category/" + val;
        return this._httpService.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getAll = function () {
        var url = this.ROOT_URL + "category/";
        return this._httpService.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.create = function (param) {
        var body = JSON.stringify(param);
        var url = this.ROOT_URL + "category/";
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.deleteWithId = function (val) {
        var url = this.ROOT_URL + "category/" + val;
        return this._httpService
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.update = function (param) {
        var body = JSON.stringify(param);
        var url = this.ROOT_URL + "category/";
        return this._httpService
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CategoryService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    CategoryService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map