import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rol } from "../roles";
import { RolService } from "../roles.service";
import { Router } from '@angular/router';

@Component({
   
    selector: 'vo2-rolesNew',
    templateUrl: './roles-new.component.html',
    styleUrls: ['./roles-new.component.css'],
    providers: [RolService]
})
export class RolesNewComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Nuevo Rol";
    role : Rol;
   

    constructor(private _rolesService : RolService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.role = new Rol();
    }

    onSubmit() {
        this.submitted = true;
        this._rolesService.create(this.role)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/roles']); 
    }
}
