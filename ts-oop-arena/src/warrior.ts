import { Hero } from './hero.js'

class Warrior extends Hero {
    private _armor: number;

    constructor(name: string, health: number, armor: number) {
        super(name, health);
        this._armor = 0;

        this.armor = armor;
    }   

    public get armor(): number {
        return this._armor;
    }

    public set armor(amount: number) {
        if (amount < 0) {
            this.err('Броня не может быть < 0');
            return;
        }

        this._armor = amount;
    } 

    public override takeDamage(amount: number): void {
        const damageRes: number = Math.min((0.052 * this.armor) / (0.9 + 0.048 * this.armor), 0.85); 
        const finalDamage: number = Math.floor(amount * (1 - damageRes));

        console.log(`Броня героя ${this.name} поглотила ${amount - finalDamage} урона!`)

        super.takeDamage(finalDamage);
    }
}

export { Warrior };