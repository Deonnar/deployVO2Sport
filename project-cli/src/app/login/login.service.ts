import { Injectable} from '@angular/core';
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
import { Login } from "./login";

import { uri } from '../uri/uri';
import { UriService } from '../uri/uri.service';
  


@Injectable()
export class LoginService {
private ROOT_URL : string;//= 'http://localhost:3600/api/';
   
    headers: Headers;
    options: RequestOptions;
    token :string;

    constructor(private uriService: UriService, private _httpService: Http) { 
            this.ROOT_URL = this.uriService.URI_API_URL;
            this.headers = new Headers({ 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            });
            this.options = new RequestOptions({ headers: this.headers });
            // set token if saved in local storage
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.token = currentUser && currentUser.token;
    }


    login(username: string, password: string): Observable<boolean> {
        let url = this.ROOT_URL+ "login/";
        
        return this._httpService.put(url, JSON.stringify({ username: username, password: password }), this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let obj = response.json();
                console.log(obj);
                let role = obj[Object.keys(obj)[2]];
                let token = obj[Object.keys(obj)[3]];
                let userId = obj[Object.keys(obj)[4]];
               
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, role: role, userId: userId }));
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                 
                    return false;
                }
            });
    }
    
    
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cartUser');
        console.log(JSON.parse(localStorage.getItem('currentUser')));
    }
   
}