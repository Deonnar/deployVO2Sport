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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch"); //para manejar excepciones
require("rxjs/add/operator/do"); //para hacer algo cada vez que llega una request (ej: loggear y ver que llegó.
var ReportesService = (function () {
    function ReportesService(_httpService) {
        this._httpService = _httpService;
        this.ROOT_URL = 'http://localhost:3600/api/';
        this.categoryId = 1;
        this.countRows = 1;
        var someDate = new Date();
        var numberOfDaysToAdd = -10;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        this.dateFrom = someDate.toLocaleDateString();
        this.dateTo = new Date().toLocaleDateString();
        this.WEB_API_URL_SALE_BY_CATEGORY = this.ROOT_URL
            + 'reports/'
            + 'SelesByCategory/'
            + this.categoryId + '?'
            + 'dateFrom=' + this.dateFrom
            + '&dateTo=' + this.dateTo;
        this.WEB_API_URL_PRODUCT_QUANTITY = this.ROOT_URL
            + 'reports/'
            + 'SearchProductSale/?dateFrom=' + this.dateFrom
            + '&dateTo=' + this.dateTo
            + '&count=' + this.countRows;
    }
    ReportesService.prototype.getUrlSalebyCategory = function () {
        return this.WEB_API_URL_SALE_BY_CATEGORY;
    };
    ReportesService.prototype.getUrlProductQuantity = function () {
        return this.WEB_API_URL_PRODUCT_QUANTITY;
    };
    ReportesService.prototype.setParemetersSalebyCategory = function (dateFrom, dateTo, categoryId) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.categoryId = categoryId;
        this.updateUrlsSalebyCategory();
        console.log(this.getUrlSalebyCategory());
    };
    ReportesService.prototype.setParemetersProductQuantity = function (dateFrom, dateTo, countRows) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.countRows = countRows;
        this.updateUrlsProductQuantity();
        console.log(this.getUrlProductQuantity());
    };
    ReportesService.prototype.updateUrlsProductQuantity = function () {
        this.WEB_API_URL_PRODUCT_QUANTITY = this.ROOT_URL
            + 'reports/'
            + '/SearchProductSale/?dateFrom=' + this.dateFrom
            + '&dateTo=' + this.dateTo
            + '&count=' + this.countRows;
    };
    ReportesService.prototype.updateUrlsSalebyCategory = function () {
        this.WEB_API_URL_SALE_BY_CATEGORY = this.ROOT_URL
            + 'reports/'
            + '/SelesByCategory/'
            + this.categoryId + '?'
            + 'dateFrom=' + this.dateFrom
            + '&dateTo=' + this.dateTo;
    };
    ReportesService.prototype.getSaleByCategory = function () {
        return this._httpService.get(this.WEB_API_URL_SALE_BY_CATEGORY)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ReportesService.prototype.getMostProductSale = function () {
        return this._httpService.get(this.WEB_API_URL_PRODUCT_QUANTITY)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ReportesService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ReportesService;
}());
ReportesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ReportesService);
exports.ReportesService = ReportesService;
//# sourceMappingURL=reportes.service.js.map