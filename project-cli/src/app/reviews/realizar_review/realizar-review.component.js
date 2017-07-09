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
var realizar_review_service_1 = require("./realizar-review.service");
var ReviewComponent = (function () {
    function ReviewComponent(_reviewService) {
        this._reviewService = _reviewService;
        this.ReviewsPendientes = "Reviews Pendientes";
        this.ReviewsRealizadas = "Reviews Realizadas";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
        // esta forma de escribir el parametro en el constructor lo que hace es:
        // 1) declara un parametro de tipo ReviewsService en el constructor
        // 2) declara un atributo de clase privado llamado _reviewsService
        // 3) asigna el valor del parámetro al atributo de la clase
    }
    ReviewComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ReviewComponent.prototype.ngOnInit = function () {
        //console.log("aca obtengo datos del backend!");
        //this.reviews = this._reviewsService.getReviews();
    };
    ReviewComponent.prototype.onRatingClicked = function (message) {
    };
    return ReviewComponent;
}());
ReviewComponent = __decorate([
    core_1.Component({
        selector: 'pm-review',
        templateUrl: './realizar-review.component.html',
        providers: [realizar_review_service_1.ReviewService],
        styleUrls: ['./realizar-review.component.css']
    }),
    __metadata("design:paramtypes", [realizar_review_service_1.ReviewService])
], ReviewComponent);
exports.ReviewComponent = ReviewComponent;
//# sourceMappingURL=realizar-review.component.js.map