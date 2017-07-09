import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'vo2-menu-administration',
  templateUrl: './menu-administration.component.html',
  styleUrls: ['./menu-administration.component.css'],
  
})

export class MenuAdministrationComponent  {
  @Input() 
  Administrador:boolean;
  @Input() 
  Gerente:boolean;

     constructor() { 
         
    }
    
}
