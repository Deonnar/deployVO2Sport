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
var reviews_service_1 = require("./reviews.service");
var reviews_1 = require("./reviews");
var ReviewsListComponent = (function () {
    function ReviewsListComponent(_reviewsService, _router) {
        this._reviewsService = _reviewsService;
        this._router = _router;
        this.pageTitle = "Lista de Productos con reviews pendientes";
        this.submitted = false;
        this.review = new reviews_1.Reviews();
    }
    ReviewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser[Object.keys(currentUser)[3]];
        this._reviewsService.getReviewsByUser(userId)
            .subscribe(function (products) {
            _this.productos = products;
        })
            , function (error) { return console.log('error: ' + error); };
    };
    ReviewsListComponent.prototype.onReview = function (productId) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser[Object.keys(currentUser)[3]];
        this.review.UserId = userId;
        this.review.ProductId = productId;
        this._reviewsService.create(this.review)
            .subscribe(function (response) {
            _this.review = response;
        })
            , function (error) { return console.log('error: ' + error); };
        this._router.navigate(['/home/']);
    };
    return ReviewsListComponent;
}());
ReviewsListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-reviewsproducts',
        templateUrl: './reviews-list.component.html',
        styleUrls: ['./reviews-list.component.css'],
        providers: [reviews_service_1.ReviewsService]
    }),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService,
        router_1.Router])
], ReviewsListComponent);
exports.ReviewsListComponent = ReviewsListComponent;
//# sourceMappingURL=reviews-list.component.js.map