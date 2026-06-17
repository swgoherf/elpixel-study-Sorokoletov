"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const hero_js_1 = require("./hero.js");
class Warrior extends hero_js_1.Hero {
    _armor;
    constructor(name, health, armor) {
        super(name, health);
        this._armor = 0;
        this.armor = armor;
    }
    get armor() {
        return this._armor;
    }
    set armor(amount) {
        if (amount < 0) {
            this.err('Броня не может быть < 0');
            return;
        }
        this._armor = amount;
    }
    takeDamage(amount) {
        const damageRes = Math.min((0.052 * this.armor) / (0.9 + 0.048 * this.armor), 0.85);
        const finalDamage = Math.floor(amount * (1 - damageRes));
        console.log(`Броня героя ${this.name} поглотила ${amount - finalDamage} урона!`);
        super.takeDamage(finalDamage);
    }
}
exports.Warrior = Warrior;
//# sourceMappingURL=warrior.js.map