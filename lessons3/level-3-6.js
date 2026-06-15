//№1
//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
function task1(arr){
    for (let i = arr.length - 1; i >= 0; i--){
        if (String(arr[i]).length > 3){
            arr.splice(i, 1);
        }
    }
}

// №2
// Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля. 

function task2(num){
    let nArr = String(num).split('');
    for (let i in nArr){
        if (+nArr[i] === 0){
            return false;
        }
    }

    return true;
}

// №3
// Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function task3(arr){
    return arr.join('').split('').map(Number);
}

// №4
// Дан следующая структура:
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

function task4(data){
    let sum = 0;

    for (let i = 0; i < data.length; i++){
        let obj = data[i];

        for (let property in obj){
            sum += obj[property];
        }
    }

    console.log(sum);
}