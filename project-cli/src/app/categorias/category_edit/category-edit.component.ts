import {Component, OnInit} from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   
    selector: 'vo2-categoryEdit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.css'],
    providers: [CategoryService]
})
export class CategoryEditComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Editar Categoría";
    
    category : Category;

    constructor(private _categoryService : CategoryService,
                 private _router : Router,
                 private _currentRoute : ActivatedRoute) {
      this.category= new Category();
    }

    ngOnInit(): void {
        let id =+ this._currentRoute.snapshot.params['id'];
        this._categoryService.get(id)
        .subscribe((obtainedCategory:Category) => this.category =  obtainedCategory),
	                       (error:Error)  => console.log(error);
        
    }
    
    onSubmit() {
        this.submitted = true;
        this._categoryService.update(this.category)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/categorias']); 
    }

    
}
