import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-productList',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Lista de Productos";
  
    productos: Array<Product>;

    constructor(private _productService : ProductService,
                 private _router : Router) { }
   

    ngOnInit(): void {
        
        this._productService.getProductos()
             .subscribe((products:Array<Product>) => this.productos = products)
            ,(error:Error)  => console.log('error!!!!!!!!!: '+error);
                         
    }

    onRemoveRow(id:number):void{
       
         this._productService.deleteWithId(id)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                );
         this._router.navigate(['/administar-productos']); 
    }

    onNewProduct():void{
        this._router.navigate(['/productos/nuevo']); 
    }
    onEditRow(id:number):void{
        this._router.navigate(['/productos/editar/'+id]); 
    }


  
   
}

