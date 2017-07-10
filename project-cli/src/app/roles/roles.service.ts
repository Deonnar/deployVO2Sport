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

import { uri } from '../uri/uri';
import { UriService } from '../uri/uri.service';

import { Rol } from './roles';

@Injectable()
export class RolService {
    private ROOT_URL : string;// = 'http://localhost:3600/api/';
    private WEB_API_URL_GETALL: string;
    headers: Headers;
    options: RequestOptions;

    constructor(private _httpService: Http, private uriService: UriService ) { 
            this.ROOT_URL = uriService.URI_API_URL;
            this.WEB_API_URL_GETALL = this.ROOT_URL+'roles/';
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.options = new RequestOptions({ headers: this.headers });
    }
    
    getAll(): Observable<Array<Rol>> {
         return this._httpService.get(this.WEB_API_URL_GETALL)
        .map(response =>  response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    create(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+'roles/';
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    deleteWithRoleName(param: Rol):  Observable<any>  {
       
        let body = JSON.stringify(param);
        let options = new RequestOptions({ headers: this.headers, body:body });
        console.log(body);
        let url = this.ROOT_URL+'roles/';
        return this._httpService
            .delete(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }  
    
    update(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+'roles/';
        return this._httpService
            .put(url, body, this.options)
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