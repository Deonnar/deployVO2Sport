import { Component, OnInit } from '@angular/core';
import { ProductField } from '../product_fields';
import { ProductFieldService } from '../product_fields.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-product_fieldsList',
    templateUrl: './product_fields_list.component.html',
    styleUrls: ['./product_fields_list.component.css'],
    providers: [ProductFieldService]
})
export class ProductFieldListComponent implements OnInit {
    pageTitle: string = "Lista de Campos de Productos";
    message : string;
    itemsProductField: Array<ProductField>;

    constructor(private _product_fieldsService : ProductFieldService,
                 private _router : Router) {
       
    }   

    ngOnInit(): void {
        this._product_fieldsService.getAll()
             .subscribe((productField:Array<ProductField>) => this.itemsProductField =  productField),
	                       (error:Error)  => console.log(error);
                         
    }

    onRemoveRow(id:number):void{
       
         this._product_fieldsService.deleteWithId(id)
                                .subscribe(
                                    result =>{ 
                                        console.log(result);
                                        this.message = "Se eliminó el item";
                                    },
                                (error:Error)  => console.log(error)
                                );
    
         this._router.navigate(['/productos/campos']); 
    }

    onNewProductField():void{
        console.log('new')
        this._router.navigate(['/productos/campos/nuevo']); 
    }
    onEditRow(id:number):void{
        this._router.navigate(['/productos/campos/editar/'+id]); 
    } 
   
}

