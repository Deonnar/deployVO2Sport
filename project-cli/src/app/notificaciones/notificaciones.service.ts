import { Injectable } from '@angular/core';
import { Notificaciones } from './notificaciones';
@Injectable()
export class NotificacionesService {
     
    getNotificaciones(): Array<Notificaciones> {
        return [
            new Notificaciones("1", 12),
            new Notificaciones("2", 5),
            new Notificaciones("3", 4),
        ];
    }

}