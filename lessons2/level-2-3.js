//№1
//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

function task1(str1, str2){
    if (str1[str1.length - 1] === str2[0]){
        return true;
    } else {
        return false;
    }
}

//№2
//Дана некоторая строка. Найдите позицию третьего нуля в строке.
function task2(str){
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 0) {
            counter++;
            if (counter === 3){
                console.log(i);
                return
            }
        }
    }
}

//№3
//Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

function task3(str){
    let numbers = str.split(',');
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += +numbers[i];
    }

    console.log(sum);
}

/*
№4
Дана дата в следующем формате:
'2025-12-31'
Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
} */

function task4(date){
    let [year, month, day] = date.split('-');

    return {year, month, day};
}

