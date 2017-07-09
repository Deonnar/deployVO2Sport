import {Component, OnInit, Output, EventEmitter } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Login } from "./login";
import { LoginService } from "./login.service";

@Component({
   
    selector: 'vo2-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Login";
    userLogin : Login;
    loading = false;
    error = '';
    logginOk:boolean;

    @Output()
    isLogged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _loginService : LoginService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.userLogin = new Login();
        this._loginService.logout();
    }

    onSubmit() {
        this.submitted = true;
        this.onLogin();
    }

    onLogin() : void {
        this.loading = true;
        this._loginService.login(this.userLogin.userName, this.userLogin.password)
            .subscribe(result => {
                if (result === true) {
                    this.logginOk = true;
                    this._router.navigate(['/home']); 
                } else {
                    this.error = 'Usuario o contraseña incorrecta.';
                    this.loading = false;
                    this.logginOk = false;
                }
            });
    }
   
}
