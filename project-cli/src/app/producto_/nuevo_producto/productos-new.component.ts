import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-productoNew',
    templateUrl: './producto-new.component.html',
    providers: [ProductoService],  
    styleUrls: ['./productos-list.component.css']
})
export class ProductNewComponent implements OnInit {
     submitted = false;
   
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    producto: Producto;

    constructor(private _currentRoute: ActivatedRoute,
                    private _router : Router,
                    private _productosService : ProductoService) { 
    }

    ngOnInit(): void {
        this.producto = new Producto();
    }

    onSubmit() {
        this.submitted = true;
        this._productosService.create(this.producto)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/administar-productos']); 
    }



}

