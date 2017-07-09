import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { RegisterService } from './register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-register',
    templateUrl: './register.component.html',
    providers: [RegisterService],
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    pageTitle: string = "Mi Registro";
    submitted = false;
    user: Register;
    loading = false;
    error = '';
    success ='';
    constructor(private _registroService : RegisterService , private _router : Router) {
       
    }
    
    ngOnInit(): void {
        this.user = new Register();
    }

     onSubmit() {
        this.submitted = true;
        this.user.role = "Cliente";
        this.user.active = true;
        this._registroService.register(this.user)
                                .subscribe(result => {
                                        if (result === true) {
                                            this.error = 'Registro exitoso';
                                        } else {
                                            this.error = 'Se produjo un error en el registro';
                                            this.loading = false;
                                        }
                                    });
       
    }

}

