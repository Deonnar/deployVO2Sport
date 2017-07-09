import { Injectable } from '@angular/core';
import { Producto } from './Productos';
@Injectable()
export class ProductoService {
      id: string;
    nombre: string;
    apellido: string;
    direccion: string;
    email: string;
    telefono: string;
    activo: boolean;

     getProductos(): Array<Producto> {
        return [
           new Producto("Zapatillas","12346","Para verano","Nike","4820",33),
           new Producto("Zapatillas","12346","Para verano","Nike","4820",33),
           new Producto("Zapatillas","12346","Para verano","Nike","4820",33)
        ];
    }

}