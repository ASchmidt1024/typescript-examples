/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

(function(){
    // beannte Funktionen

    // function greet (name?: string) : string {
    var greet = function (name?: string): string {
        if (name) {
            return `Hallo, ich bin ${name}`;
        } else {
            return `
                Hallo. Keine Ahnung,
                wie ich heiße.
            `;
        }
    };

    var erg:string = greet('Hans');
    console.log(erg);

    // Arrow Function
    var greet2 = (p) => console.log((typeof p === 'string') ? 'Hallo, ich bin ' + p : 'Hallo.');

    greet2('Max');

    // function greet (name?: string) : string {
    var greet3 : (name: string) => string;
    greet3 = (name?: string): string => {
        if (name) {
            return `Hallo, ich bin ${name}`;
        } else {
            return `
                Hallo. Keine Ahnung,
                wie ich heiße.
            `;
        }
    };

    console.log(greet3('Paul'));

})();
