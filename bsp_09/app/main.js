/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
var Profile = (function () {
    function Profile(n) {
        this._pid = '234523452';
        this.lastname = n;
    }
    Profile.prototype.callName = function () {
        console.log(this.lastname);
    };
    Object.defineProperty(Profile.prototype, "pid", {
        get: function () {
            return this._pid;
        },
        enumerable: true,
        configurable: true
    });
    Profile._status = 'employed';
    return Profile;
}());
var p1 = new Profile('Max');
console.log(p1.pid);
//# sourceMappingURL=main.js.map