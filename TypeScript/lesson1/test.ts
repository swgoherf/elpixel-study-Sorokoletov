// Сделайте три переменные: одну строковую, одну числовую и одну логическую.
let s: string;
let n: number;
let b: boolean;

// С помощью первого способа укажите тип данных в следующем массиве:
let arr1: number[] = [1, 2, 3, 4, 5];
// С помощью второго способа укажите тип данных в следующем массиве:
let arr2: Array<number> = [1, 2, 3, 4, 5];

// Сделайте объект, содержащий год, месяц и день в соответствующих ключах.
let obj = { year: 2026, month: 6, day: 15 };

// Перепишите следующий код через TypeScript:
// let res = 0;

// for (let i = 0; i < 100; i++) {
// 	res += i;
// }

// console.log(res);

let res1: number = 0;

for (let i: number = 0; i < 100; i++){
    res1 += i;
}

console.log(res1);

// Перепишите следующий код через TypeScript:
// let arr = [1, 2, 3, 4, 5];
// let res = 0;

// for (let elem of arr) {
// 	res += elem;
// }

// console.log(res);

let arr3: number[] = [1, 2, 3, 4, 5];
let res2: number = 0;

for (let elem of arr3){
    res2 += elem;
}

console.log(res2);

// Перепишите следующий код через TypeScript:
// let obj = {a: 1, b: 2, c: 3};
// let res = 0;

// for (let key in obj) {
// 	let elem = obj[key];
// 	res += elem;
// }

// console.log(res);

let obj2 = {a: 1, b: 2, c: 3};
let res3: number = 0;

for (let key in obj2){
    // let elem: number = obj2[key];
    // res3 += elem;
}

console.log(res3);

// Укажите тип результату и параметрам функции:

// function sum(x, y) {
// 	return x + y;
// }

function sum(x: number, y: number): number {
	return x + y;
}

// Укажите тип результату и параметрам функции:

// function sum(arr) {
// 	let res = 0;
	
// 	for (let num of arr) {
// 		res += num;
// 	}
	
// 	return res;
// }

function sum2(arr: number[]): number {
	let res = 0;
	
	for (let num of arr) {
		res += num;
	}
	
	return res;
}

// Укажите тип возвращаемого значения:

// function func(text: string) {
// 	console.log(text);
// }

function func(text: string): void {
	console.log(text);
}

// Перепишите следующий код через TypeScript:

// let arr = [1, '2', '3', 4, 5];
// console.log(arr);

let arr: any[] = [1, '2', '3', 4, 5];
console.log(arr);

//Сделайте переменную, которая может быть либо числом, либо null.
let nn: number | null;

// Сделайте переменную, которая может быть либо числом, либо строкой, либо логической.
let nsb: number | string | boolean;

//Создайте новый тип, объединяющий null и undefined.
type tnn = null | undefined;

// Создайте новый тип, объединяющий логический тип, null и undefined.
type bnn = boolean | null | undefined;

// Сделайте так, чтобы переменная могла принимать одно из трех значений: 'error', 'warning' или 'success'.
let str: 'error' | 'warning' | 'success';

// Сделайте тип данных, который будет разрешать переменной принимать одно из трех значений: 'error', 'warning' или 'success'.
type message = 'error' | 'warning' | 'success';

//Сделайте кортеж, который будет хранить номер года и номер месяца.
let yearmonth: [number, number] = [2026, 6];

//Сделайте кортеж, который будет хранить номер года и название месяца.
let yearmonth2: [number, string] = [2026, 'Июнь'];

// Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня.
let yearmonthday: [number, number, number] = [2026, 6, 15];

// Заполните данными следующий кортеж:
// let date: [number, number?, number?];
let date: [number, number?, number?];
date = [2026];

// Дан следующий кортеж:
// let time: [number, number, number] = [12, 59, 59];
// Разбейте части времени в отдельные переменные.
let time: [number, number, number] = [12, 59, 59]; 
let [hour, minute, second] = time;

// Заполните данными следующий кортеж:
// let tpl: [string, string, ...number[]];
let tpl: [string, string, ...number[]];
tpl = ['asd', 'asd', 1, 2, 3];

// Заполните данными следующий кортеж:
// let tpl: [number, boolean, ...string[]];
let tpl2: [number, boolean, ...string[]];
tpl2 = [10, true, 'asd', 'asd'];

//Сделайте перечисление, содержащее дни недели.
enum Days { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday };

