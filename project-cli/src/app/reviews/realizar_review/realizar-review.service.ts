import { Injectable } from '@angular/core';
import { Review } from './realizar-review';
@Injectable()
export class ReviewService {
     
    getReviews(): Review { return   new Review("1", "123","Demoró la entrega",new Date());   }

}