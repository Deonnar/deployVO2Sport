import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Cart, CartItems } from "../../../carrito/cart";
import { CartService } from "../../../carrito/cart.service";


@Component({
    selector: 'vo2-product-details',
    templateUrl: './product-details.component.html',
    providers: [ProductService,CartService],
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    pageTitle: string = "Detalles del Producto";
    product: Product;
    quantity:number;
    cart : Cart;
    cartItem : CartItems;
    message:string;
    messageError:string;

    constructor(private _productService : ProductService,
                private _currentRoute: ActivatedRoute,
                    private _router : Router,
                    private _cartService : CartService) {
    }

    
    ngOnInit(): void {
        this.product = new Product();
        this.quantity = 1;
        let id =this._currentRoute.snapshot.params['id'];
        this._productService.get(id)
             .subscribe((_product:Product) => this.product =  _product)
            ,(error:Error)  => console.log('error: '+error);
       // this.pageTitle +=  `: ${id}`;
       
    }

    addToCart(productId:number):void{
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.cart = new Cart();
        this.cart.UserId = currentUser[Object.keys(currentUser)[3]];
         console.log(this.cart.UserId);
         
        this.cartItem = new CartItems();
        this.cartItem.productId = productId;
        this.cartItem.quantity = 1;
      
        var cartUser = JSON.parse(localStorage.getItem('cartUser'));
       console.log(cartUser);
        if(cartUser == null)//Carrito vacio
        {
            this.cart.CartItems.push(this.cartItem)
                
            this._cartService.add(this.cart)
                        .subscribe((_cart:Cart) => {
                                                    this.cart =  _cart;
                                                    this.message = "Se agregó al carrito";
                                                })
                        ,(error:Error)  =>{ 
                                            console.log('error: '+error);
                                            this.messageError = "Se produjo un error";
                                        };
        }
        else//Hay item en el carrito
        {
            this._cartService.get(this.cart.UserId)
                    .subscribe((_cart:Cart) => 
                    {
                        this.cart = _cart;
                        console.log(this.cart);
                        var cartUser = localStorage.setItem('cartUser',  JSON.stringify(this.cart));
                        this._cartService.update(this.cart.CartId, this.cartItem.productId,this.cartItem.quantity)
                                        .subscribe((_cart:Cart) => {
                                            this.cart =  _cart;
                                            this.message = "Se agregó al carrito";
                                        })
                                       ,(error:Error)  =>{ 
                                            console.log('error: '+error);
                                            this.messageError = "Se produjo un error";
                                        };
                    })
                    ,(error:Error)  => console.log('error: '+error);
           
        }
    }

}

