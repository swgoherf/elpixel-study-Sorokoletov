//№1
//Дана строка: 'abcde' Получите массив букв этой строки.
let str = 'abcde';

function task1(str){
    let array = str.split('');
    console.log(array);
}

task1(str);

//№2
//Дано некоторое число: 12345 Получите массив цифр этого числа.
let number = 12345

function task2(number){
    let array = String(number).split('');
    console.log(array);
}

task2(number);

//№3
//Дано некоторое число: 12345
//Переверните его: 54321
function task3(number){
    let str = String(number).split('').reverse().join('');
    console.log(Number(str));
}

//№4
//Дано некоторое число: 12345 Найдите сумму цифр этого числа.
function task4(number){
    let array = String(number).split('');
    let sum = 0;

    for (let i = 0; i < array.length; i++){
        sum += Number(array[i]);
    }

    console.log(sum);
}