import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   
    selector: 'vo2-categoryNew',
    templateUrl: './category-new.component.html',
    styleUrls: ['./category-new.component.css'],
    providers: [CategoryService]
})
export class CategoryNewComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Nueva Categoría";
    category : Category;

    constructor(private _categoryService : CategoryService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.category = new Category();
    }

    onSubmit() {
        this.submitted = true;
        this._categoryService.create(this.category)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/categorias']); 
    }
}
