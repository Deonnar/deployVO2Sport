export class Producto {
    nombre: string;
    codigo: string;
    descripcion: string;
    marca: string;
    precio: string;
    stock:number;

    constructor(){

    }

    setNombre(_nombre : string): void {
         this.nombre = _nombre;
         
    }
    getnombre():string{
        return this.nombre;
    }
    setName(_codigo: string): void {
         this.codigo = _codigo;
    }

    getCodigo():string{
        return this.codigo;
    }

    setDescription(_descripcion : string): void {
         this.descripcion = _descripcion;
    }

    getDescripcion():string{
        return this.descripcion;
    }

      setMarca(_marca : string): void {
         this.marca = _marca;
    }

    getMarca():string{
        return this.marca;
    }

    getPrecio():string{
        return this.precio;
    }

    setPrecio(_precio : string): void {
         this.precio = _precio;
    }
    
    setStock(_stock :number){
         this.stock = _stock;
    }

    getStock():number{
        return this.stock;
    }
    }