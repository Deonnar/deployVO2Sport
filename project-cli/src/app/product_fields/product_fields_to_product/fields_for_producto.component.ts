import { Component, OnInit } from '@angular/core';
import { ProductField } from '../product_fields';
import { ProductFieldtoProduct } from '../product_fields';


import { ProductFieldService } from '../product_fields.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-product_fieldsList',
    templateUrl: './fields_for_producto.component.html',
    styleUrls: ['./fields_for_producto.component.css'],
    providers: [ProductFieldService]
})
export class AddProductFieldToProductComponent implements OnInit {
    pageTitle: string = "Agregar Campos al Producto";
  
    itemsProductField: Array<ProductField>;
    productFieldtoProduct: ProductFieldtoProduct;
    idProduct: Number;
    constructor(private _product_fieldsService : ProductFieldService,
                 private _router : Router,
                  private _currentRoute : ActivatedRoute) {
       
    }   

    ngOnInit(): void {
         let idProduct =+ this._currentRoute.snapshot.params['id'];
            console.log('el ID es: ' + idProduct);
           this._product_fieldsService.fieldId = idProduct;
        this._product_fieldsService.getAll()
             .subscribe((productField:Array<ProductField>) => this.itemsProductField = productField),
	                       (error:Error)  => console.log(error);
        this.productFieldtoProduct = new ProductFieldtoProduct();             
    }

     onAddCategory(idField:number) { 
        var idProduct = this._product_fieldsService.productId;
       this._product_fieldsService.setParametersFieldtoProductField(idProduct, idField);
       
    /*   this._product_fieldsService.createFieldToProduct(idField)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); */
        this._router.navigate(['/productos/campos']); 
    }
   
   
}

