'use strict';

describe('Battle', function () {
   
    var heroParty, enemyParty, testBattle;

    

    beforeEach(function(){
        heroParty = new Rpg.Party([
            new Rpg.Character('hero1', Rpg.Character.Type.Hero, 10, 10),
            new Rpg.Character('hero2', Rpg.Character.Type.Hero, 10, 10),
            new Rpg.Character('hero3', Rpg.Character.Type.Hero, 10, 10),
            new Rpg.Character('hero4', Rpg.Character.Type.Hero, 10, 10)
        ]);

         enemyParty = new Rpg.Party([
            new Rpg.Character('enemy1', Rpg.Character.Type.Enemy, 10, 10),
            new Rpg.Character('enemy2', Rpg.Character.Type.Enemy, 10, 10),
            new Rpg.Character('enemy3', Rpg.Character.Type.Enemy, 10, 10),
            new Rpg.Character('enemy4', Rpg.Character.Type.Enemy, 10, 10)
         ])

         heroParty.characters.forEach(addWeapons);
         enemyParty.characters.forEach(addWeapons);
        testBattle = new Rpg.Battle(heroParty, enemyParty);

        function addWeapons(char) {
            char.EquipWeapon(new Rpg.Weapon('test', 0, 10, 10));
        }
    })

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

    it('does damage to targets when attacked', function () {
        
        testBattle.targets = enemyParty.characters;
        testBattle.next();
        
        testBattle.act(Rpg.Battle.ActionType.Attack);

        expect(testBattle.enemyParty.characters[0].status.hp == 0).toEqual(true);
      
    })

    it('ends battle in victory when all enemies are dead', function(){
        testBattle.targets = enemyParty.characters;
        testBattle.next();

        testBattle.act(Rpg.Battle.ActionType.Attack);

        expect(testBattle.status).toEqual(Rpg.Battle.Status.Victory);
    })

    it ('ends battle in defeat when all heros are KOed', function(){
        testBattle.targets = heroParty.characters;
        testBattle.next();

        testBattle.act(Rpg.Battle.ActionType.Attack);

        expect(testBattle.status).toEqual(Rpg.Battle.Status.Defeat);
    })

});