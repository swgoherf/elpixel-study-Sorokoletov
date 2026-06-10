//№1
//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function task1(str) {
    if (str.length > 1) {
        console.log(str[str.length - 2]);
    } 
}

//№2
//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function task2(number1, number2) {
    if (number2 == 0) return
    
    if (number1 % number2 == 0) {
        console.log("делится без остатка");
    }
    else {
        console.log("делится с остатком");
    }
}