import { Component, OnInit } from '@angular/core';
import { Rol } from '../roles';
import { RolService } from '../roles.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'vo2-rolesList',
    templateUrl: './roles-list.component.html',
    styleUrls: ['./roles-list.component.css'],
    providers: [RolService]
})
export class RolesListComponent implements OnInit{
    pageTitle: string = "Lista de Roles";
  
    itemsRoles: Array<Rol>;

    constructor(private _rolesService : RolService,
                 private _router : Router) {
       
    }
   

    ngOnInit(): void {
        this._rolesService.getAll()
             .subscribe((roles:Array<Rol>) => this.itemsRoles =  this.renderRoles(roles),
	                       (error:Error)  => console.log(error));
                         
    }


    renderRoles(roles:Array<Rol>) : any { 
        let rolesToRender : Array<Rol> = [];
        for (let rol of roles) {
            
            let name = rol[Object.keys(rol)[0]];
            let _rol = new Rol();
            _rol.setRoleName(name);
            rolesToRender.push(_rol);
        }
        return rolesToRender;
    }
    onNewRole():void{
        this._router.navigate(['/roles/nueva']); 
    }
    onRemoveRow(obj:Rol):void{
       
         this._rolesService.deleteWithRoleName(obj)
                                .subscribe(
                                    result => console.log(result),
                                (error:Error)  => console.log(error)
                                ); 
        
    }
}

