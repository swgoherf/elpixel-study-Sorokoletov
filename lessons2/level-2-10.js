//№1
//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
function task1(str){
    let counter = 0;

    for (let i = 0; i < str.length; i++){
        if (isNaN(str[i]) && str[i] !== ' '){
            counter++;
        }
    }

    
    if (counter <= 3) {
        return true
    } else {
        return false
    }
}

//№2
//Дано число. Получите первую четную цифру с конца этого числа.
function task2(number){
    let sNum = String(number);
    for (let i = sNum.length - 1; i >= 0; i--) {
        if (+sNum[i] % 2 === 0) {
            return +sNum[i];
        }
    }
}

/*
№3
Дана некоторая строка:
'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!':
'!bcde !bcde !bcde' */
function task3(str){
    let newStr = '';
    for (let i = 0; i < str.lenght; i++){
        if (i === 0) {
            newStr += '!';
        } 
        else if (str[i - 1] === ' ') {
            newStr += '!'; 
        }
        else {
            newStr += str[i];
        }
    }

    return newStr;
}

/*№4
Дан массив с числами:
[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.*/
function task4(arr){
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]){
            return true;
        }
    }

    return false;
}