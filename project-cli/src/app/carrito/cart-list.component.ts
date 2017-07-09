import { Component, OnInit } from '@angular/core';
import { Cart, CartItems } from './cart';
import { CartService } from './cart.service';


@Component({
    selector: 'vo2-cart-list',
    templateUrl: './cart-list.component.html',
    providers: [CartService],
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
    pageTitle: string = "Mi Carrito";
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    showImage: boolean = false;
    showInfoDelivery: boolean = false;
    message:string;
    messageError:string;

    cart : Cart;
    itemsCart : CartItems[];

    constructor(private _cartService : CartService) {
        this.cart = new Cart();
    }

    ngOnInit(): void {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        let userId =  currentUser[Object.keys(currentUser)[3]];  
        this._cartService.get(userId).subscribe(
            ((obtainedCarritos : Cart) =>
            {
                this.cart = obtainedCarritos;
                this.itemsCart = this.cart.CartItems;
            } ),
            ((error : any) => console.log(error))
        )
       
    }

    toggleInfoDelivery(): void {
         this.showInfoDelivery = !this.showInfoDelivery;
    }

    onCheckOut(cartId : number):void{
        console.log(cartId);
        console.log(this.cart.Address);
        console.log(this.cart.Phone);
        this.cart.CartItems = null;
        this.cart.Quantity = null;
        this.cart.UserId = null;

        this._cartService.checkOut(this.cart).subscribe(
            ((response : any) =>
            {
                this.cart = response;

                if(!response.Result) {
                   this.messageError = "Se produjo un error."
                }
                else{
                    localStorage.removeItem('cartUser');
                    this.message = "Compra existosa!!!."
                }
            } ),
            ((error : any) =>
                    {
                        console.log(error);
                        this.messageError = "Se produjo un error."
                    }
            )
        )
    }
    

     onRemoveRow(productId:number):void{
       this._cartService.deleteItem(this.cart.CartId, productId)
                                .subscribe(
                                      ((obtainedCarritos : Cart) =>
                                        {
                                            this.cart = obtainedCarritos;
                                           
                                            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                                            let userId =  currentUser[Object.keys(currentUser)[3]];  

                                            this._cartService.get(userId).subscribe(
                                                ((obtainedCarritos : Cart) =>
                                                {

                                                    this.cart = obtainedCarritos;
                                                    this.itemsCart = this.cart.CartItems;
                                                    console.log(this.cart);
                                                    if (this.cart.CartItems == null) {
                                                        localStorage.removeItem('cartUser');
                                                        console.log(JSON.parse(localStorage.getItem('cartUser')));
                                                    }
                                                    else{
                                                        console.log("Hay:" + this.itemsCart.length+ " items");
                                                    }
                                                } ),
                                                ((error : any) => console.log(error))
                                            )
                                            
                                        }),
                                (error:Error)  => console.log(error)
                                ); 
        
    }
}

