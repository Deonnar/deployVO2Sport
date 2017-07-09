import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'vo2-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css'],

})

export class MenuClientComponent  {
    @Input() 
    isLogged: boolean

    constructor() { 
         
    }
    
}
