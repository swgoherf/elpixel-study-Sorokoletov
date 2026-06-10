/*
№1
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
*/
function task1(str){
    for (let i = 0; i < str.length; i++){
        if (!isNaN(str[i]) && str[i] !== ' ') {
            console.log(i);
            return
        }
    }
}

/*
№2
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
*/
let properties = [];
let values = [];
let obj = {a: 1, b: 2, c: 3};

function task2(obj, properties, values){
    for (let property in obj) {
        properties.push(property);
        values.push(obj[property]) ;
    }
}

task2(obj, properties, values);
console.log(properties);
console.log(values);

/*
№3
Дано число. Выведите в консоль количество четных цифр в этом числе.
*/
function task3(number){
    let str = String(number);
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (+str[i] % 2 === 0){
            counter++;
        }
    }

    console.log(counter);
}

/*
№4
Дана некоторая строка:
'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
'AbCdE' */
function task4(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0) newStr += str[i].toUpperCase();
        else newStr += str[i];
    }

    return newStr;
}

/*
№5
Дана некоторая строка со словами:
'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
'Aaa Bbb Ccc'
*/
function task5(str){
    let newStr = "";

    for (let i = 0; i < str.length; i++){
        if (i === 0) {
            newStr += str[i].toUpperCase();
        }
        else if (str[i - 1] === " ") {
            newStr += str[i].toUpperCase();
        } 
        else {
            newStr += str[i];
        }
    }

    return newStr;
}