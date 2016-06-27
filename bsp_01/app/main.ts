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
var counter3 : number;

// Weiter Datentypen
// Array
var list1 = new Array();
var list2 = [];
var list3 : number[] = [1,2,345];
console.log(list3);

// Enum
enum Color {Red, Green, Blue};
var c : Color = Color.Blue;
console.log(c);

// Any
var nichtSicher : any = 34;
nichtSicher = { // object
    title : 'Überschrift'
};
var list4 : any[] = [];

// void - undefined
function machWas() : void {
    return undefined;
}

var versuch : void;
versuch = undefined;
console.log(typeof list4);

// union
var path : string[]|string;
path = '/asdf/';
path = ['wert', 'asdf'];

var x : any = {};
if (typeof x === 'object') { // type guard
    //console.log(x.splice(3,1));
}

var list5 : Array<boolean|number> = [false,23,true];
type Primitives = Array<boolean|number>;
var list6 : Primitives = [true,12,false];
console.log(list6);

