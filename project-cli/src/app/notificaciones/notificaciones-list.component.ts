import { Component, OnInit } from '@angular/core';
import { Notificaciones } from './notificaciones';
import { NotificacionesService } from './notificaciones.service';


@Component({
    selector: 'pm-notificaciones',
    templateUrl: './notificaciones-list.component.html',
    providers: [NotificacionesService],
    styleUrls: ['./notificaciones-list.component.css']
})
export class NotificacionesListComponent implements OnInit {
    pageTitle: string = "Mi Notificaciones";
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    notificaciones: Array<Notificaciones>;

    constructor(private _notificacionesService : NotificacionesService) {
     // esta forma de escribir el parametro en el constructor lo que hace es:
     // 1) declara un parametro de tipo NotificacionessService en el constructor
     // 2) declara un atributo de clase privado llamado _notificacionesService
     // 3) asigna el valor del parámetro al atributo de la clase
    }

    toggleImage(): void {
         this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        console.log("aca obtengo datos del backend!");
        this.notificaciones = this._notificacionesService.getNotificaciones();
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'Notificacioness List: ' + message;
    }
}

