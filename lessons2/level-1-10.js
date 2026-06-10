//№1
//Заполните массив случайными числами из промежутка от 1 до 100.
let array = [];
function task1(arr, length){
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
}

task1(array, 10);
console.log(array)

//№2
//Дано некоторое число: 12345
//Выведите в консоль все его символы с конца.
let number = 12345
function task2(number){
    console.log(String(number).split('').reverse().join(' '));
}

task2(number);

/* №3
Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6] */

function task3(arr){
    let counter = 0;
    let lowArr = [];

    if (arr.length % 2 !== 0) return

    for (let i = 0; i < arr.length; i++){
        lowArr[counter] = arr[i];
        counter++;

        if (counter == 2){
            console.log(lowArr);
            counter = 0;
            lowArr = [];
        }
    }
}

/*№4
Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]*/

function task4(arr1, arr2){
    let mergeArr = arr1.concat(arr2);
    return mergeArr;
}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(task4(arr1, arr2));