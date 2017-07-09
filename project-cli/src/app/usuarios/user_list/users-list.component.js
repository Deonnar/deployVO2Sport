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
var UserListComponent = (function () {
    function UserListComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.pageTitle = "Lista de Usuarios";
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getAll()
            .subscribe(function (users) { return _this.itemsUsers = _this.renderUsers(users); }, function (error) { return console.log(error); });
    };
    UserListComponent.prototype.renderUsers = function (users) {
        var usersToRender = [];
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            var userId = user[Object.keys(user)[0]];
            var name_1 = user[Object.keys(user)[1]];
            var surname = user[Object.keys(user)[2]];
            var address = user[Object.keys(user)[3]];
            var email = user[Object.keys(user)[4]];
            var phone = user[Object.keys(user)[5]];
            var active = user[Object.keys(user)[6]];
            var userAuthId = user[Object.keys(user)[7]];
            var _user = new user_1.User();
            _user.setId(userId);
            _user.setName(name_1);
            _user.setSurname(surname);
            _user.setAddress(address);
            _user.setEmail(email);
            _user.setPhone(phone);
            _user.setActive(active);
            _user.setUserAuth(userAuthId);
            usersToRender.push(_user);
        }
        return usersToRender;
    };
    UserListComponent.prototype.onRemoveRow = function (id) {
        console.log(id);
        this._userService.deleteWithId(id)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/usuarios/']);
    };
    UserListComponent.prototype.onNewUser = function () {
        this._router.navigate(['/usuarios/nuevo']);
    };
    UserListComponent.prototype.onEditRow = function (id) {
        this._router.navigate(['/usuarios/editar/' + id]);
    };
    UserListComponent.prototype.onDetailRow = function (id) {
        this._router.navigate(['/usuarios/detalle/' + id]);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-userList',
        templateUrl: './users-list.component.html',
        styleUrls: ['./users-list.component.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=users-list.component.js.map