/**
 * Created by Alexander Schmidt on 21.06.2016.
 */
"use strict";
var product_service_1 = require('./product.service');
var html_1 = require('./html');
var App = (function () {
    function App() {
        var _this = this;
        this._productService = new product_service_1.productService();
        this._htmlRenderer = new html_1.HTMLRenderer();
        var products = this._productService.getProducts();
        products.forEach(function (el) {
            var erg = _this._htmlRenderer.createArticle(el);
            document.getElementById('app').appendChild(erg);
        });
    }
    return App;
}());
new App();
//# sourceMappingURL=main.js.map