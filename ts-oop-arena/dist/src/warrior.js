import { Hero } from './hero.js';
class Warrior extends Hero {
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
export { Warrior };
//# sourceMappingURL=warrior.js.map