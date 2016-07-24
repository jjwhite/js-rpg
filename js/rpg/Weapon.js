Rpg.Weapon = function (_name, _type, _damage, _weight) {
    var Public = {
        name: _name,
        type: _type,
        damage: _damage !== null ? _damage : 1,
        weight: _weight !== null ? _weight : 1
    }

    return Public;
}

Rpg.Weapon.Type = {
    Barehand: 0,
    Dagger: 1,
    ShortSword: 2,
    LongSword: 3,
    Axe: 4,
    Bow: 5,
    Staff: 6,
    Throwable: 7,
    Explosive: 8
}