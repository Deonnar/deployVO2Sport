import { Component, OnInit } from '@angular/core';
import { ProductCategory } from './reportes';
import { ReportesService } from './reportes.service';
import { filterDate } from '../shared/filters/filterDate.component';

@Component({
    selector: 'vo2-reportByCategory', 
    templateUrl: './reportes-categorias.component.html',
    styleUrls: ['./reportes-categorias.component.css'],
    providers: [ReportesService],
})

export class ReportesCategoriasComponent implements OnInit {
   
    pageTitle: string = "Reportes por Categorías";
    aDate : filterDate;
    itemsProducts : Array<ProductCategory>;
   
  
    constructor(private _serviceReport : ReportesService){ 
        this.aDate = new filterDate(true,false);
    }
 
    ngOnInit(): void { 
        this._serviceReport.getSaleByCategory()
        .subscribe((products:Array<ProductCategory>) => this.itemsProducts =  this.renderProducts(products),
	                       (error:Error)  => console.log(error));
        
        
    }

    renderProducts(products:Array<ProductCategory>) : any { 
        let productsToRender : Array<ProductCategory> = [];
        for (let product of products) {
            
            let name = product[Object.keys(product)[0]];
            let count = product[Object.keys(product)[1]];
            let dateSale= product[Object.keys(product)[2]];
            let categoryName= product[Object.keys(product)[3]];
            let prod = new ProductCategory(name ,count,dateSale,categoryName);
            productsToRender.push(prod);
        }
        return productsToRender;
    }

    onFilterClicked(obj : filterDate): void {
        this._serviceReport.setParemetersSalebyCategory(obj.getDateFrom(), obj.getDateTo(), obj.getCategory());
        this._serviceReport.getSaleByCategory()
        .subscribe((products:Array<ProductCategory>) => this.itemsProducts =  this.renderProducts(products),
	                       (error:Error)  => console.log(error));
    }
}