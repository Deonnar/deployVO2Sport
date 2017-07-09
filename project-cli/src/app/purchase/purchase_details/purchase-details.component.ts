import { Component, OnInit } from '@angular/core';
import { PurchaseService } from "../purchase.service";
import { Purchase, ProductItems } from "../purchase";
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "../../home/sale_product/product";



@Component({
    selector: 'vo2-purchase-details',
    templateUrl: './purchase-details.component.html',
    providers: [PurchaseService],
    styleUrls: ['./purchase-details.component.css']
})

export class PurchaseDetailsComponent implements OnInit {
   
    pageTitle: string = "Detalles de la compra";
    purchases: Array<Purchase>;
    purchase : Purchase;
   

    constructor(private _purchaseService:PurchaseService, private _currentRoute : ActivatedRoute ) {
          this.purchase.ProductLines = new Array<ProductItems>();
    }

    ngOnInit(): void {
       
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let UserId = currentUser[Object.keys(currentUser)[3]];
        let id =+ this._currentRoute.snapshot.params['id'];

        this._purchaseService.getAll(UserId)
             .subscribe((response:Array<Purchase>) =>
              {
                 this.purchases =  response;
                
                 this.purchase.ProductLines = this.purchases[id].ProductLines;
                 console.log(this.purchase);
              })
              
            ,(error:Error)  => console.log('error: '+error);
                         
    }
    
}

