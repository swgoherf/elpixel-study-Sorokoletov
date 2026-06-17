"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя. 
// Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.
class User {
    name;
    birthYear;
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}
//Объявите класс Employee.
//, в конструктор которого передайте имя, фамилию, возраст и зарплату работника.
// Создайте класс Employee, который наследует от класса User.
class Employee extends User {
    surname;
    age;
    cash;
    constructor(name, surname, age, cash, birthYear) {
        super(name, birthYear);
        this.surname = surname;
        this.age = age;
        this.cash = cash;
    }
}
// Создайте два объекта класса Employee.
let emp1 = new Employee('', '', 0, 0, 2010);
let emp2 = new Employee('', '', 0, 0, 2010);
// Создайте класс Student со свойствами name и age.
//Добавьте методы для получения и изменения этих свойств.
class Student {
    name = '';
    age = 0;
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
//# sourceMappingURL=main.js.map