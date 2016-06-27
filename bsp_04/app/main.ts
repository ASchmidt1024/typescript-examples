/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

(function () {
    'use strict';

    var andererContext : any = {
        color: 'yellow'
    },
        neuerContext : any = {

            color: 'blue',

            faerbeUm : function (p) {
                console.log(p, this.color);
            }

        }

    console.log(typeof neuerContext);

    neuerContext.faerbeUm.call(andererContext, 'sowas');
    neuerContext.faerbeUm.apply(andererContext, ['sowas2']);

})();