// Сделайте перечисление Months и задайте в нем номера всем месяцам в году. Выведите в консоль первый и пятый месяцы.
enum Mounth { January = 1, February = 2, March = 3, April = 4, May = 5, June = 6, July = 7, August = 8, September = 9, October = 10, November = 11, December = 12 };
console.log(Mounth[1], Mounth[5]);

// Сделайте перечисление с названиями дней недели.
enum DaysStringKeys { 
    Monday = 'Monday', 
    Tuesday = 'Tuesday', 
    Wednesday = 'Wednesday', 
    Thursday = 'Thursday', 
    Friday = 'Friday', 
    Saturday = 'Saturday', 
    Sunday = 'Sunday',
};

//Сделайте переменную, которая будет содержать объект с датой.
let date2: Date = new Date;

//Сделайте переменную, которая будет содержать регулярное выражение.
let reg: RegExp = /.+?/;

//Сделайте переменную, которая будет содержать promise.
const myPromise: Promise<string> = new Promise((resolve) => {
    resolve("Успешно выполнено");
});

//Сделайте переменную, которая будет содержать DOM элемент.
let elem: HTMLElement = document.querySelector('div') as HTMLElement;
console.log(elem);

//Сделайте переменную, которая будет содержать ссылку на тег ul.
let ulElem: HTMLUListElement = document.querySelector('ul') as HTMLUListElement;
console.log(ulElem);

//Сделайте переменную, которая будет содержать коллекцию Map.
const map1: Map<string, number> = new Map();
map1.set("один", 1);

//Сделайте переменную, которая будет содержать коллекцию Set.
const set1: Set<number> = new Set();
set1.add(1);

//Сделайте переменную, которая будет содержать коллекцию NodeList.
let divs: NodeList = document.querySelectorAll('div');
console.log(divs);

//Сделайте переменную, которая будет содержать коллекцию HTMLCollection.
let divsCollection: HTMLCollection = document.getElementsByTagName('div');
console.log(divsCollection);

// Создайте три объекта, реализующих следующий интерфейс:
// interface Employee {
// 	name: string,
// 	age: number,
// 	salaryday: number
// }

interface Employee {
	name: string,
	age: number,
	salaryday: number
}

let employee1: Employee = { name: "Name1", age: 18, salaryday: 20 };
let employee2: Employee = { name: "Name2", age: 18, salaryday: 20 };
let employee3: Employee = { name: "Name3", age: 18, salaryday: 20 };

// Создайте три объекта, реализующих следующий интерфейс:
// interface Time {
// 	hour: number,
// 	minute: number,
// 	second: number
// }

interface Time {
	hour: number,
	minute: number,
	second: number
}

let time1: Time = { hour: 10, minute: 10, second: 10 };
let time2: Time = { hour: 10, minute: 12, second: 15 };
let time3: Time = { hour: 10, minute: 16, second: 18 };

//Сделайте объект со страной, содержащий название страницы и массив ее городов.
let Belarus: {
    capital: string, 
    cities: string[],
}

// Сделайте объект со страной, содержащий название страницы и массив ее городов.

interface Country {
    capital: string, 
    cities: string[],
}

let Russia: Country = {
    capital: 'Moscow',
    cities: [],
}

// Дан объект:
// let event = {
// 	name: 'my new event',
// 	time: {
// 		start: '2025-11-01',
// 		finish: '2025-12-31'
// 	}
// };
// Сделайте интерфейс, описывающий структуру этого объекта.

interface Event {
    name: string,
    time: {
        start: string,
        finish: string,
    }
}

let event: Event = {
	name: 'my new event',
	time: {
		start: '2025-11-01',
		finish: '2025-12-31'
	}
};

// Дан объект:
// let employee {
// 	name: 'andrew',
// 	potision: {
// 		name: 'programmer'
// 		salary: 1000,
// 	}
// 	addr: {
// 		country: 'belarus',
// 		city: 'minsk'
// 	}
// };
// Сделайте интерфейс, описывающий структуру этого объекта.

interface Employee2{
    name: string,
    potision: {
        name: string,
        salary: number,
    },
    addr: {
        country: string,
        city: string,
    }
}

let employee4: Employee2 = {
	name: 'andrew',
	potision: {
		name: 'programmer',
		salary: 1000,
	},
	addr: {
		country: 'belarus',
		city: 'minsk'
	}
};

// Дан объект:
// let employee {
// 	name: 'andrew',
// 	potision: {
// 		name: 'programmer'
// 		salary: 1000,
// 	},
// 	addr: {
// 		country: 'belarus',
// 		city: 'minsk'
// 	}
// };
// Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы.

