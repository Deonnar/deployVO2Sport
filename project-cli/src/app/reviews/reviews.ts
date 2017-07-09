import { Product } from "../home/sale_product/product";

export class Reviews {
    
    public Id: string;
    public Products: Array<Product>; 
    public Texto: String;
    public Fecha: Date;
    public ProductId:number;
    public UserId :number;

    constructor(){
       
    }
}