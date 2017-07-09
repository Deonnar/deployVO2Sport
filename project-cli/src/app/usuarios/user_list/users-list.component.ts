import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'vo2-userList',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css'],
    providers: [UserService]
})
export class UserListComponent implements OnInit  {
    pageTitle: string = "Lista de Usuarios";
  
    itemsUsers: Array<User>;

    constructor(private _userService : UserService,
                 private _router : Router) {
       
    }
   
    ngOnInit(): void {
        this._userService.getAll()
             .subscribe((users:Array<User>) => this.itemsUsers =  this.renderUsers(users),
	                       (error:Error)  => console.log(error));
                         
    }

     renderUsers(users:Array<User>) : any { 
        let usersToRender : Array<User> = [];
        for (let user of users) {
            let userId = user[Object.keys(user)[0]];
            let name = user[Object.keys(user)[1]];
            let surname = user[Object.keys(user)[2]];
            let address = user[Object.keys(user)[3]];
            let email = user[Object.keys(user)[4]];
            let phone = user[Object.keys(user)[5]];
            let active = user[Object.keys(user)[6]];
            let userAuthId = user[Object.keys(user)[7]];
          
            let _user = new User();
            _user.setId(userId);
            _user.setName(name);
            _user.setSurname(surname);
            _user.setAddress(address);
            _user.setEmail(email);
            _user.setPhone(phone);
            _user.setActive(active);
            _user.setUserAuth(userAuthId);
            usersToRender.push(_user);
        }
        return usersToRender;
    }
 
    onRemoveRow(id:number):void{
       console.log(id);
         this._userService.deleteWithId(id)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                );
        this._router.navigate(['/usuarios/']); 
    }

    onNewUser():void{
        this._router.navigate(['/usuarios/nuevo']); 
    }
    onEditRow(id:number):void{
        this._router.navigate(['/usuarios/editar/'+id]); 
    }

    onDetailRow(id:number):void{
        this._router.navigate(['/usuarios/detalle/'+id]); 
    }

    


  
   
}

