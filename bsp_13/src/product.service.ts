/**
 * Created by Alexander Schmidt on 21.06.2016.
 */

import {Product} from './product';
import {sealed, enumerable} from "./core";
//import {maxItems} from './product';


// Decorator
// productService wird um Metadaten angereichert
@sealed
export class productService {
    private products: Product[] = products;

    constructor() {
        Object.seal(this);
        // console.log(this.version);
    }

    @enumerable(false)
    getProducts() {
        //console.log(maxItems);
        return products;
    };
}

let products: Product[] = [
    {
        id: 1234,
        title: 'Test',
        price: 4321
    },
    {
        id: 3333,
        title: 'Test',
        price: 4444
    }
];
