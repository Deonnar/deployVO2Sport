import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-categoryList',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css'],
    providers: [CategoryService]
})
export class CategoryListComponent implements OnInit {
    pageTitle: string = "Lista de Categorias";
  
    itemsCategories: Array<Category>;

    constructor(private _categoryService : CategoryService,
                 private _router : Router) {
       
    }
   

    ngOnInit(): void {
        this._categoryService.getAll()
             .subscribe((categories:Array<Category>) => this.itemsCategories =  categories),
	                       (error:Error)  => console.log(error);
                         
    }

  

    onRemoveRow(id:number):void{
       
         this._categoryService.deleteWithId(id)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                );
         this._router.navigate(['/categorias/']); 
    }

    onNewCategory():void{
        this._router.navigate(['/categorias/nueva']); 
    }
    onEditRow(id:number):void{
        this._router.navigate(['/categorias/editar/'+id]); 
    }


  
   
}

