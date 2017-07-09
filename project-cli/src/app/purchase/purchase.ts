import { Product } from "../home/sale_product/product";


export class Purchase {
    
     public PurchaseId : number;
     public Date : Date;
     public Amount: number;
     public Address: string;
     public Phone: string;
     public UserId: number;
     public ProductLines : Array<ProductItems>;

    constructor(){
        this.ProductLines = new Array<ProductItems>();
    }
}

export class ProductItems {
   public Quantity:number;
   public Product : Product;
   public ProductId : number;
   constructor(){
        this.Product = new Product();
    }
              
}

