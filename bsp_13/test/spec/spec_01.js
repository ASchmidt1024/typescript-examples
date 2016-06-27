/**
 * Created by Alexander Schmidt on 21.06.2016.
 */

describe('meine App', function() {
    
    var p;
    
    beforeAll(function() {
        p = new products();
    });

    it('should take products', function() {
        expect(p.addProduct).toBeDefined();
    });

});
