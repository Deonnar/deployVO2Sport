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
var UserDetailsComponent = (function () {
    function UserDetailsComponent(_userService, _router, _currentRoute) {
        this._userService = _userService;
        this._router = _router;
        this._currentRoute = _currentRoute;
        this.submitted = false;
        this.pageTitle = "Detalle de Usuario";
        this.user = new user_1.User();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._currentRoute.snapshot.params['id'];
        this._userService.get(id)
            .subscribe(function (obtainedUser) { return _this.user = _this.renderUser(obtainedUser); }, function (error) { return console.log(error); });
    };
    UserDetailsComponent.prototype.renderUser = function (obtainedUser) {
        var userId = obtainedUser[Object.keys(obtainedUser)[0]];
        var name = obtainedUser[Object.keys(obtainedUser)[1]];
        var surname = obtainedUser[Object.keys(obtainedUser)[2]];
        var address = obtainedUser[Object.keys(obtainedUser)[3]];
        var email = obtainedUser[Object.keys(obtainedUser)[4]];
        var phone = obtainedUser[Object.keys(obtainedUser)[5]];
        var active = obtainedUser[Object.keys(obtainedUser)[6]];
        var userAuthId = obtainedUser[Object.keys(obtainedUser)[7]];
        var userName = obtainedUser[Object.keys(obtainedUser)[8]];
        var _user = new user_1.User();
        _user.setId(userId);
        _user.setName(name);
        _user.setSurname(surname);
        _user.setAddress(address);
        _user.setEmail(email);
        _user.setPhone(phone);
        _user.setActive(active);
        _user.setUserAuth(userAuthId);
        _user.setUserName(userName);
        this.user = _user;
        return _user;
    };
    UserDetailsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._userService.update(this.user)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/usuarios']);
    };
    UserDetailsComponent.prototype.onEditRow = function (id) {
        this._router.navigate(['/usuarios/editar/' + id]);
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    core_1.Component({
        selector: 'vo2-userDetails',
        templateUrl: './user-details.component.html',
        styleUrls: ['./user-details.component.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute])
], UserDetailsComponent);
exports.UserDetailsComponent = UserDetailsComponent;
//# sourceMappingURL=user-details.component.js.map