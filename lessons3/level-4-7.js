//№1
//Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function sortWords(str){
    return str.split(' ').sort().join(' ');
}

//№2
//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
function getCommonElements(arr1, arr2){
    let newArr = [];

    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j] && !newArr.includes(arr1[i])) {
                newArr.push(arr1[i]);
                break;
            }
        }
    }
    
    return newArr;
}

//№3
//Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
function randomNumber(min, max){
    let random = 0;

    if (randomNumber.last === undefined){
        randomNumber.last = null;
    }

    do {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (random === randomNumber.last);

    randomNumber.last = random;

    return random;
}

// №4
// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
function getNextElementInArray(arr, num){
    for (let i = 0; i < arr.length; i++){
        if (i === arr.length - 1 && arr[i] === num){
            return arr[0];
        }

        if (arr[i] === num){
            return arr[i + 1]
        } 
    }

    return null
}