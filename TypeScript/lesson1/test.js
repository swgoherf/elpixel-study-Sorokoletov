"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Сделайте три переменные: одну строковую, одну числовую и одну логическую.
let s;
let n;
let b;
// С помощью первого способа укажите тип данных в следующем массиве:
let arr1 = [1, 2, 3, 4, 5];
// С помощью второго способа укажите тип данных в следующем массиве:
let arr2 = [1, 2, 3, 4, 5];
// Сделайте объект, содержащий год, месяц и день в соответствующих ключах.
let obj = { year: 2026, month: 6, day: 15 };
// Перепишите следующий код через TypeScript:
// let res = 0;
// for (let i = 0; i < 100; i++) {
// 	res += i;
// }
// console.log(res);
let res1 = 0;
for (let i = 0; i < 100; i++) {
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
let arr3 = [1, 2, 3, 4, 5];
let res2 = 0;
for (let elem of arr3) {
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
let obj2 = { a: 1, b: 2, c: 3 };
let res3 = 0;
for (let key in obj2) {
    // let elem: number = obj2[key];
    // res3 += elem;
}
console.log(res3);
// Укажите тип результату и параметрам функции:
// function sum(x, y) {
// 	return x + y;
// }
function sum(x, y) {
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
function sum2(arr) {
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
function func(text) {
    console.log(text);
}
// Перепишите следующий код через TypeScript:
// let arr = [1, '2', '3', 4, 5];
// console.log(arr);
let arr = [1, '2', '3', 4, 5];
console.log(arr);
//Сделайте переменную, которая может быть либо числом, либо null.
let nn;
// Сделайте переменную, которая может быть либо числом, либо строкой, либо логической.
let nsb;
// Сделайте так, чтобы переменная могла принимать одно из трех значений: 'error', 'warning' или 'success'.
let str;
//Сделайте кортеж, который будет хранить номер года и номер месяца.
let yearmonth = [2026, 6];
//Сделайте кортеж, который будет хранить номер года и название месяца.
let yearmonth2 = [2026, 'Июнь'];
// Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня.
let yearmonthday = [2026, 6, 15];
// Заполните данными следующий кортеж:
// let date: [number, number?, number?];
let date;
date = [2026];
// Дан следующий кортеж:
// let time: [number, number, number] = [12, 59, 59];
// Разбейте части времени в отдельные переменные.
let time = [12, 59, 59];
let [hour, minute, second] = time;
// Заполните данными следующий кортеж:
// let tpl: [string, string, ...number[]];
let tpl;
tpl = ['asd', 'asd', 1, 2, 3];
// Заполните данными следующий кортеж:
// let tpl: [number, boolean, ...string[]];
let tpl2;
tpl2 = [10, true, 'asd', 'asd'];
//Сделайте перечисление, содержащее дни недели.
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
;
// Сделайте перечисление Months и задайте в нем номера всем месяцам в году. Выведите в консоль первый и пятый месяцы.
var Mounth;
(function (Mounth) {
    Mounth[Mounth["January"] = 1] = "January";
    Mounth[Mounth["February"] = 2] = "February";
    Mounth[Mounth["March"] = 3] = "March";
    Mounth[Mounth["April"] = 4] = "April";
    Mounth[Mounth["May"] = 5] = "May";
    Mounth[Mounth["June"] = 6] = "June";
    Mounth[Mounth["July"] = 7] = "July";
    Mounth[Mounth["August"] = 8] = "August";
    Mounth[Mounth["September"] = 9] = "September";
    Mounth[Mounth["October"] = 10] = "October";
    Mounth[Mounth["November"] = 11] = "November";
    Mounth[Mounth["December"] = 12] = "December";
})(Mounth || (Mounth = {}));
;
console.log(Mounth[1], Mounth[5]);
// Сделайте перечисление с названиями дней недели.
var DaysStringKeys;
(function (DaysStringKeys) {
    DaysStringKeys["Monday"] = "Monday";
    DaysStringKeys["Tuesday"] = "Tuesday";
    DaysStringKeys["Wednesday"] = "Wednesday";
    DaysStringKeys["Thursday"] = "Thursday";
    DaysStringKeys["Friday"] = "Friday";
    DaysStringKeys["Saturday"] = "Saturday";
    DaysStringKeys["Sunday"] = "Sunday";
})(DaysStringKeys || (DaysStringKeys = {}));
;
//Сделайте переменную, которая будет содержать объект с датой.
let date2 = new Date;
//Сделайте переменную, которая будет содержать регулярное выражение.
let reg = /.+?/;
const myPromise = new Promise((resolve) => {
    resolve("Успешно выполнено");
});
//# sourceMappingURL=test.js.map