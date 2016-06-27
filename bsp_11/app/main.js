/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Vererbung
var Profile = (function () {
    function Profile(n) {
        this.name = n;
    }
    return Profile;
}());
var Partner = (function (_super) {
    __extends(Partner, _super);
    function Partner(n) {
        _super.call(this, n);
        this.activities = ['Joggen'];
    }
    return Partner;
}(Profile));
var p1 = new Partner('Max');
console.log(p1);
//# sourceMappingURL=main.js.map