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
var login_1 = require("./login");
var login_service_1 = require("./login.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Login";
        this.loading = false;
        this.error = '';
        this.isLogged = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userLogin = new login_1.Login();
        this._loginService.logout();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.onLogin();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.loading = true;
        this._loginService.login(this.userLogin.userName, this.userLogin.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.logginOk = true;
                _this._router.navigate(['/home']);
            }
            else {
                _this.error = 'Usuario o contraseña incorrecta.';
                _this.loading = false;
                _this.logginOk = false;
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoginComponent.prototype, "isLogged", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'vo2-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        providers: [login_service_1.LoginService]
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map