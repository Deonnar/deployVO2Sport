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
var RolesNewComponent = (function () {
    function RolesNewComponent(_rolesService, _router) {
        this._rolesService = _rolesService;
        this._router = _router;
        this.submitted = false;
        this.pageTitle = "Nuevo Rol";
    }
    RolesNewComponent.prototype.ngOnInit = function () {
        this.role = new roles_1.Rol();
    };
    RolesNewComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this._rolesService.create(this.role)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
        this._router.navigate(['/roles']);
    };
    return RolesNewComponent;
}());
RolesNewComponent = __decorate([
    core_1.Component({
        selector: 'vo2-rolesNew',
        templateUrl: './roles-new.component.html',
        styleUrls: ['./roles-new.component.css'],
        providers: [roles_service_1.RolService]
    }),
    __metadata("design:paramtypes", [roles_service_1.RolService,
        router_1.Router])
], RolesNewComponent);
exports.RolesNewComponent = RolesNewComponent;
//# sourceMappingURL=roles-new.component.js.map