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

import { Purchase } from './purchase';

@Injectable()
export class PurchaseService {
    private ROOT_URL : string = 'http://localhost:3600/api/';
   
    headers: Headers;
    options: RequestOptions;
    constructor(private _httpService: Http) { 
           
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.options = new RequestOptions({ headers: this.headers });
    }
    //purchase details by user
    get(val: number): Observable<Purchase> {
        let url = this.ROOT_URL + "user/" + val + "/purchase/";
         return this._httpService.get(url)
        .map(response =>  response.json())
        .catch(this.handleError);
    }
    
    //purchase list by user
    getAll(val: number): Observable<Array<Purchase>> {
        let url = this.ROOT_URL+ "user/" + val + "/purchase/";
         return this._httpService.get(url)
        .map(response =>  response.json())
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