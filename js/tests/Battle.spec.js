'use strict';

describe('Battle', function () {
   
    var heroParty = new Rpg.Party([
        new Rpg.Character('hero1', Rpg.Character.Type.Hero, 10, 10),
        new Rpg.Character('hero2', Rpg.Character.Type.Hero, 10, 10),
        new Rpg.Character('hero3', Rpg.Character.Type.Hero, 10, 10),
        new Rpg.Character('hero4', Rpg.Character.Type.Hero, 10, 10)
    ]);

    var enemyParty = new Rpg.Party([
        new Rpg.Character('enemy1', Rpg.Character.Type.Enemy, 10, 10),
        new Rpg.Character('enemy2', Rpg.Character.Type.Enemy, 10, 10),
        new Rpg.Character('enemy3', Rpg.Character.Type.Enemy, 10, 10),
        new Rpg.Character('enemy4', Rpg.Character.Type.Enemy, 10, 10)
    ])

    var testBattle = new Rpg.Battle(heroParty, enemyParty);

    it('does create queue', function () {
        expect(testBattle.queue.length).toEqual(8);
    });

    it('does set active character when started', function () {
        testBattle.next();
        expect(testBattle.activeChar !== null && testBattle.activeChar !== 'undefined').toEqual(true);
    })

    it('does move first object to back of queue', function () {
        testBattle.next();
        expect(testBattle.activeChar == testBattle.queue[testBattle.queue.length -1]).toEqual(true);
    })

});