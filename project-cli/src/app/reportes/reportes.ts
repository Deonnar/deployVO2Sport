export class ProductQuantity {
    
    productName: string;
    count: number;
    dateSale: string;

    constructor(productName: string, count: number, dateSale: string) {
        this.productName = productName;
        this.count = count;
        this.dateSale = dateSale;
    }
}

export class ProductCategory {
    
    productName: string;
    count: number;
    dateSale: string;
    categoryName : string;

    constructor(productName: string, count: number, dateSale: string, categoryName : string) {
        this.productName = productName;
        this.count = count;
        this.dateSale = dateSale;
        this.categoryName = categoryName;
    }
}