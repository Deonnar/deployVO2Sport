import {Component, OnInit} from '@angular/core';
import { ProductField } from "../product_fields";
import { ProductFieldService } from "../product_fields.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   
    selector: 'vo2-ProductFieldEdit',
    templateUrl: './product_fields_edit.component.html',
    styleUrls: ['./product_fields_edit.component.css'],
    providers: [ProductFieldService]
})
export class ProductFieldEditComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Campos de Productos Categoría";
    
    product_field : ProductField;

    constructor(private _product_Field_Service : ProductFieldService,
                 private _router : Router,
                 private _currentRoute : ActivatedRoute) {
      this.product_field= new ProductField();
    }

    ngOnInit(): void {
        let id =+ this._currentRoute.snapshot.params['id'];
        this._product_Field_Service.get(id)
        .subscribe((obtainedProductField:ProductField) => this.product_field =  obtainedProductField),
	                       (error:Error)  => console.log(error);
        
    }
   

    onSubmit() {
        this.submitted = true;
        this._product_Field_Service.update(this.product_field)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/productos/campos']); 
    }

    
}
