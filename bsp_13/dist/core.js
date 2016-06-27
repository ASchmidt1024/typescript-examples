/**
 * Created by Alexander Schmidt on 21.06.2016.
 */
"use strict";
function sealed(constructor) {
    Object.seal(constructor);
    // constructor.prototype.version = Date.now();
    Object.seal(constructor.prototype);
}
exports.sealed = sealed;
// Decorator Factory
function enumerable(flag) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = flag;
    };
    /* return function (target: any) {
        console.log(target);
        console.log(arguments);
    }*/
}
exports.enumerable = enumerable;
//# sourceMappingURL=core.js.map