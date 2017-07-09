import {Component, OnInit} from '@angular/core';
import { Product, Images } from "../product";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from '@angular/router';

import { CategoryService} from "../../categorias/category.service";
import { Category} from "../../categorias/category";

@Component({
   
    selector: 'vo2-productEdit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css'],
    providers: [ProductService,CategoryService]
})
export class ProductEditComponent implements OnInit{
    submitted = false;
     picture: Images;
    pageTitle: string = "Editar Categoría";
     categoyId:string;
    itemsCategories: Array<Category>; 
    product : Product;

    constructor(private _productService : ProductService,
            private _categoryService : CategoryService,
                 private _router : Router,
                 private _currentRoute : ActivatedRoute) {
      this.product= new Product();
    }

    ngOnInit(): void {
        this.product = new Product();
        this.picture = new Images();
       // this.product.Pictures = new Array<Images>();

        let id =+ this._currentRoute.snapshot.params['id'];
        this._categoryService.getAll()
             .subscribe((categories:Array<Category>) => this.itemsCategories =  categories),
	                       (error:Error)  => console.log(error);
        this._productService.get(id)
        .subscribe((obtainedProducto:Product) => this.product =  obtainedProducto),
	                       (error:Error)  => console.log(error);
        
    }

    onSubmit() {
        this.submitted = true;
        this.product.Category = this.categoyId;
        if(this.picture.DataFile != null){
            this.product.Pictures.push(this.picture);
        }
       
        this._productService.update(this.product)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/administrar-productos']); 
    }

    
}
