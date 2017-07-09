import { Product } from "../home/sale_product/product";

export class Cart {
    
    public CartId: number;
    public UserId : number;
    public Quantity : number;
    public CartItems : Array<CartItems>;
    public Address : string;
    public Phone :string;
    constructor(){
       this.CartItems = new Array<CartItems>();
    }
}

export class CartItems{
    public quantity : number;
    public productId : number;
    public Product : Product;
    constructor(){
       this.Product = new Product();
    }
}