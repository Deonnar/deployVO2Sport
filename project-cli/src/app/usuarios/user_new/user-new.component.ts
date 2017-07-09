import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
   
    selector: 'vo2-userNew',
    templateUrl: './user-new.component.html',
    styleUrls: ['./user-new.component.css'],
    providers: [UserService]
})
export class UserNewComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Nuevo Usuario";
    user : User;
 

    constructor(private _userService : UserService,
                 private _router : Router) {
      
    }

    ngOnInit(): void {
        this.user = new User();
    }

    onSubmit() {
        this.submitted = true;
        this._userService.create(this.user)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/usuarios']); 
    }
}
