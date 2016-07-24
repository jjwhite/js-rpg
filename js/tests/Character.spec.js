'use strict';

describe('Character component', function () {

    var testChar = new Rpg.Character("test", 0);

    it('is named test', function () {
        expect(testChar.name).toEqual("test");
    });

    it('is of type hero', function () {
        expect(testChar.type).toEqual(Rpg.Character.Type.Hero);
    });

    it('has a weapon after adding one', function () {
        testChar.AddWeapon(new Rpg.Weapon('test-weapon', 1, 10, 10));
        expect(testChar.weapon.name).toEqual('test-weapon');
    });

});