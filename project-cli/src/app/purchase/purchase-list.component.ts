import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from "./purchase.service";
import { Purchase } from "./purchase";


@Component({
    selector: 'vo2-purchaseproducts',
    templateUrl: './purchase-list.component.html',
    styleUrls: ['./purchase-list.component.css'],
    providers: [PurchaseService]
})
export class PurchaseListComponent implements OnInit {
   
    pageTitle: string = "Mis Compras";
    purchase:Purchase;
    purchases: Array<Purchase>;
   
    constructor(private _purchaseService : PurchaseService,
                 private _router : Router) {
                     
                  }
   

    ngOnInit(): void {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let UserId = currentUser[Object.keys(currentUser)[3]];
        
        this._purchaseService.getAll(UserId)
             .subscribe((response:Array<Purchase>) =>
              {
                 this.purchases =  response;
              })
              
            ,(error:Error)  => console.log('error: '+error);
                         
    }
   
    onDetailRow(id:number):void{
        console.log(id);
        this.purchase = this.purchases[id];
        this._router.navigate(['/compras/'+id]); 
    }
}

