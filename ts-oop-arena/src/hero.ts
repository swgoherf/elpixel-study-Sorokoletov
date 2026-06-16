import { ICharacter } from './ICharacter.js'

abstract class Hero implements ICharacter {
    private _name!: string;
    private _health!: number;
    public level: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
        this.level = 1;
    }

    public get name(): string {
        return this._name;
    }

    public get health(): number {
        return this._health;
    }

    public set name(name: string) {
        if (name.trim() === ''){
            this.err('Имя не может быть пустой строкой!');
            return;
        }

        for (let i: number = 0; i < name.length; i++){
            if (!isNaN(Number(name[i]))){
                this.err('Имя не может содержать числа!')
                return;
            }
        }

        this._name = name;
    }

    public set health(amount: number) {
        if (amount < 0 || amount > 100){
            this.err('Здоровье должно быть в диапазоне от 0 до 100');
            return;
        }

        this._health = amount;
    }

    public takeDamage(amount: number): void {
        if (amount <= 0) {
            this.err('Урон должен быть больше 0');
            return;
        }

        const newHealth = this.health - amount;

        if (newHealth < 0) {
            this.health = 0;
        } 
        else {
            this.health = newHealth;
        }

        console.log(`Герою ${this.name} был нанесен урон в количестве ${amount}. Текущее ХП: ${this.health}`);

        if (this.health <= 0){
            console.log(`Герой ${this.name} умер`);
        }
    }

    public heal(amount: number): void {
        if (amount <= 0) {
            this.err('Исцеление должно быть > 0');
            return;
        }

        const newHealth = this.health + amount;

        if (newHealth >= 100){
            this.health = 100;

            console.log('Здоровье полностью восстановлено');
        } 
        else {
            this.health = newHealth;   

            console.log(`${this.name} исцелился на ${amount}. Текущее здоровье: ${this.health}`);
        }
    }

    public levelUp(): void {
        this.level += 1;
        this.health = 100;

        console.log(`${this.name} поднялся до ${this.level} уровня! Здоровье полностью восстановлено!`);
    }

    protected err(reason: string): void {
        console.log(`Ошибка: ${reason}`);
    }
}

export { Hero };