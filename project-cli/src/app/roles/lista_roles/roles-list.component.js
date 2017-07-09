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
var roles_1 = require("../roles");
var roles_service_1 = require("../roles.service");
var router_1 = require("@angular/router");
var RolesListComponent = (function () {
    function RolesListComponent(_rolesService, _router) {
        this._rolesService = _rolesService;
        this._router = _router;
        this.pageTitle = "Lista de Roles";
    }
    RolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rolesService.getAll()
            .subscribe(function (roles) { return _this.itemsRoles = _this.renderRoles(roles); }, function (error) { return console.log(error); });
    };
    RolesListComponent.prototype.renderRoles = function (roles) {
        var rolesToRender = [];
        for (var _i = 0, roles_2 = roles; _i < roles_2.length; _i++) {
            var rol = roles_2[_i];
            var name_1 = rol[Object.keys(rol)[0]];
            var _rol = new roles_1.Rol();
            _rol.setRoleName(name_1);
            rolesToRender.push(_rol);
        }
        return rolesToRender;
    };
    RolesListComponent.prototype.onNewRole = function () {
        this._router.navigate(['/roles/nueva']);
    };
    RolesListComponent.prototype.onRemoveRow = function (obj) {
        this._rolesService.deleteWithRoleName(obj)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    return RolesListComponent;
}());
RolesListComponent = __decorate([
    core_1.Component({
        selector: 'vo2-rolesList',
        templateUrl: './roles-list.component.html',
        styleUrls: ['./roles-list.component.css'],
        providers: [roles_service_1.RolService]
    }),
    __metadata("design:paramtypes", [roles_service_1.RolService,
        router_1.Router])
], RolesListComponent);
exports.RolesListComponent = RolesListComponent;
//# sourceMappingURL=roles-list.component.js.map