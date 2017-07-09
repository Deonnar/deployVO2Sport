import { Component, OnInit } from '@angular/core';
import { Producto } from './productos';
import { ProductoService } from './productos.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'pm-ver-productos',
    templateUrl: './producto.component.html',
    providers: [ProductoService],
  
    styleUrls: ['./producto.component.css']
})
export class VerProductoComponent implements OnInit {
    pageTitle: string = "Producto";
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    productos: Array<Producto>;

    constructor(private _productosService : ProductoService,
                private _currentRoute: ActivatedRoute,
                    private _router : Router
    ) {
     // esta forma de escribir el parametro en el constructor lo que hace es:
     // 1) declara un parametro de tipo ProductoService en el constructor
     // 2) declara un atributo de clase privado llamado _rolService
     // 3) asigna el valor del parámetro al atributo de la clase
    }

    toggleImage(): void {
         this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        
        let id =+ "" + this._currentRoute.snapshot.params['id'];
        this.pageTitle +=  `: ${id}`;
        this.productos = this._productosService.getProductos();
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'Producto List: ' + message;
    }
}

