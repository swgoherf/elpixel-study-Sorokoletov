import { Hero } from './hero.js'

class Archer extends Hero {
    private _arrowCount: number;

    constructor(name: string, health: number){
        super(name, health);
        this._arrowCount = 10;
    }

    public get arrowCount(): number {
        return this._arrowCount;
    }

    public set arrowCount(amount: number) {
        if (amount < 0) {
            this.err('Количество стрел должно быть > 0');
            return;
        }
        
        this._arrowCount = amount;
    }

    public shoot(): void {
        if (this.arrowCount === 0) {
            console.log(`У героя ${this.name} нет стрел, нужна перезарядка!`);
            return;
        }

        this.arrowCount -= 1;
        console.log(`Герой ${this.name} сделал выстрел! У ${this.name} осталось ${this.arrowCount} стрел`);
    }

    public restock(amount: number) {
        if (amount <= 0) {
            console.log('Количество пополняемых стрел должно быть > 0');
            return;
        }
        
        this.arrowCount += Math.floor(amount);
        console.log(`${this.name} пополнил боезапас на ${Math.floor(amount)}! Теперь у него ${this.arrowCount} стрел`);
    }
}

export { Archer };