Rpg.Battle = function (_heroParty, _enemyParty, _isTestMode) {

    var Public = {
        heroParty: _heroParty,
        enemyParty: _enemyParty,
        queue: [],
        targets: [],
        status: Rpg.Battle.Status.InProgress,
        isTestMode: _isTestMode || false,

        next: function () {
            MoveNext();
        },

        act: function (_actionType) {
            switch (_actionType) {
                case Rpg.Battle.ActionType.Attack:
                    Attack();
                    break;
                case Rpg.Battle.ActionType.Spell:
                    CastSpell();
                    break;

            }

            MoveNext();
        }

    }

    var Init = function () {
        //TODO: order by stamina
        Public.queue = Public.heroParty.characters.concat(Public.enemyParty.characters);
    }

    var MoveNext = function () {
        CheckStatus();
        if (Public.status != Rpg.Battle.Status.InProgress) {
            FinishBattle();
            return;
        }
        Public.activeChar = Public.queue[0];
        Public.queue.shift();
        Public.queue.push(Public.activeChar);
    }

    var Attack = function () {
        var dmg = Public.isTestMode ? Public.activeChar.weapon.damage : GetDamage(GetDamageFactor(), Public.activeChar.weapon.damage);
        for (x = 0; x < Public.targets.length; x++) {
            Public.targets[x].TakeDamage(dmg);
        }
    }

    var CastSpell = function () {
        var ac = Public.activeChar;
        var as = ac.activeSpell;


        switch (as.type) {
            case Rpg.Spell.Type.Damage:
                var dmg = Public.isTestMode ? as.rating : GetDamage(GetDamageFactor(), as.rating);
                for (x = 0; x < Public.targets.length; x++) {
                    Public.targets[x].TakeDamage(dmg);
                }
                return;
            case Rpg.Spell.Type.Healing:
                var healing = as.rating;
                //calculate across all targets
                var heal_val = healing / Public.targets.length;
                for (x = 0; x < Public.targets.length; x++) {
                    Public.targets[x].Heal(heal_val);
                }
                return;
        }

        ac.RemoveMP(ac.RemoveMP(as.cost))


    }

    var GetDamage = function (_dmgFactor, _maxDmg) {
        if (_dmgFactor == 1)
            return _maxDmg * 1.5; //critical hit

        return _dmgFactor * _maxDmg;
    }

    var GetDamageFactor = function () {
        //eventually take into account item properties but for now just random
        return rdm = 0.1 * getRandomIntInclusive(0, 10);

    }

    var CheckStatus = function () {

        var heroesAlive = false;
        var enemiesAlive = false;

        //first check heros
        for (h = 0; h < Public.heroParty.characters.length; h++) {
            if (Public.heroParty.characters[h].status.life_status == Rpg.Character.Life_Status.Alive)
                heroesAlive = true;
        }

        //next check enemies
        for (h = 0; h < Public.enemyParty.characters.length; h++) {
            if (Public.enemyParty.characters[h].status.life_status == Rpg.Character.Life_Status.Alive)
                enemiesAlive = true;
        }

        if (!heroesAlive) {
            Public.status = Rpg.Battle.Status.Defeat;
        } else if (!enemiesAlive) {
            Public.status = Rpg.Battle.Status.Victory;
        }
    }

    var FinishBattle = function () {
        //TODO
    }

    Init();

    /* Expose private methods for testing */
    if (Public.isTestMode) {
        Public.GetDamage = GetDamage;
    }
    /* End testing code */

    return Public;

}

Rpg.Battle.ActionType = {
    Attack: 0,
    Spell: 1,
    Item: 3,
    Flee: 4
}

Rpg.Battle.Status = {
    InProgress: 0,
    Victory: 1,
    Defeat: 2
}