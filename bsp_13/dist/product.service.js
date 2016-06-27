/**
 * Created by Alexander Schmidt on 21.06.2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("./core");
//import {maxItems} from './product';
// Decorator
// productService wird um Metadaten angereichert
var productService = (function () {
    function productService() {
        this.products = products;
        Object.seal(this);
        // console.log(this.version);
    }
    productService.prototype.getProducts = function () {
        //console.log(maxItems);
        return products;
    };
    ;
    __decorate([
        core_1.enumerable(false), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], productService.prototype, "getProducts", null);
    productService = __decorate([
        core_1.sealed, 
        __metadata('design:paramtypes', [])
    ], productService);
    return productService;
}());
exports.productService = productService;
var products = [
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
//# sourceMappingURL=product.service.js.map