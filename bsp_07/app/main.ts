/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

var Profile = (function () {
    var Profile = function (n) {
        var pid = "21341234";

        Object.defineProperties(this, {
            lastname: {
                value: n,
                writable: false,
                configurable: false,
                enumerable: false
            },
            profileId: {
                get: function () {
                    return 'ProfileId: ' + pid;
                },
                set: function (newProfile: string) {
                    pid = newProfile
                },
                enumerable: true
            }
        });

        Object.seal(this);
    };

    return Profile;
})();

(function () {
    var p = new Profile('Max');
    console.log(p);
    console.log(p.profileId);
    p.profileId = '44444444';
    console.log(p.profileId);
})();