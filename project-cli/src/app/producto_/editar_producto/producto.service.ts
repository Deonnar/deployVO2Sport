import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductoService {
    
    getProducto(): Producto {
    return null;       
        
    }
}