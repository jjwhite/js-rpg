'use strict';

describe('Character component', function () {

    it('is named test', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        expect(testChar.name).toEqual("test");
    });

    it('is of type hero', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        expect(testChar.type).toEqual(Rpg.Character.Type.Hero);
    });

    it('has a weapon after equiping one', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.EquipWeapon(new Rpg.Weapon('test-weapon', 1, 10, 10));
        expect(testChar.weapon.name).toEqual('test-weapon');
    });

    it('has a armor after equiping one', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.EquipArmor(new Rpg.Armor('test-armor', 1, 10, 10));
        expect(testChar.armor.name).toEqual('test-armor');
    });

    it('has lower hp after taking damage', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.TakeDamage(50);
        expect(testChar.status.hp).toEqual(50);
    });

    it('has higher hp after healing', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.TakeDamage(50);
        testChar.Heal(20);
        expect(testChar.status.hp).toEqual(70);
    });

    it('cannot be healed beyond maxHP', function(){
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.TakeDamage(50);
        testChar.Heal(100);
        expect(testChar.status.hp).toEqual(100);
    });

    it('Hero is KOed after taking too much damage', function(){
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Hero, 100, 0);
        testChar.TakeDamage(100);
        expect(testChar.status.life_status).toEqual(Rpg.Character.Life_Status.KOed);
    });

    it('Enemy is Dead after taking too much damage', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Enemy, 100, 0);
        testChar.TakeDamage(100);
        expect(testChar.status.life_status).toEqual(Rpg.Character.Life_Status.Dead);
    });

    it('has item in inventory when added', function () {
        var testChar = new Rpg.Character("test", Rpg.Character.Type.Enemy, 100, 0);
        var weapon = new Rpg.Weapon('test-inventory-weapon', 1, 10, 10);
        testChar.AddToInventory(weapon);
        expect(lookupItem(testChar.inventory, 'test-inventory-weapon')).toEqual(weapon);
    });

});