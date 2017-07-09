import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from "../../../carrito/cart.service";
import { Cart, CartItems } from "../../../carrito/cart";

@Component({
    selector: 'vo2-saleproducts',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService,CartService]
})
export class SaleProductsComponent implements OnInit {
   
    pageTitle: string = "Lista de Productos";
    producto:Product;
    productos: Array<Product>;
    cart : Cart;
    cartItem : CartItems;
    
    constructor(private _productService : ProductService, private _cartService : CartService,
                 private _router : Router) { }
   

    ngOnInit(): void {
        this._productService.getAll()
             .subscribe((products:Array<Product>) =>
              {
                 this.productos =  products;
              })
              
            ,(error:Error)  => console.log('error: '+error);
                         
    }
   
    onDetailRow(id:number):void{
        this._router.navigate(['/productos/detalles/'+id]); 
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
                        .subscribe((_cart:Cart) => this.cart =  _cart)
                        ,(error:Error)  => console.log('error: '+error);
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
                                        .subscribe((_cart:Cart) => this.cart =  _cart)
                                        ,(error:Error)  => console.log('error: '+error);
                    })
                    ,(error:Error)  => console.log('error: '+error);
           
        }
    }
}

