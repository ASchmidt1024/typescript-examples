/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
// Typen
// JavaScript
// sting, number, boolean, undefined, function object
// TypeScript
// string, number, boolean, any
var counter1; // Declaration
var counter2 = 123; // implizite Typenzuweisung => number
var counter3;
// Weiter Datentypen
// Array
var list1 = new Array();
var list2 = [];
var list3 = [1, 2, 345];
console.log(list3);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);
// Any
var nichtSicher = 34;
nichtSicher = {
    title: 'Überschrift'
};
var list4 = [];
// void - undefined
function machWas() {
    return undefined;
}
var versuch;
versuch = undefined;
console.log(typeof list4);
// union
var path;
path = '/asdf/';
path = ['wert', 'asdf'];
var x = {};
if (typeof x === 'object') {
}
var list5 = [false, 23, true];
var list6 = [true, 12, false];
console.log(list6);
//# sourceMappingURL=main.js.map