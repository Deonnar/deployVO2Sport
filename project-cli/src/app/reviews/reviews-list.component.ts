import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from "../home/sale_product/product";
import { ReviewsService } from "./reviews.service";
import { Reviews } from "./reviews";


@Component({
    selector: 'vo2-reviewsproducts',
    templateUrl: './reviews-list.component.html',
    styleUrls: ['./reviews-list.component.css'],
    providers: [ReviewsService]
})
export class ReviewsListComponent implements OnInit {
   
    pageTitle: string = "Lista de Productos con reviews pendientes";
   
    productos: Array<Product>;
    review : Reviews;
    submitted = false;
        
    constructor(private _reviewsService : ReviewsService,
                 private _router : Router) { 
                    this.review = new Reviews();
                 }
   

    ngOnInit(): void {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
         let userId = currentUser[Object.keys(currentUser)[3]];

        this._reviewsService.getReviewsByUser(userId)
             .subscribe((products:Array<Product>) =>
              {
                 this.productos =  products;
              })
              
            ,(error:Error)  => console.log('error: '+error);
                         
    }
    onReview(productId: number): void {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let userId = currentUser[Object.keys(currentUser)[3]];
        this.review.UserId = userId;
        this.review.ProductId = productId;

        this._reviewsService.create(this.review)
             .subscribe((response:Reviews) =>
              {
                 this.review =  response;
              })
              
            ,(error:Error)  => console.log('error: '+error);

             this._router.navigate(['/home/']); 
                         
    }
}

