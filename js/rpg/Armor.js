Rpg.Armor = function (_name, _type, _weight, _rating) {
    var Public = {
        name: _name,
        type: _type,
        rating: _rating !== null ? _rating : 1,
        weight: _weight !== null ? _weight : 1,

        //ratings for individual types would be positive for strength and negative for weakness
        attackRating: 0,
        magicRating: 0,
        fireRating: 0,
        iceRating: 0,
        windRating: 0,
        waterRating: 0
    }

    return Public;
}

Rpg.Armor.Type = {
    Light: 0,
    Heavy: 1,
    Magic: 2
}