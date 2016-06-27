/**
 * Created by Alexander Schmidt on 20.06.2016.
 */
var Projects = (function () {
    function Projects() {
    }
    return Projects;
}());
var Profile = (function () {
    function Profile() {
        this.profiles = [];
        this.profiles.push({
            firstname: 'Max',
            lastname: 'Mustermann'
        });
        this.project = {
            project_id: '23452452',
            project_title: 'Test'
        };
    }
    Profile.prototype.callName = function (arg) {
    };
    return Profile;
}());
var p1 = new Profile();
console.dir(p1);
//# sourceMappingURL=main.js.map