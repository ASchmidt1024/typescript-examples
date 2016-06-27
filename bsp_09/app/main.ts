/**
 * Created by Alexander Schmidt on 20.06.2016.
 */

class Profile {

    constructor (n : string) {
        this.lastname = n;
    }

    static _status = 'employed';
    public lastname : string;
    private _pid: string = '234523452';

    callName () {
        console.log(this.lastname);
    }

    get pid () {
        return this._pid
    }

}

var p1 = new Profile('Max');
console.log(p1.pid);

