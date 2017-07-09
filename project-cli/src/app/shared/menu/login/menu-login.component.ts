import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from "../../../login/login.service";
import { LoginComponent } from "../../../login/login.component";


@Component({
   
    selector: 'vo2-menu-login',
    templateUrl: './menu-login.component.html',
    styleUrls: ['./menu-login.component.css'],
    providers: [LoginService,LoginComponent]
 
})
export class MenuLoginComponent implements OnChanges {
  
    pageTitle: string = "Login";
    username : string;
    rolename : string;
    @Input()
    isLogged: boolean;

    @Output() logoutClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(private _loginService : LoginService, private _router : Router,
                 private _login : LoginComponent) {

                this.isLogged = _login.logginOk;
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
           
            if(currentUser!=null){
                this.username = currentUser[Object.keys(currentUser)[0]];
                this.rolename = currentUser[Object.keys(currentUser)[2]]
                this.isLogged = true
            }
            else{
                this.username = ''; 
                this.isLogged = false
               
            }
    }
    
    ngOnChanges() {
     
        this.isLogged = this._login.logginOk;
        if(this.isLogged) {
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if(currentUser!=null){
                    this.username = currentUser[Object.keys(currentUser)[0]];
                    this.rolename = currentUser[Object.keys(currentUser)[2]];
                    this.isLogged = true;
                    console.log(this.username)
                }
                else{
                    this.username = ''; 
                    this.isLogged = false
                
                }
        }
     
    }

    onLogout() : void {
        this.isLogged = true;
        this.logoutClicked.emit(this.isLogged);
        this._loginService.logout();
        this.username = '';
        this._router.navigate(['/login']); 
    }

    onClick() :void{
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let userId =  currentUser[Object.keys(currentUser)[3]];  
            this._router.navigate(['//usuarios/detalle/'+userId]);
    }
}
