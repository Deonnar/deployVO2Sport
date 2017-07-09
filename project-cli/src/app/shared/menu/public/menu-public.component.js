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
var login_service_1 = require("../../../login/login.service");
var router_1 = require("@angular/router");
var MenuPublicComponent = (function () {
    function MenuPublicComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.isLogged = false;
        if (currentUser != null) {
            this.username = currentUser[Object.keys(currentUser)[0]];
            this.rolename = currentUser[Object.keys(currentUser)[2]];
            switch (this.rolename) {
                case "Administrador":
                    this.Administrador = true;
                    this.Gerente = false;
                    this.Cliente = false;
                    break;
                case "Gerente":
                    this.Administrador = false;
                    this.Gerente = true;
                    this.Cliente = false;
                    break;
                case "Cliente":
                    this.Administrador = false;
                    this.Gerente = false;
                    this.Cliente = true;
                    break;
            }
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    }
    MenuPublicComponent.prototype.onLogoutClicked = function (obj) {
        if (obj) {
            this.Administrador = false;
            this.Gerente = false;
            this.Cliente = false;
            this.isLogged = false;
        }
    };
    return MenuPublicComponent;
}());
MenuPublicComponent = __decorate([
    core_1.Component({
        selector: 'vo2-menu-public',
        templateUrl: './menu-public.component.html',
        styleUrls: ['./menu-public.component.css'],
        providers: [login_service_1.LoginService],
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], MenuPublicComponent);
exports.MenuPublicComponent = MenuPublicComponent;
//# sourceMappingURL=menu-public.component.js.map