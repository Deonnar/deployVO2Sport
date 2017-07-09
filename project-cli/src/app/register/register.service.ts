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
import { Register } from "./register";



@Injectable()
export class RegisterService {
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
    get(val: number): Observable<Register> {
        let url = this.ROOT_URL;
         return this._httpService.get(url+ "user/" + val)
        .map(response =>  response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    

    register(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+ "user/";
        console.log(body);
        return this._httpService
            .post(url, body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let obj = response.json();
                let userid = obj[Object.keys(obj)[0]];
                if (userid) {
                    return true;
                } else {
                    return false;
                }
            });
            
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