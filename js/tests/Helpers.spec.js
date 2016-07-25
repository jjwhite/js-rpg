'use strict';

describe('Helpers', function () {
    var obj1 = { name: 'a', b: 'b' };
    var obj2 = { name: 'c', b: 'd' };
    var testArray = [obj1, obj2];

    it('does return obj by name', function () {
        expect(lookupItem(testArray, 'a')).toEqual(obj1);
    });

});