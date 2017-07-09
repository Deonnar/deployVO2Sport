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

import { Product } from './product';
import { Category} from "../categorias/category";

@Injectable()
export class ProductService {
    private ROOT_URL : string = 'http://localhost:3600/api/';
    private URL_PRODUCT: string;
    private URL_CATEGORIAS : string;
   
    headers: Headers;
    options: RequestOptions;
    constructor(private _httpService: Http) { 
           this.URL_PRODUCT = this.ROOT_URL + "product/"
           this.URL_CATEGORIAS = this.ROOT_URL + "category/"
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.options = new RequestOptions({ headers: this.headers });
    }
    get(val: number): Observable<Product> {
        let url = this.URL_PRODUCT;
         return this._httpService.get(url+ "/" + val)
        .map(response =>  response.json())
        .catch(this.handleError);
    }
    
    getAll(): Observable<Array<Product>> {
        let url = this.URL_PRODUCT;
         return this._httpService.get(url)
        .map(response =>  response.json())
        .catch(this.handleError);
    }
    
    getCategorias(): Observable<Array<Category>> {
        return this._httpService.get(this.URL_CATEGORIAS)
        .map((response : Response) => <Array<Category>> response.json())
        .catch(this.handleError);
    }

    getProductos(): Observable<Array<Product>> {
        return this._httpService.get(this.URL_PRODUCT)
        .map((response : Response) => <Array<Product>> response.json())
        .catch(this.handleError);
    }
    create(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.URL_PRODUCT;
        console.log(url);
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    deleteWithId(val: number): Observable<any>  {
        let url = this.URL_PRODUCT;
        console.log('a borrarr: '+url);
        return this._httpService
        .delete(url + "/" + val, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }     
    
    update(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.URL_PRODUCT;
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