 import { Observable } from 'rxjs/Observable';
 import { Http, Response } from '@angular/http';
 import 'rxjs/add/operator/map';
 import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    public WEB_API_URL : string = 'app/config/config.service.json';

    constructor(private _httpService: Http) {  }

    
    getUrl(): string {
         return this.WEB_API_URL;
    }

}