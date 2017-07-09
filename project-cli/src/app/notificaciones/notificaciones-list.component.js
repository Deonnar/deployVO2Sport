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
var notificaciones_service_1 = require("./notificaciones.service");
var NotificacionesListComponent = (function () {
    function NotificacionesListComponent(_notificacionesService) {
        this._notificacionesService = _notificacionesService;
        this.pageTitle = "Mi Notificaciones";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.showImage = false;
        // esta forma de escribir el parametro en el constructor lo que hace es:
        // 1) declara un parametro de tipo NotificacionessService en el constructor
        // 2) declara un atributo de clase privado llamado _notificacionesService
        // 3) asigna el valor del parámetro al atributo de la clase
    }
    NotificacionesListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    NotificacionesListComponent.prototype.ngOnInit = function () {
        console.log("aca obtengo datos del backend!");
        this.notificaciones = this._notificacionesService.getNotificaciones();
    };
    NotificacionesListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Notificacioness List: ' + message;
    };
    return NotificacionesListComponent;
}());
NotificacionesListComponent = __decorate([
    core_1.Component({
        selector: 'pm-notificaciones',
        templateUrl: './notificaciones-list.component.html',
        providers: [notificaciones_service_1.NotificacionesService],
        styleUrls: ['./notificaciones-list.component.css']
    }),
    __metadata("design:paramtypes", [notificaciones_service_1.NotificacionesService])
], NotificacionesListComponent);
exports.NotificacionesListComponent = NotificacionesListComponent;
//# sourceMappingURL=notificaciones-list.component.js.map