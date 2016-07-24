'use strict';

describe('Weapons component', function () {

    var testWeapon = new Rpg.Weapon("test", 0, 10, 10);

    it('is named test', function () {
        expect(testWeapon.name).toEqual("test");
    });

    it('is of type barehand', function () {
        expect(testWeapon.type).toEqual(Rpg.Weapon.Type.Barehand);
    });

    it('deals damage of 10', function () {
        expect(testWeapon.damage).toEqual(10);
    });
    
    it('has a weight of 10', function () {
        expect(testWeapon.weight).toEqual(10);
    });

   
});