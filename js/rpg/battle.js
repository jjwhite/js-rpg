Rpg.Battle = function (_heroParty, _enemyParty) {
    
    var Public = {
        heroParty: _heroParty,
        enemyParty: _enemyParty,
        queue: [],

        next: function(){
            MoveNext();
        },

    }

    var Init = function () {
        //TODO: order by stamina
        Public.queue = Public.heroParty.characters.concat(Public.enemyParty.characters);
    }

    var MoveNext = function () {
        Public.activeChar = Public.queue[0];
        Public.queue.shift();
        Public.queue.push(Public.activeChar);
    }

    Init();
    return Public;
}