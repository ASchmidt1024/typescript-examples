/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
(function () {
    // beannte Funktionen
    // function greet (name?: string) : string {
    var greet = function (name) {
        if (name) {
            return "Hallo, ich bin " + name;
        }
        else {
            return "\n                Hallo. Keine Ahnung,\n                wie ich hei\u00DFe.\n            ";
        }
    };
    var erg = greet('Hans');
    console.log(erg);
    // Arrow Function
    var greet2 = function (p) { return console.log((typeof p === 'string') ? 'Hallo, ich bin ' + p : 'Hallo.'); };
    greet2('Max');
    // function greet (name?: string) : string {
    var greet3;
    greet3 = function (name) {
        if (name) {
            return "Hallo, ich bin " + name;
        }
        else {
            return "\n                Hallo. Keine Ahnung,\n                wie ich hei\u00DFe.\n            ";
        }
    };
    console.log(greet3('Paul'));
})();
//# sourceMappingURL=main.js.map