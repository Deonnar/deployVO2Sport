export class Product {
    public ProductId: string;
    public Name: string;
    public Code: string;
    public Description: string;
    public Brand: string;
    public Price: string;
    public Stock:number;
    public Active: boolean;

    public Category: string;

    public Pictures :Images[];

    constructor(){
       this.Pictures = new Array<Images>()
    }

}

export class Images {
 
    public Name :string;
    public  DataFile : string
    public Format: string;  
    
    constructor(){
       
    }
}
 