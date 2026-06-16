import { Hero } from './hero.js';
declare class Mage extends Hero {
    private _mana;
    private _maxMana;
    constructor(name: string, health: number);
    get mana(): number;
    get maxMana(): number;
    set mana(amount: number);
    castSpell(cost: number, spellName: string): void;
    levelUp(): void;
}
export { Mage };
//# sourceMappingURL=mage.d.ts.map