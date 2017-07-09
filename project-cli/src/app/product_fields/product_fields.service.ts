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

import { ProductField } from './product_fields';

@Injectable()
export class ProductFieldService {
    private ROOT_URL : string = 'http://localhost:3600/api/';
    private ADD_FIELD_TO_PRODUCT_URL : string = 'http://localhost:3600/api/productfield/{idField}/product/{idProduct}'
    

    //Parameters
    public productId : number;
    public fieldId: number;
        
    headers: Headers;
    options: RequestOptions;
    constructor(private _httpService: Http) {          
           
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.productId = 1;
            this.fieldId =1;
            this.options = new RequestOptions({ headers: this.headers });
    }

    get(val: number): Observable<ProductField> {
        let url = this.ROOT_URL;
         return this._httpService.get(url+ "productfield/" + val)
        .map(response =>  response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    getAll(): Observable<Array<ProductField>> {
        let url = this.ROOT_URL + 'productfield/';
        
         return this._httpService.get(url)
        .map(response =>  response.json())
        .catch(this.handleError);
    }
    
    //NUNCA PEGA A LA API!! 
    setParametersFieldtoProductField(fieldId: number, productId: number){
        var body = "{"+"\"ProductField_ProductFieldId\""+":\""+fieldId+"\",\"Product_ProductId\":\""+productId+"\"}";
        console.log('el cuerpo es: '+body );
        this.ADD_FIELD_TO_PRODUCT_URL = 'http://localhost:3600/api/productfield/'+this.fieldId+'/product/'+this.productId;
        console.log('la URI es: '+ this.ADD_FIELD_TO_PRODUCT_URL);
       
        return this._httpService.post(this.ADD_FIELD_TO_PRODUCT_URL, body, this.options)
            .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
      
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+'productfield/';
      
        return this._httpService
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    } 

    deleteWithId(val: number): Observable<any>  {
        let url = this.ROOT_URL+'productfield/';
        return this._httpService
        .delete(url + val, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }     
    
    update(param: any): Observable<any> {
        let body = JSON.stringify(param);
        let url = this.ROOT_URL+'productfield/';
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