// Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя. 
// Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.
class User{
    public name: string;
    public birthYear: number;

    constructor(name: string, birthYear: number){
        this.name = name;
        this.birthYear = birthYear;
    }

    public getAge(): number{
        return new Date().getFullYear() - this.birthYear;
    }
}


//Объявите класс Employee.
//, в конструктор которого передайте имя, фамилию, возраст и зарплату работника.
// Создайте класс Employee, который наследует от класса User.
class Employee extends User {
    surname: string;
    age: number;
    cash: number;

    constructor(name: string, surname: string, age: number, cash: number, birthYear: number){
        super(name, birthYear);
        this.surname = surname;
        this.age = age;
        this.cash = cash;
    }
}

// Создайте два объекта класса Employee.
let emp1: Employee = new Employee('', '', 0, 0, 2010);
let emp2: Employee = new Employee('', '', 0, 0, 2010);

// Создайте класс Student со свойствами name и age.
//Добавьте методы для получения и изменения этих свойств.
class Student {
    name: string = '';
    age: number = 0;

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

// Сделайте класс User, содержащий приватные свойства с именем и возрастом. Пусть их начальные значения задаются через конструктор.
// В вашем классе User сделайте публичные методы getName и getAge, позволяющие получить значения соответствующих приватных свойств.
// В вашем классе User сделайте публичные методы setName и setAge, позволяющие изменить значения соответствующих приватных свойств.
class User2 {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(value: number) {
        this.age = value;
    }

    public setName(value: string) {
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
    protected name: string;
    protected surname: string;
    
    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }
}

class Employee2 extends User3 {
    protected salary: number;
    
    constructor(name: string, surname: string, salary: number) {
        super(name, surname); 
        this.salary = salary;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public getSurn(): string {
        return this.surname;
    }
    
    public getSalary(): number {
        return this.salary;
    }
}

// Задайте классу User свойство age, доступное только для чтения. Создайте объект данного класса и выведите его возраст на экран.
class User4 {
    readonly age: number;

    constructor(age: number) {
		this.age = age;
	}
}

let user: User4 = new User4(20);

console.log(user.age);

// Сделайте класс User, содержащий приватные свойства с именем и возрастом. Сделайте аксессоры этих свойств.
// Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120. Если же будет указано иное значение, должно выбрасываться исключение.
class User5 {
    private _name!: string;
    private _age!: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public get name(): string {
        return this._name;
    }
    public get age(): number {
        return this._age;
    }

    public set name(value: string) {
        this._name = value;
    }

    public set age(value: number) {
        if (value < 0 || value > 120){
            throw new Error('Возраст должен быть в диапазоне от 0 до 120');
        }

        this._age = value; 
    }
}


// В класс Student добавьте статическое свойство specialty. Выведите данное свойство без объявления объекта.
// В класс Student добавьте статическое свойство university. Выведите данное свойство без объявления объекта.
class Student1 {
    public static specialty: string = 'asd';
    public static university: string = 'asdfd';
}

console.log(Student1.specialty);
console.log(Student1.university);

// В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
class Calc {
    public static getSum2(arr: number[]): number {
        let sum: number = 0;
        for (let i: number = 0; i < arr.length; i++){
            const num = arr[i];
            if (num !== undefined) { 
                sum += Math.pow(num, 2);
            }
        }

        return sum;
    }

    public static getSum3(arr: number[]): number {
        let sum: number = 0;
        for (let i: number = 0; i < arr.length; i++){
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
abstract class Figure {
    protected _perimeter: number;
    protected _square: number;

    constructor(perimeter: number, square: number){
        this._perimeter = perimeter;
        this._square = square;
    }

    public abstract getPerimeter(): number;
    public abstract getSquare(): number;
}

class Square extends Figure {
    constructor(perimeter: number, square: number){
        super(perimeter, square);
    }

    public getPerimeter(): number {
        return this._perimeter;
    }

    public getSquare(): number {
        return this._square;
    }
}

class Rectangle extends Figure {
    constructor(perimeter: number, square: number){
        super(perimeter, square);
    }
    
    public getPerimeter(): number {
        return this._perimeter;
    }

    public getSquare(): number {
        return this._square;
    }
}