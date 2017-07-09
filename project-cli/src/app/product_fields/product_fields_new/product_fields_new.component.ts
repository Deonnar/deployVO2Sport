import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductField } from "../product_fields";
import { ProductFieldService } from "../product_fields.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   
    selector: 'vo2-product_fields_new',
    templateUrl: './product_fields_new.component.html',
    styleUrls: ['./product_fields_new.component.css'],
    providers: [ProductFieldService]
})
export class ProductFieldNewComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Nuevo Campo";
    productField : ProductField;

    constructor(private _productFieldService : ProductFieldService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.productField = new ProductField();
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.productField);
        this._productFieldService.create(this.productField)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/productos/campos']); 
    }
}
