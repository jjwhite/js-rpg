﻿Rpg.Character = function (_name, _type, _max_hp, _max_mp) {
    var self = this;

    var Public = {
        name: _name,
        type: _type,
        max_hp: _max_hp !== null ? _max_hp : 0, // neutral npc
        max_mp: _max_mp !== null ? _max_mp : 0, // neutral 

        // mutable status properties
        status: {
            life_status: Rpg.Character.Life_Status.Alive,
            hp: _max_hp,
            mp: _max_mp,
        },

        AddWeapon: function (_weapon) {
            this.weapon = _weapon;
        },

        TakeDamage: function (_damage) {
            this.status.hp -= _damage;
            CheckLifeStatus();
        }

    }

    var CheckLifeStatus = function () {
        if (Public.status.hp <= 0) {
            Public.status.hp = 0;
            if (Public.type == Rpg.Character.Type.Hero) {
                Public.status.life_status = Rpg.Character.Life_Status.KOed;
            } else {
                Public.status.life_status = Rpg.Character.Life_Status.Dead;
            }
        }
    }

    return Public;
}

Rpg.Character.Type = {
    Hero: 0,
    Neutral: 1,
    Enemy: 2
}

Rpg.Character.Life_Status = {
    Alive: 0,
    KOed: 1,
    Dead: 2,
    Undead: 3,
}