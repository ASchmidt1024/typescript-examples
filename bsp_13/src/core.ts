/**
 * Created by Alexander Schmidt on 21.06.2016.
 */

export function sealed(constructor: Function) {
    Object.seal(constructor);
    // constructor.prototype.version = Date.now();
    Object.seal(constructor.prototype);
}

// Decorator Factory
export function enumerable(flag: boolean) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = flag;
    }

    /* return function (target: any) {
        console.log(target);
        console.log(arguments);
    }*/
}
