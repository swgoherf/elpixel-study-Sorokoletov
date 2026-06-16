import { Hero } from './hero.js'

class Mage extends Hero{
    private _mana: number;
    private _maxMana: number;
    
    constructor(name: string, health: number) {
        super(name, health);
        this._maxMana = 100;
        this._mana = this.maxMana;
    }

    public get mana(): number {
        return this._mana;
    }

    public get maxMana(): number {
        return this._maxMana;
    }

    public set mana(amount: number) {
        if (amount < 0 || amount > this.maxMana){
            this.err(`Мана должна быть в диапазоне от 0 до ${this.maxMana}`);
            return;
        }

        this._mana = amount;
    }

    public castSpell(cost: number, spellName: string) {
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

    public override levelUp(): void {
        super.levelUp();
        this.mana = this.maxMana;

        console.log('Мана также полностью восстановлена!');
    }
}

export { Mage };