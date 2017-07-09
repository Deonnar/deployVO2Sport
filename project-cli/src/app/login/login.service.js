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
var http_1 = require("@angular/http");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var LoginService = (function () {
    function LoginService(_httpService) {
        this._httpService = _httpService;
        this.ROOT_URL = 'http://localhost:3600/api/';
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.ROOT_URL + "login/";
        return this._httpService.put(url, JSON.stringify({ username: username, password: password }), this.options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var obj = response.json();
            console.log(obj);
            var role = obj[Object.keys(obj)[2]];
            var token = obj[Object.keys(obj)[3]];
            var userId = obj[Object.keys(obj)[4]];
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, role: role, userId: userId }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    LoginService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cartUser');
        console.log(JSON.parse(localStorage.getItem('currentUser')));
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map