export class ProductField {
    public ProductFieldId: number
    public Name: string;
    public Type: string;
    public Value: string;     
    public Active: boolean; 

    constructor(){

    }
}

export class ProductFieldtoProduct {
     Product_ProductFieldId: number
     Product_ProductId: number
     
    constructor(){}

    setProduct_ProductFieldId(_id : number): void {
         this.Product_ProductFieldId = _id;       
    }
    getProduct_ProductFieldId():number{
        return this.Product_ProductFieldId;
    }
    setProduct_ProductId(_name : number): void {
         this.Product_ProductId = _name;
    }

    getProduct_ProductId():number{
        return this.Product_ProductId;
    }
  
}