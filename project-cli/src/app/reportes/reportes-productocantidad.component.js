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
var reportes_1 = require("./reportes");
var reportes_service_1 = require("./reportes.service");
var filterDate_component_1 = require("../shared/filters/filterDate.component");
var ReportesProductoCantidadComponent = (function () {
    function ReportesProductoCantidadComponent(_serviceReport) {
        this._serviceReport = _serviceReport;
        this.pageTitle = "Reportes cantidad de productos mas vendidos";
        this.aDate = new filterDate_component_1.filterDate(false, true);
    }
    ReportesProductoCantidadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._serviceReport.getMostProductSale()
            .subscribe(function (products) { return _this.itemsProducts = _this.renderProducts(products); }, function (error) { return console.log(error); });
    };
    ReportesProductoCantidadComponent.prototype.renderProducts = function (products) {
        var productsToRender = [];
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            var name_1 = product[Object.keys(product)[0]];
            var count = product[Object.keys(product)[1]];
            var dateSale = product[Object.keys(product)[2]];
            var prod = new reportes_1.ProductQuantity(name_1, count, dateSale);
            productsToRender.push(prod);
        }
        return productsToRender;
    };
    ReportesProductoCantidadComponent.prototype.onFilterClicked = function (obj) {
        var _this = this;
        this._serviceReport.setParemetersProductQuantity(obj.getDateFrom(), obj.getDateTo(), obj.getTxtNumber());
        this._serviceReport.getMostProductSale()
            .subscribe(function (products) { return _this.itemsProducts = _this.renderProducts(products); }, function (error) { return console.log(error); });
    };
    return ReportesProductoCantidadComponent;
}());
ReportesProductoCantidadComponent = __decorate([
    core_1.Component({
        selector: 'vo2-reportProductQuantity',
        templateUrl: './reportes-productocantidad.component.html',
        styleUrls: ['./reportes-productocantidad.component.css'],
        providers: [reportes_service_1.ReportesService],
    }),
    __metadata("design:paramtypes", [reportes_service_1.ReportesService])
], ReportesProductoCantidadComponent);
exports.ReportesProductoCantidadComponent = ReportesProductoCantidadComponent;
//# sourceMappingURL=reportes-productocantidad.component.js.map