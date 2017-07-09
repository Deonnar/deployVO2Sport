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
var user_1 = require("../user");
var user_service_1 = require("../user.service");
var router_1 = require("@angular/router");
var UserNewComponent = (function () {
    function UserNewComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Nuevo Usuario";
    }
    UserNewComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User();
    };
    UserNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._userService.create(this.user)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/usuarios']);
    };
    return UserNewComponent;
}());
UserNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-userNew',
        templateUrl: './user-new.component.html',
        styleUrls: ['./user-new.component.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UserNewComponent);
exports.UserNewComponent = UserNewComponent;
//# sourceMappingURL=user-new.component.js.map