/**
 * Created by Alexander Schmidt on 21.06.2016.
 */

// Funktion (Element, Inhalt)
/*
var node = document.createElement('h2');
var textnode = document.createTextNode('Text');
node.appendChild(textnode);
*/

import {Product} from "./product";

export class HTMLRenderer {

    private _createElement: (element: string, content) => any = (el, c) => {
        let element = document.createElement(el);
        let content = document.createTextNode(c);

        element.appendChild(content);
        return element;
    }

    public createArticle = function (product: Product): any {

        let article = this._createElement('article', '');
        let h2 = this._createElement('h2', product.title);
        let p = this._createElement('p', product.price);

        article.appendChild(h2);
        article.appendChild(p);
        return article;
    }

}
