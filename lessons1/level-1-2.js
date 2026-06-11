//№1
//Дано число. Выведите в консоль первую цифру этого числа.
function task1(number) {
    console.log(String(Math.abs(number))[0]);
}

//№2
//Дано число. Выведите в консоль последнюю цифру этого числа.
function task2(number) {
    let str = String(number);
    console.log(str[str.length - 1]);
}

//№3
//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function task3(number) {
    let str = String(number);
    let sum = +str[0] + +str[str.length - 1];
    console.log(sum);
}

//№4
//Дано число. Выведите количество цифр в этом числе.
function task4(number) {
    let str = String(Math.abs(number));
    console.log(str.length);
}

//№5
//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function task5(number1, number2) {
    let str1 = String(number1);
    let str2 = String(number2);

    if (str1[0] == str2[0]) {
        console.log("числа совпадают");
    }
    else {
        console.log("числа не совпадают");
    }
}