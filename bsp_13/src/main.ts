/**
 * Created by Alexander Schmidt on 21.06.2016.
 */

//import {a} from  './product';
//console.log(a);
//import {API_KEY} from  './product';
//console.log(API_KEY);

//import {product} from './product';
//let p = new product();
//console.log(p);

//import {productService} from './product.service';
//console.log(productService);

import {Product} from './product';
import {productService} from './product.service';
import {HTMLRenderer} from './html';

class App {

    private _productService: productService = new productService();
    private _htmlRenderer: HTMLRenderer = new HTMLRenderer();

    constructor() {
        let products: Product[] = this._productService.getProducts();
        
        products.forEach((el) => {
            let erg = this._htmlRenderer.createArticle(el);
            document.getElementById('app').appendChild(erg);
        });
    }
}

new App();


