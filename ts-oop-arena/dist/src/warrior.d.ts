import { Hero } from './hero.js';
declare class Warrior extends Hero {
    private _armor;
    constructor(name: string, health: number, armor: number);
    get armor(): number;
    set armor(amount: number);
    takeDamage(amount: number): void;
}
export { Warrior };
//# sourceMappingURL=warrior.d.ts.map