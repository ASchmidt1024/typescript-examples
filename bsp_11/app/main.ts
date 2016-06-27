/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

// Vererbung

class Profile {
    public name: string;
    constructor(n) {
        this.name = n;
    }
}

class Partner extends Profile {
    public activities: any[];

    constructor(n) {
        super(n);
        this.activities = ['Joggen'];
    }
}

var p1 = new Partner('Max');
console.log(p1);
