"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var notificaciones_1 = require("./notificaciones");
var NotificacionesService = (function () {
    function NotificacionesService() {
    }
    NotificacionesService.prototype.getNotificaciones = function () {
        return [
            new notificaciones_1.Notificaciones("1", 12),
            new notificaciones_1.Notificaciones("2", 5),
            new notificaciones_1.Notificaciones("3", 4),
        ];
    };
    return NotificacionesService;
}());
NotificacionesService = __decorate([
    core_1.Injectable()
], NotificacionesService);
exports.NotificacionesService = NotificacionesService;
//# sourceMappingURL=notificaciones.service.js.map