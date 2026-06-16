import { ICharacter } from './ICharacter.js';
declare abstract class Hero implements ICharacter {
    private _name;
    private _health;
    level: number;
    constructor(name: string, health: number);
    get name(): string;
    get health(): number;
    set name(name: string);
    set health(amount: number);
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
    protected err(reason: string): void;
}
export { Hero };
//# sourceMappingURL=hero.d.ts.map