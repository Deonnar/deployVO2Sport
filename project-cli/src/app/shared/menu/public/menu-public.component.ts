import { Component } from '@angular/core'; 
import { LoginService } from "../../../login/login.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'vo2-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.css'],
  providers: [LoginService],
})

export class MenuPublicComponent  {

    Administrador : boolean
    Gerente : boolean
    Cliente : boolean
    username : string;
    isLogged: boolean;
    rolename : string;

     constructor(private _loginService : LoginService, private _router : Router) { 
         var currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
            this.isLogged = false;

            if(currentUser!=null){
              
                this.username = currentUser[Object.keys(currentUser)[0]];
                this.rolename = currentUser[Object.keys(currentUser)[2]];
                switch ( this.rolename) {
                    case "Administrador":
                        this.Administrador = true;
                        this.Gerente = false;
                        this.Cliente = false;
                       
                    break;
                    case "Gerente":
                        this.Administrador = false;
                        this.Gerente = true;
                        this.Cliente = false;
                        
                    break;
                    case "Cliente":
                        this.Administrador = false;
                        this.Gerente = false;
                        this.Cliente = true;
                       
                    break;
                }
                this.isLogged = true;
            }
            else{
                this.isLogged = false;
            }
    }

    onLogoutClicked(obj : boolean) : void {
        if(obj) {
            this.Administrador = false;
            this.Gerente = false;
            this.Cliente = false;
            this.isLogged = false;
        }
    }
    
}
