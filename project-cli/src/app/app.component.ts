import { Component } from '@angular/core'; 
import { LoginService } from "./login/login.service";
import { ActivatedRoute, Router } from '@angular/router';

import  { UriService } from './uri/uri.service';

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

    constructor(private _loginService : LoginService, private _router : Router) {
           
    }

}
