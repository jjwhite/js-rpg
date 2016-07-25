Rpg.Spell = function (_name, _type, _category, _value) {
    var Public = {
        name: _name,
        type: _type,
        rating: _value !== null ? _value : 1,
        category : _category,
    }

    return Public;
}

Rpg.Spell.Type = {
    Healing: 0,
    Damage :1
}

Rpg.Spell.Category = {
    Fire: 0,
    Ice: 1,
    Wind: 2,
    Water: 3
}