import { Component, OnInit , OnChanges} from '@angular/core';
import { ProductQuantity } from './reportes';
import { ReportesService } from './reportes.service';
import { filterDate } from '../shared/filters/filterDate.component';

@Component({
    selector: 'vo2-reportProductQuantity', 
    templateUrl: './reportes-productocantidad.component.html',
    styleUrls: ['./reportes-productocantidad.component.css'],
    providers: [ReportesService],
})

export class ReportesProductoCantidadComponent implements OnInit {
   
    pageTitle: string = "Reportes cantidad de productos mas vendidos";
    aDate : filterDate;
    itemsProducts : Array<ProductQuantity>;
     

    constructor(private _serviceReport : ReportesService){ 
        this.aDate = new filterDate(false,true);
    }

    ngOnInit(): void { 
        this._serviceReport.getMostProductSale()
           .subscribe((products:Array<ProductQuantity>) =>this.itemsProducts = this.renderProducts(products),
	                       (error:Error) => console.log(error));
    }
     renderProducts(products:Array<ProductQuantity>) : any {
        let productsToRender : Array<ProductQuantity> = [];
        for (let product of products) {
            
            let name = product[Object.keys(product)[0]];
            let count = product[Object.keys(product)[1]];
            let dateSale= product[Object.keys(product)[2]];
            let prod = new ProductQuantity(name ,count,dateSale);
            productsToRender.push(prod);
        }
        return productsToRender;
    }

    onFilterClicked(obj : filterDate): void {
        this._serviceReport.setParemetersProductQuantity(obj.getDateFrom(), obj.getDateTo(), obj.getTxtNumber());
        this._serviceReport.getMostProductSale()
            .subscribe((products:Array<ProductQuantity>) =>this.itemsProducts = this.renderProducts(products),
	                       (error:Error) => console.log(error));
    }
}