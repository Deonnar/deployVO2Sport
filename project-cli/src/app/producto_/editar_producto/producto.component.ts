import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'pm-producto',
    templateUrl: './editar-producto.component.html',
    providers: [ProductoService],
    styleUrls: ['./producto.component.css']
})

export class EditarProductoComponent implements OnInit {
    pageTitle: string = "Editar Producto";
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    producto: Producto;

    constructor(private _currentRoute: ActivatedRoute,
                    private _router : Router,
                    private _productosService : ProductoService) {}

    toggleImage(): void {
         this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        let id =+ "" + this._currentRoute.snapshot.params['id'];
          
        if(id=="0nuevo"){
         this.pageTitle ="Nuevo Producto";
        }else{
            this.pageTitle +=  `: ${id}`;
    //        this.usuario = this._usuariosService.getUsuario(id);
        }
        this.producto = this._productosService.getProducto();
     }

    onRatingClicked(message:string):void {
    }
}

