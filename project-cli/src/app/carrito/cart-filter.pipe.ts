import { Pipe, PipeTransform} from '@angular/core';
import { Cart } from './cart';

@Pipe({
    name: 'compraFilter'
})
export class CartFilterPipe implements PipeTransform {

    transform(value:Array<Cart>, filterBy:string): Array<Cart> 
    {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        // usamos programacíon funcional (similar a las lambdas expressions en .NET)
        // esto se llama 'arrow syntax' (por la flechita :P)
        return filterBy ? value.filter((compra:Cart) =>
        compra.CartId != -1) : value;
    }
}