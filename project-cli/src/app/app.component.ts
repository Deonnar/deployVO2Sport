import { Component } from '@angular/core'; 
import { LoginService } from "./login/login.service";
import { ActivatedRoute, Router } from '@angular/router';

import  { UriService } from './uri/uri.service';

import  { uri } from './uri/uri';

@Component({
  selector: 'my-app',
  providers: [LoginService,  UriService],
  templateUrl: './app.component.html',
})
export class AppComponent  {

    pageTitle: string = "Menú";
    username : string;
    showLogin: boolean;
    rolename : string;
    Administrador : boolean
    Gerente : boolean
    Cliente : boolean
    _uri: uri;
    
    constructor(private _uriService : UriService, private _loginService : LoginService, private _router : Router) {
           console.log('app.component....');
    }
  
    ngOnInit(): void {
         console.log('iniCIalizando....');
        
                               
   }
}
