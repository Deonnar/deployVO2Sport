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
var ReportesComponent = (function () {
    function ReportesComponent() {
        this.pageTitle = "Reportes";
        this.showSaleByCategory = false;
        this.showMostProductSale = false;
    }
    ReportesComponent.prototype.toggleSaleByCategory = function () {
        this.showSaleByCategory = !this.showSaleByCategory;
        this.pageTitle = "Reportes por Categoría";
    };
    ReportesComponent.prototype.toggleMostProductSale = function () {
        this.showMostProductSale = !this.showMostProductSale;
        this.pageTitle = "Productos mas vendidos";
    };
    return ReportesComponent;
}());
ReportesComponent = __decorate([
    core_1.Component({
        selector: 'pm-reportes',
        templateUrl: './reportes-list.component.html',
        styleUrls: ['./reportes-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], ReportesComponent);
exports.ReportesComponent = ReportesComponent;
//# sourceMappingURL=reportes-list.component.js.map