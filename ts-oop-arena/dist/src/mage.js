"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const hero_js_1 = require("./hero.js");
class Mage extends hero_js_1.Hero {
    _mana;
    _maxMana;
    constructor(name, health) {
        super(name, health);
        this._maxMana = 100;
        this._mana = this.maxMana;
    }
    get mana() {
        return this._mana;
    }
    get maxMana() {
        return this._maxMana;
    }
    set mana(amount) {
        if (amount < 0 || amount > this.maxMana) {
            this.err(`Мана должна быть в диапазоне от 0 до ${this.maxMana}`);
            return;
        }
        this._mana = amount;
    }
    castSpell(cost, spellName) {
        if (cost <= 0) {
            this.err('Стоимость заклинания должна быть > 0');
            return;
        }
        const newMana = this.mana - cost;
        if (newMana < 0) {
            console.log('Не хватает маны!');
            return;
        }
        this.mana = newMana;
        console.log(`${this.name} перменил способность "${spellName}". У него осталось ${this.mana} маны`);
    }
    levelUp() {
        super.levelUp();
        this.mana = this.maxMana;
        console.log('Мана также полностью восстановлена!');
    }
}
exports.Mage = Mage;
//# sourceMappingURL=mage.js.map