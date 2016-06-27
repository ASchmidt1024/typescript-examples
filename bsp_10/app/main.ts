/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

interface HalloInterface {
    callName(arg: any): void;
}

interface profile {
    firstname: string;
    lastname: string;
}

class Projects {
    project_id: string;
    project_title: string;
}

class Profile implements HalloInterface {
    profiles: profile[] = [];
    project: Projects;
    constructor() {
        this.profiles.push({
            firstname: 'Max',
            lastname: 'Mustermann'
        });
        this.project = {
            project_id: '23452452',
            project_title: 'Test'
        }
    }
    callName(arg: any): void {

    }
}

var p1 = new Profile();
console.dir(p1);

