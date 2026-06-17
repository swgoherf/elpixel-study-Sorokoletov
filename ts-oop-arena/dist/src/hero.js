"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
class Hero {
    _name;
    _health;
    level;
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.level = 1;
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    set name(name) {
        if (name.trim() === '') {
            this.err('Имя не может быть пустой строкой!');
            return;
        }
        for (let i = 0; i < name.length; i++) {
            if (!isNaN(Number(name[i]))) {
                this.err('Имя не может содержать числа!');
                return;
            }
        }
        this._name = name;
    }
    set health(amount) {
        if (amount < 0 || amount > 100) {
            this.err('Здоровье должно быть в диапазоне от 0 до 100');
            return;
        }
        this._health = amount;
    }
    takeDamage(amount) {
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
        if (this.health <= 0) {
            console.log(`Герой ${this.name} умер`);
        }
    }
    heal(amount) {
        if (amount <= 0) {
            this.err('Исцеление должно быть > 0');
            return;
        }
        const newHealth = this.health + amount;
        if (newHealth >= 100) {
            this.health = 100;
            console.log('Здоровье полностью восстановлено');
        }
        else {
            this.health = newHealth;
            console.log(`${this.name} исцелился на ${amount}. Текущее здоровье: ${this.health}`);
        }
    }
    levelUp() {
        this.level += 1;
        this.health = 100;
        console.log(`${this.name} поднялся до ${this.level} уровня! Здоровье полностью восстановлено!`);
    }
    err(reason) {
        console.log(`Ошибка: ${reason}`);
    }
}
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map