interface Potision {
    name: string,
    salary: number,
}

interface Addr{
    country: string,
    city: string,
}

interface Employee3 {
    name: string,
    potision: Potision,
    addr: Addr,
}

let employee5: Employee3 = {
	name: 'andrew',
	potision: {
		name: 'programmer',
		salary: 1000,
	},
	addr: {
		country: 'belarus',
		city: 'minsk'
	}
};

// Дан объект:
// let user: User = {
// 	name: 'john',
// 	age: 30,
// 	parents: {
// 		mother: {
// 			name: 'jane',
// 			age: 30,
// 			parents: null
// 		},
// 		father: {
// 			name: 'eric',
// 			age: 30,
// 			parents: null
// 		}
// 	}
// }
// Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы.

interface Mother{
    name: string,
    age: number,
    parents: Parents | null,
}

interface Father{
    name: string,
    age: number,
    parents: Parents | null,
}


interface Parents{
    mother: Mother,
    father: Father,
}

interface User{
    name: string,
    age: number,
    parents: Parents,
}

let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: {
			name: 'jane',
			age: 30,
			parents: null
		},
		father: {
			name: 'eric',
			age: 30,
			parents: null
		}
	}
}

//Сделайте массив, элементы которого будут регулярными выражениями.
let arrRegs: RegExp[] = [];
arrRegs.push(new RegExp(/.+?/));

// Сделайте массив, элементы которого будут промисами.
let promises1: Promise<string>[] = [];
promises1.push(new Promise((resolve) => resolve("Первый")));


// Сделайте интерфейс, описывающий работника. Сделайте массив, состоящий из объектов с этими работниками.
interface Employee4{
    name: string,
    age: number,
}

let employeeArr: Employee4[] = [];

let employee6: Employee4 = {
    name: 'Asd',
    age: 12,
}

employeeArr.push(employee6);

// Сделайте функцию, которая принимать параметрами день, месяц и год, и возвращать день недели, соответствующий этой дате. 
// Пусть все три параметра будут не обязательными. 
// Если какой-то параметр не передан, он должен принять значение, соответствующее текущей дате.
function getDayOfWeek(day?: number, month?: number, year?: number): string | undefined {
    const now = new Date();
    
    const actualYear = year !== undefined ? year : now.getFullYear();
    const actualMonth = month !== undefined ? month - 1 : now.getMonth(); 
    const actualDay = day !== undefined ? day : now.getDate();
    
    const date = new Date(actualYear, actualMonth, actualDay);
    
    const weekdays: string[] = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    
    const dayOfWeek = date.getDay();
    
    return weekdays[dayOfWeek];
}

// Сделайте функцию, которая будет возводить число в заданную степень. Пусть первым параметром функция принимает число, а вторым - степень. 
// Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
function pow(num: number, degree: number = 2): number{
    if (degree === 0) return 1;

    return num * pow(num, degree - 1);
}

// Сделайте функцию, которая параметрами принимает любое количество чисел, а возвращает их сумму.
function asd(...nums: number[]): number{
    let sum: number = 0;
    for (let num of nums){
        sum += num;
    }

    return sum;
}

// Укажите переменной тип функции:
// let func = function(text: string): void {
// 	alert(text);
// };
let func2: (text: string) => void = function(text: string): void {
	alert(text);
};

// Дан следующий тип:
// type Func = (x: number, y: number, z: number) => number;
// Сделайте функцию данного типа. Пусть функция параметром получает три числа, а своим результатом возвращает сумму этих чисел.
type Func = (x: number, y: number, z: number) => number;

let func3: Func = function(x:number, y:number, z:number): number{
    let sum: number = x + y + z;
    return sum;
}

// Объявите тип функции, параметром принимающей число и массив чисел, а результатом возвращающий массив чисел.
type Func2 = (num: number, arr: number[]) => number[];

// Переделайте следующую функцию на стрелочную:
// let func = function(num1: number, num2: number): number {
// 	return num1 + num2;
// }
let func4 = (num1: number, num2: number): number => num1 + num2;

// Переделайте следующую функцию на стрелочную:
// let func = function(str: string): string[] {
// 	return str.split('');
// }

let func5 = (str: string): string[] => str.split('');

// Перепишите следующий JavaScript код на TypeScript вариант:
// let arr = [1, 2, 3];
// let res = arr.map(num => num ** 2);

// console.log(res);
let arr4: number[] = [1, 2, 3];
let res4: number[] = arr4.map((num: number): number => num ** 2);

console.log(res4); 