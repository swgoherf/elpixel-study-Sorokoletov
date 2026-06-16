import { Hero } from './hero.js';
declare class Archer extends Hero {
    private _arrowCount;
    constructor(name: string, health: number);
    get arrowCount(): number;
    set arrowCount(amount: number);
    shoot(): void;
    restock(amount: number): void;
}
export { Archer };
//# sourceMappingURL=archer.d.ts.map