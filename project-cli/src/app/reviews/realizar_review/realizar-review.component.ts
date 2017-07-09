import { Component, OnInit } from '@angular/core';
import { Review } from './realizar-review';
import { ReviewService } from './realizar-review.service';


@Component({
    selector: 'pm-review',
    templateUrl: './realizar-review.component.html',
    providers: [ReviewService],
    styleUrls: ['./realizar-review.component.css']
})
export class ReviewComponent implements OnInit {
    ReviewsPendientes: string = "Reviews Pendientes";
    ReviewsRealizadas: string = "Reviews Realizadas";
     
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    reviews: null;

    constructor(private _reviewService : ReviewService) {
     // esta forma de escribir el parametro en el constructor lo que hace es:
     // 1) declara un parametro de tipo ReviewsService en el constructor
     // 2) declara un atributo de clase privado llamado _reviewsService
     // 3) asigna el valor del parámetro al atributo de la clase
    }

    toggleImage(): void {
         this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        //console.log("aca obtengo datos del backend!");
        //this.reviews = this._reviewsService.getReviews();
    }

    onRatingClicked(message:string):void {
    }
}

