import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import {  uri } from './uri';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UriService {
    
    currentUri = 'api/pets/test-api.json';
    obs: Observable<any>;
    loadedContent: any;
   // _uri:  Observable<uri>;
    data: any;
    //public URI_API_URL : string = 'api/pets/uri.json';
    public URI_API_URL : string = 'http://localhost:3600/api/';


    constructor(private _httpService: Http) {

     }

    /*getContent() {
      this.getUris().subscribe(val => this.data = val);
     }*/
     
    getUris(): Observable<uri> { 
  
        return this._httpService.get(this.URI_API_URL)
        .map((response : Response) => <uri> response.json())
        .do(data => console.log('Los URI obtuvida es: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error|| 'Server error');
    }

}