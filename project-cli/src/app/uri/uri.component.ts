import { Component, OnInit } from '@angular/core';
import { uri } from './uri';
import { UriService } from './uri.service';


@Component({
    selector: 'pm-uri',
})
export class UriComponent implements OnInit {
    errorMessage: string;
    uri___:  uri;

    constructor(private _uriService : UriService) {
        console.log('uri comp');
    }
   
    ngOnInit(): void {
        this._uriService.getUris()
                .subscribe(uObtained => this.uri___ = uObtained,
                        error => this.errorMessage = <any>error);
    }

}

