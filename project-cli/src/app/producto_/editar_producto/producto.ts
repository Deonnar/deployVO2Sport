export class Producto {
    nombre: string;
    codigo: string;
    descripcion: string;
    marca: string;
    precio: string;
    stock:number;

    constructor( nombre: string, codigo: string, descripcion: string, marca: string, precio: string,  stock:number){
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock; 
    }
}