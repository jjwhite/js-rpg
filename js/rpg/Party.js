﻿Rpg.Party = function (_characters) {
    var Public = {
        characters: _characters,

        add: function (_character) {
            charaters.push(_character);
        },

        remove: function (_character) {
            characters.pop(_character);
        }
    }

    return Public;
}