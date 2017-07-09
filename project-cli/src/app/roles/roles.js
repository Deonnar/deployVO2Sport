"use strict";
var Rol = (function () {
    function Rol() {
    }
    Rol.prototype.setRoleName = function (_name) {
        this.roleName = _name;
    };
    Rol.prototype.getRoleName = function () {
        return this.roleName;
    };
    return Rol;
}());
exports.Rol = Rol;
//# sourceMappingURL=roles.js.map