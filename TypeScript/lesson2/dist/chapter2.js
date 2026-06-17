"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Реализуйте объект calc созданного выше интерфейса.
let calc = {
    num1: 1,
    num2: 2,
    getSum() {
        return this.num1 + this.num2;
    },
};
let user = {
    age: 10,
    salary: 100,
    validAge() {
        if (this.age < 18) {
            console.log('Вам меньше 18! Доступ запрещен');
        }
    }
};
let func1 = function (str1, str2) {
    return str1 + ' ' + str2;
};
let func2 = function (num) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
};
let func3 = function (str) {
    let words = str.split(' ');
    return words;
};
let arr = [1, 2, 3, 4];
let arr2 = { 1: '', 2: 'dasf' };
// Сделайте класс Math, который реализует интерфейс IMath.
class Math {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    getDiv() {
        return this.num1 / this.num2;
    }
}
class Employee {
    name;
    birthday;
    salary;
    language;
    constructor(name, birthday, salary, language) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}
//# sourceMappingURL=chapter2.js.map