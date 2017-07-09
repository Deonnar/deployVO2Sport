import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, Images } from "../product";
import { Category } from "../../categorias/category";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService} from "../../categorias/category.service";

@Component({   
    selector: 'vo2-productNew',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.css'],
    providers: [ProductService, CategoryService]
})


export class ProductNewComponent implements OnInit{
    
    pictures: Images[];
    picture: Images;
    submitted = false;
    pageTitle: string = "Nuevo Producto";
    product : Product;
    categoyId:string;
    itemsCategories: Array<Category>; 
    array: String[];

    constructor(private _productService : ProductService,
                    private _categoryService : CategoryService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.product = new Product();
        this.picture = new Images();
        this.product.Pictures = new Array<Images>();
       
       
           this._categoryService.getAll()
             .subscribe((categories:Array<Category>) => this.itemsCategories =  categories),
	                       (error:Error)  => console.log(error);
  
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.categoyId); 
        this.product.Category = this.categoyId;
        this.product.Pictures.push(this.picture);
        this._productService.create(this.product)
                                .subscribe(
                                    result => console.log('va a guardar: ' + result),
                                (error:Error)  => console.log('ErrOR : '+error)
                                ); 
        this._router.navigate(['/administar-productos']); 
    }
    onChange(value:number) {
         console.log(value);
        console.log(value.toString().split(':')[1]); 
        this.categoyId = value.toString().split(':')[1];
        
    }

}
