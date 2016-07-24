Rpg.Character = function (_name, _type) {
    var self = this;

    var Public = {
        name: _name,
        type: _type,

        AddWeapon: function (_weapon) {
            this.weapon = _weapon;
        }
    }

    return Public;
}

Rpg.Character.Type = {
    Hero: 0,
    Neutral: 1,
    Enemy: 2
}