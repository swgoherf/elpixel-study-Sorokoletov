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
// Сделайте класс User, содержащий приватные свойства с именем и возрастом. Пусть их начальные значения задаются через конструктор.
// В вашем классе User сделайте публичные методы getName и getAge, позволяющие получить значения соответствующих приватных свойств.
// В вашем классе User сделайте публичные методы setName и setAge, позволяющие изменить значения соответствующих приватных свойств.
class User2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setAge(value) {
        this.age = value;
    }
    setName(value) {
        this.name = value;
    }
}
// Дан следующий класс:
// class User {
// 	protected name: string;
// 	protected surn: string;
// 	constructor(name: string, surn: string) {
// 		this.name = name;
// 		this.surn = surn;
// 	}
// }
// Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary, а также геттеры всех свойств, как своих, так и унаследованных.
class User3 {
    name;
    surname;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Employee2 extends User3 {
    salary;
    constructor(name, surname, salary) {
        super(name, surname);
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSurn() {
        return this.surname;
    }
    getSalary() {
        return this.salary;
    }
}
// Задайте классу User свойство age, доступное только для чтения. Создайте объект данного класса и выведите его возраст на экран.
class User4 {
    age;
    constructor(age) {
        this.age = age;
    }
}
let user = new User4(20);
console.log(user.age);
// Сделайте класс User, содержащий приватные свойства с именем и возрастом. Сделайте аксессоры этих свойств.
// Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120. Если же будет указано иное значение, должно выбрасываться исключение.
class User5 {
    _name;
    _age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(value) {
        this._name = value;
    }
    set age(value) {
        if (value < 0 || value > 120) {
            throw new Error('Возраст должен быть в диапазоне от 0 до 120');
        }
        this._age = value;
    }
}
// В класс Student добавьте статическое свойство specialty. Выведите данное свойство без объявления объекта.
// В класс Student добавьте статическое свойство university. Выведите данное свойство без объявления объекта.
class Student1 {
    static specialty = 'asd';
    static university = 'asdfd';
}
console.log(Student1.specialty);
console.log(Student1.university);
// В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
class Calc {
    static getSum2(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];
            if (num !== undefined) {
                sum += Math.pow(num, 2);
            }
        }
        return sum;
    }
    static getSum3(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            const num = arr[i];
            if (num !== undefined) {
                sum += Math.pow(num, 3);
            }
        }
        return sum;
    }
}
// Создайте абстрактный класс Figure, представляющий собой геометрическую фигуру. Пусть в нем будут свойства для периметра и площади.
// Сделайте класс Square, наследующий от класса Figure.
// Сделайте класс Rectangle, наследующий от класса Figure.
// В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.
class Figure {
    _perimeter;
    _square;
    constructor(perimeter, square) {
        this._perimeter = perimeter;
        this._square = square;
    }
}
class Square extends Figure {
    constructor(perimeter, square) {
        super(perimeter, square);
    }
    getPerimeter() {
        return this._perimeter;
    }
    getSquare() {
        return this._square;
    }
}
class Rectangle extends Figure {
    constructor(perimeter, square) {
        super(perimeter, square);
    }
    getPerimeter() {
        return this._perimeter;
    }
    getSquare() {
        return this._square;
    }
}
//# sourceMappingURL=chapter1.js.map