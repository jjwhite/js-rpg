Rpg.Spell = function (_name, _type, _category, _value, _cost) {
    var Public = {
        name: _name,
        type: _type,
        rating: _value || 1,
        category: _category,
        cost: _cost
    }

    return Public;
}

Rpg.Spell.Type = {
    Healing: 0,
    Damage: 1,
    Revive: 2
}

Rpg.Spell.Category = {
    Fire: 0,
    Ice: 1,
    Wind: 2,
    Water: 3,
    Healing: 4
}