import { Injectable } from '@angular/core';
import { Cart } from './cart';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
 
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

import { uri } from '../uri/uri';
import { UriService } from '../uri/uri.service';

@Injectable()
export class CartService {
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
            var cartUser = JSON.parse(localStorage.getItem('cartUser'));
     }

    get(userId : number): Observable<Cart> {
        var url = this.ROOT_URL + "user/"+ userId +"/cart";
        return this._httpService.get(url)
        .map((response : Response) => <Array<Cart>> response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    add(param: any): Observable<any> {
         
        let body = JSON.stringify(param);
        localStorage.setItem('cartUser',  body);
        let url = this.ROOT_URL + "/cart/";
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    deleteItem(cartId: number,productId:number): Observable<any>  {
        let url = this.ROOT_URL;
        return this._httpService
        .delete(url + "cart/" + cartId + "/product/" + productId, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }  

    update(cartId: number, productId:number, quantity:number): Observable<any> {
       
        let body = null;
        let url = this.ROOT_URL + "cart/"+cartId+"/product/"+productId+"/"+quantity;
        return this._httpService
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }   

    checkOut(param: any): Observable<any> {
         
        let body = JSON.stringify(param);
        console.log(body);
        let url = this.ROOT_URL + "/purchase/";
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