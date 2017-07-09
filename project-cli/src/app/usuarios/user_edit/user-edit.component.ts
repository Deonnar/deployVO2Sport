import {Component, OnInit} from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   
    selector: 'vo2-userEdit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css'],
    providers: [UserService]
})
export class UserEditComponent implements OnInit{
    submitted = false;
    pageTitle: string = "Editar Usuario";
    
    user : User;

    constructor(private _userService : UserService,
                 private _router : Router,
                 private _currentRoute : ActivatedRoute) {
      this.user = new User();
    }

    ngOnInit(): void {
        let id =+ this._currentRoute.snapshot.params['id'];
        this._userService.get(id)
        .subscribe((obtainedUser:User) => this.user =  this.renderUser(obtainedUser),
	                       (error:Error)  => console.log(error));
        
    }
     renderUser(obtainedUser:User) : User { 

            let userId = obtainedUser[Object.keys(obtainedUser)[0]];
            let name = obtainedUser[Object.keys(obtainedUser)[1]];
            let surname = obtainedUser[Object.keys(obtainedUser)[2]];
            let address = obtainedUser[Object.keys(obtainedUser)[3]];
            let email = obtainedUser[Object.keys(obtainedUser)[4]];
            let phone = obtainedUser[Object.keys(obtainedUser)[5]];
            let active = obtainedUser[Object.keys(obtainedUser)[6]];
            let userAuthId = obtainedUser[Object.keys(obtainedUser)[7]];
            let userName = obtainedUser[Object.keys(obtainedUser)[8]];
          
            let _user = new User();
            _user.setId(userId);
            _user.setName(name);
            _user.setSurname(surname);
            _user.setAddress(address);
            _user.setEmail(email);
            _user.setPhone(phone);
            _user.setActive(active);
            _user.setUserAuth(userAuthId);
            _user.setUserName(userName);
            this.user = _user;
        return _user;
    }

    onSubmit() {
        this.submitted = true;
        this._userService.update(this.user)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        this._router.navigate(['/usuarios']); 
    }

    
}
