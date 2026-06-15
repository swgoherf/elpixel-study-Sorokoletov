/*№1
Дана некоторая строка:
'a bc def ghij'
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
'A BC DEF ghij'*/
function task1(str){
    let newStr = '';
    let strings = str.split(' ');
    for (let i in strings){
        if (strings[i].length <= 3){
            newStr += strings[i].toUpperCase() + ' ';
        } 
        else {
            newStr = newStr + strings[i] + ' ';
        }
    }
    return newStr.trim();
}

//№2
//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем

function task2(char){
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
        console.log("верхний регистр");
    } 
    else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
        console.log("нижний регистр");
    }
}

//№3
//Дано некоторое число, например, такое: 123789
//Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
function task3(number){
    let sNum = String(number);
    let newStr ='';

    for (let i = 0; i < sNum.length; i++){
        if (+sNum[i] % 2 === 0) {
            newStr += sNum[i];
        }
    }

    return newStr;
}