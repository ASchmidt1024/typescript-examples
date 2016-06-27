/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
(function () {
    'use strict';
    var Profile = function (n) {
        var profileId = '1234124312432';
        this.lastname = n;
        this.getProfileId = function () {
            return profileId;
        };
    };
    Profile.prototype.callName = function () {
        console.log(this.lastname);
    };
    var p = Profile;
    var profile1 = new Profile('Max');
    profile1.callName();
    console.log('PID:', profile1.getProfileId());
    console.dir(profile1);
    console.log(profile1);
    console.dir(Profile);
    console.log(Profile instanceof Object);
    console.log(Profile instanceof Function);
})();
//# sourceMappingURL=main.js.map