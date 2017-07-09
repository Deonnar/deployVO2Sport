"use strict";
var Login = (function () {
    function Login() {
    }
    Login.prototype.setUserName = function (_userName) {
        this.userName = _userName;
    };
    Login.prototype.getUserName = function () {
        return this.userName;
    };
    Login.prototype.setUserPassword = function (_password) {
        this.password = _password;
    };
    Login.prototype.getPassword = function () {
        return this.password;
    };
    Login.prototype.setToken = function (_token) {
        this.token = _token;
    };
    Login.prototype.getToken = function () {
        return this.token;
    };
    Login.prototype.setRole = function (_role) {
        this.role = _role;
    };
    Login.prototype.getRole = function () {
        return this.role;
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map