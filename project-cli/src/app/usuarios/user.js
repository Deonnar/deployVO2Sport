"use strict";
var User = (function () {
    function User() {
    }
    User.prototype.setId = function (_userId) {
        this.userId = _userId;
    };
    User.prototype.getId = function () {
        return this.userId;
    };
    User.prototype.setName = function (_name) {
        this.name = _name;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setSurname = function (_surname) {
        this.surname = _surname;
    };
    User.prototype.getSurname = function () {
        return this.surname;
    };
    User.prototype.setAddress = function (_address) {
        this.address = _address;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    User.prototype.setEmail = function (_email) {
        this.email = _email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setPhone = function (_phone) {
        this.phone = _phone;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.setActive = function (_active) {
        this.active = _active;
    };
    User.prototype.getActive = function () {
        return this.active;
    };
    User.prototype.setUserAuth = function (_userAuthId) {
        this.userAuthId = _userAuthId;
    };
    User.prototype.getUserAuth = function () {
        return this.userAuthId;
    };
    User.prototype.setUserName = function (_userName) {
        this.userName = _userName;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setPassword = function (_password) {
        this.password = _password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setRole = function (_role) {
        this.role = _role;
    };
    User.prototype.getRole = function () {
        return this.role;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map