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
var login_service_1 = require("../../../login/login.service");
var login_component_1 = require("../../../login/login.component");
var MenuLoginComponent = (function () {
    function MenuLoginComponent(_loginService, _router, _login) {
        this._loginService = _loginService;
        this._router = _router;
        this._login = _login;
        this.pageTitle = "Login";
        this.logoutClicked = new core_1.EventEmitter();
        this.isLogged = _login.logginOk;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser != null) {
            this.username = currentUser[Object.keys(currentUser)[0]];
            this.rolename = currentUser[Object.keys(currentUser)[2]];
            this.isLogged = true;
        }
        else {
            this.username = '';
            this.isLogged = false;
        }
    }
    MenuLoginComponent.prototype.ngOnChanges = function () {
        this.isLogged = this._login.logginOk;
        if (this.isLogged) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser != null) {
                this.username = currentUser[Object.keys(currentUser)[0]];
                this.rolename = currentUser[Object.keys(currentUser)[2]];
                this.isLogged = true;
                console.log(this.username);
            }
            else {
                this.username = '';
                this.isLogged = false;
            }
        }
    };
    MenuLoginComponent.prototype.onLogout = function () {
        this.isLogged = true;
        this.logoutClicked.emit(this.isLogged);
        this._loginService.logout();
        this.username = '';
        this._router.navigate(['/login']);
    };
    MenuLoginComponent.prototype.onClick = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser[Object.keys(currentUser)[3]];
        this._router.navigate(['//usuarios/detalle/' + userId]);
    };
    return MenuLoginComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MenuLoginComponent.prototype, "isLogged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MenuLoginComponent.prototype, "logoutClicked", void 0);
MenuLoginComponent = __decorate([
    core_1.Component({
        selector: 'vo2-menu-login',
        templateUrl: './menu-login.component.html',
        styleUrls: ['./menu-login.component.css'],
        providers: [login_service_1.LoginService, login_component_1.LoginComponent]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router,
        login_component_1.LoginComponent])
], MenuLoginComponent);
exports.MenuLoginComponent = MenuLoginComponent;
//# sourceMappingURL=menu-login.component.js.map