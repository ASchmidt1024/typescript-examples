/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

(function () {
    'use strict';

    var obj1 = {} // object literal notation

    // new legt neues object an
    // Context von object wird auf neues object geändert
    // object ist eine function und wird ausgeführt
    // Referenz wird nach links durchgereicht
    var obj2 = new Object();
    obj2.sagHallo = function () {

    };

    console.log(typeof obj2);
    console.log(obj2 instanceof Object);
    console.log(typeof Object);
    console.dir(Object.prototype);
    console.log(obj2.__proto__ === Object.prototype);



    // --- array
    var list1 = new Array(); // [] array literal notation
    console.dir(list1.sort);
    console.dir(Array.prototype.sort);
    console.dir(Array.prototype.sort === list1.sort);



    // --- eigenes richtiges object
    var Person = function () {

    };

    var p1 = new Person();

    console.dir(p1);

})();

