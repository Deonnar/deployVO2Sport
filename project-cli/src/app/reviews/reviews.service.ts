import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Reviews } from './reviews';
import { Product } from "../home/sale_product/product";

import { uri } from '../uri/uri';
import { UriService } from '../uri/uri.service';


@Injectable()
export class ReviewsService {
    private ROOT_URL : string;//= 'http://localhost:3600/api/';
    headers: Headers;
    options: RequestOptions;
    constructor(private uriService: UriService, private _httpService: Http) { 
            this.ROOT_URL = this.uriService.URI_API_URL;
           
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.options = new RequestOptions({ headers: this.headers });
    }

    getReviewsByUser(val: number): Observable<any> {
        
        let url = this.ROOT_URL;
         return this._httpService.get(url+ "review/user/" + val)
        .map(response =>  response.json())
        .catch(this.handleError);
    }
    
    
    
    create(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+'review/';
        console.log(url);
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    
     private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}