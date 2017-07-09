import { Component} from '@angular/core';
import { ProductQuantity } from './reportes';
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'pm-reportes',
    templateUrl: './reportes-list.component.html',
    styleUrls: ['./reportes-list.component.css']
})
export class ReportesComponent {
    pageTitle: string = "Reportes";
   
    showSaleByCategory: boolean = false;
    showMostProductSale: boolean = false;
    
    constructor() {
        
    }

    toggleSaleByCategory(): void {
         this.showSaleByCategory = !this.showSaleByCategory;
         this.pageTitle = "Reportes por Categoría";
    }

    toggleMostProductSale(): void {
         this.showMostProductSale = !this.showMostProductSale;
          this.pageTitle = "Productos mas vendidos";
    }
}

