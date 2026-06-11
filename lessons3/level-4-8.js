//№1
//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
function randomElementFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

//№2
//Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
function randomArrayFromArray(arr, n){
    let newArr = [] 

    for (let i = 0; i < n; i++){
        newArr.push(arr[Math.floor(Math.random() * arr.length)])
    }

    return newArr;
}

//№3
//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
function randomElementFromArrayNoDouble(arr){
    let random = 0;

    if (randomElementFromArrayNoDouble.last === undefined){
        randomElementFromArrayNoDouble.last = null;
    }

    do {
        random = arr[Math.floor(Math.random() * arr.length)];
    } while (random === randomElementFromArrayNoDouble.last);

    randomElementFromArrayNoDouble.last = random;

    return random;
}

//№4
//Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
function getArrSimpleNumbers(min, max){
    let arr = [];
    for (let i = min; i <= max; i++){
        let isSimple = true;

        if (i <= 1) continue;

        for (let j = 2; j < i; j++){
            if (i % j === 0){
                isSimple = false;
                break;
            }
        }

        if (isSimple) arr.push(i);
    }

    return arr;
}

//№5
//Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
function sumNumbers(){
    let sum = 0;

    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}

//№6
//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
function fillArrayRandomNumbers(n, min, max){
    let arr = [];
    let random = 0;
    fillArrayRandomNumbers.last = null;

    for (let i = 0; i < n; i++){
        do {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (random === fillArrayRandomNumbers.last);

        fillArrayRandomNumbers.last = random;

        arr.push(random);
    }

    return arr;
}

//№7
//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
function fillArrayFullRandomNumbers(n, min, max){
    if (n > (max - min + 1)) {
        return null;
    }
    
    let arr = [];
    
    for (let i = 0; i < n; i++){
        let random;
        let isDouble;
        
        do {
            random = Math.floor(Math.random() * (max - min + 1)) + min;
            isDouble = arr.includes(random);  
        } while (isDouble);
        
        arr.push(random);
    }
    
    return arr;
}