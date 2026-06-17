// Создайте интерфейс IMath со свойствами num1 и num2.
// Создайте интерфейс IMath со свойствами num1 и num2, а также методом getSum, который будет суммировать оба числа.
interface IMath {
    num1: number;
    num2: number;

    getSum(): number;
}

// Реализуйте объект calc созданного выше интерфейса.
let calc: IMath = {
    num1: 1,
    num2: 2,

    getSum(): number {
        return this.num1 + this.num2;
    },
}

// Для интерфейса IUser, реализуйте метод для проверки возраста. Если возраст юзера меньше 18, пусть отобразится сообщение о том, что доступ запрещен.
// Создайте интерфейс IUser, в котором свойство salary будет доступным только для чтения.
interface IUser {
    age: number,
    readonly salary: number,

    validAge(): void;
}

let user: IUser = {
    age: 10,
    salary: 100,

    validAge() {
        if (this.age < 18) {
            console.log('Вам меньше 18! Доступ запрещен');
        }
    }
}

// Сделайте интерфейс IDate для объекта, хранящего дату: год, месяц и день. Пусть все свойства объекта будут необязательными.
interface IDate {
    year?: number,
    month?: number,
    day?: number,
}

// Создайте интерфейс для функции, параметром принимающей две строки и возвращающей эти строки, сложенные через пробел.
interface IConcTwoStr {
    (str1: string, str2: string): string;
}

let func1: IConcTwoStr = function(str1: string, str2: string): string {
    return str1 + ' ' + str2;
}

// Создайте интерфейс для функции, параметром принимающей число и возвращающей массив делителей этого числа.
interface IDivsFunc {
    (num: number): number[];
}

let func2: IDivsFunc = function(num: number): number[] {
    const divisors: number[] = [];
    
    for (let i: number = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    
    return divisors;
}

// Создайте интерфейс для функции, параметром принимающей строку и возвращающей массив слов из этой строки.
interface IParseStrToWords {
    (str: string): string[];
}

let func3: IParseStrToWords = function(str: string): string[] {
    let words: string[] = str.split(' ');

    return words;
}

// Создайте интерфейс, описывающий массив со значениями в виде чисел.
interface IArrNum {
    [index: number]: number;
}

let arr: IArrNum = [1, 2, 3, 4];

// Создайте интерфейс, описывающий объект с ключами в виде чисел, а значениями в виде строк.
interface IArrStr {
    [index: number]: string;
}

let arr2: IArrStr = {1: '', 2: 'dasf'};

// Создайте интерфейс IMath со свойствами num1 и num2 и методом getDiv, который будет делить первое число на второе.
interface IMath2 {
    num1: number,
    num2: number,

    getDiv(): number;
}

// Сделайте класс Math, который реализует интерфейс IMath.
class Math implements IMath2{
    num1: number;
    num2: number;

    constructor(num1: number, num2: number){
        this.num1 = num1;
        this.num2 = num2;
    }

    getDiv(): number {
        return this.num1 / this.num2;
    }
}

// Создайте интерфейс IProgrammer со свойствами salary и language. Пусть данный интерфейс наследует IUser со свойствами name, birthday.
interface IUser2 {
    name: string;
    birthday: Date;
}

interface IProgrammer extends IUser2{
    salary: number;
    language: string;
}

class Employee implements IProgrammer {
    name: string;
    birthday: Date;
    salary: number;
    language: string;

    constructor(name: string, birthday: Date, salary: number, language: string){
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}