/**
 * Created by Alexander Schmidt on 21.06.2016.
 */
"use strict";
var HTMLRenderer = (function () {
    function HTMLRenderer() {
        this._createElement = function (el, c) {
            var element = document.createElement(el);
            var content = document.createTextNode(c);
            element.appendChild(content);
            return element;
        };
        this.createArticle = function (product) {
            var article = this._createElement('article', '');
            var h2 = this._createElement('h2', product.title);
            var p = this._createElement('p', product.price);
            article.appendChild(h2);
            article.appendChild(p);
            return article;
        };
    }
    return HTMLRenderer;
}());
exports.HTMLRenderer = HTMLRenderer;
//# sourceMappingURL=html.js.map