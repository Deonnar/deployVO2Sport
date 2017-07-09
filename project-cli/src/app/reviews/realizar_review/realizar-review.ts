export class Review {
    
    id: string;
    idProducto: String; 
    texto: String;
    fecha: Date;

    constructor(id: string, IdProducto: String, texto: String, fecha: Date ){
        this.id = id; 
        this.idProducto = IdProducto; 
        this.texto = texto;
        this.fecha = fecha;
    }
}