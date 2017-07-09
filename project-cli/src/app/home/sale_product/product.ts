export class Product {
   
    public active :boolean;
    public brand : string;
    
    public categoryname : string;
    public code : string;
    public despriction : string;
    public name : string;

    public picture : string;
    public price  : string;
    public productId : number;
    public reviews : string;
    public stock : number;
    public image : Picture = new Picture;

    constructor(){

    }
    
}

export class Picture {
    public pictureId: number;
    public name: string;
    public datafile :string;
}