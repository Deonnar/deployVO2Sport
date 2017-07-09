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
var filterDateComponent = (function () {
    function filterDateComponent() {
        this.filterClicked = new core_1.EventEmitter();
    }
    filterDateComponent.prototype.onfilter = function () {
        this.filterClicked.emit(this.dataFilter);
    };
    return filterDateComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", filterDate)
], filterDateComponent.prototype, "dataFilter", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], filterDateComponent.prototype, "filterClicked", void 0);
filterDateComponent = __decorate([
    core_1.Component({
        selector: 'vo2-filterDate',
        templateUrl: './filterDate.component.html',
        styleUrls: ['./filterDate.component.css']
    }),
    __metadata("design:paramtypes", [])
], filterDateComponent);
exports.filterDateComponent = filterDateComponent;
var filterDate = (function () {
    function filterDate(showCboCategories, showTxtNumber) {
        this.showCboCategories = true;
        this.showTxtNumber = true;
        this.txtNumberValue = 1;
        this.cboCategoryValue = 1;
        var someDate = new Date();
        var numberOfDaysToAdd = -10;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        this.dateFrom = someDate.toLocaleDateString();
        this.dateTo = new Date().toLocaleDateString();
        this.showCboCategories = showCboCategories;
        this.showTxtNumber = showTxtNumber;
    }
    filterDate.prototype.getDateFrom = function () {
        return this.dateFrom;
    };
    filterDate.prototype.getDateTo = function () {
        return this.dateTo;
    };
    filterDate.prototype.getTxtNumber = function () {
        return this.txtNumberValue;
    };
    filterDate.prototype.getCategory = function () {
        return this.cboCategoryValue;
    };
    filterDate.prototype.setShowCboCategories = function (value) {
        this.showCboCategories = value;
    };
    filterDate.prototype.setShowTxtNumber = function (value) {
        this.showTxtNumber = value;
    };
    return filterDate;
}());
exports.filterDate = filterDate;
//# sourceMappingURL=filterDate.component.js.map