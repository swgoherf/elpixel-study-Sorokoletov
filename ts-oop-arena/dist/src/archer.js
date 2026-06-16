import { Hero } from './hero.js';
class Archer extends Hero {
    constructor(name, health) {
        super(name, health);
        this._arrowCount = 10;
    }
    get arrowCount() {
        return this._arrowCount;
    }
    set arrowCount(amount) {
        if (amount < 0) {
            this.err('Количество стрел должно быть > 0');
            return;
        }
        this._arrowCount = amount;
    }
    shoot() {
        if (this.arrowCount === 0) {
            console.log(`У героя ${this.name} нет стрел, нужна перезарядка!`);
            return;
        }
        this.arrowCount -= 1;
        console.log(`Герой ${this.name} сделал выстрел! У ${this.name} осталось ${this.arrowCount} стрел`);
    }
    restock(amount) {
        if (amount <= 0) {
            console.log('Количество пополняемых стрел должно быть > 0');
            return;
        }
        this.arrowCount += Math.floor(amount);
        console.log(`${this.name} пополнил боезапас на ${Math.floor(amount)}! Теперь у него ${this.arrowCount} стрел`);
    }
}
export { Archer };
//# sourceMappingURL=archer.js.map