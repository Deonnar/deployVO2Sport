export class Notificaciones {
    
    id: string;
    carrito: number;
    isPendingPurchase : boolean;
    isPendingReview : boolean;

    constructor(id: string, carrito: number){
        this.id = id;
        this.carrito = carrito;
        this.isPendingPurchase = true;
        this.isPendingReview = false;
    
    }
}