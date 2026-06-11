//№1
//Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
function getCountDiv(num){
    let count = 0;

    for (let i = 1; i <= num; i++){
        if (num % i === 0){
            count++;
        }
    }

    return count;
}

//№2
//Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
function getZodiac(date){
    let [year, month, day] = date.split('-');
    month = Number(month);
    day = Number(day);
    
    let zodiacs = [
        { name: "Козерог", monthStart: 12, dayStart: 22, monthEnd: 1, dayEnd: 19 },
        { name: "Водолей", monthStart: 1,  dayStart: 20, monthEnd: 2, dayEnd: 18 },
        { name: "Рыбы", monthStart: 2,  dayStart: 19, monthEnd: 3, dayEnd: 20 },
        { name: "Овен", monthStart: 3,  dayStart: 21, monthEnd: 4, dayEnd: 19 },
        { name: "Телец", monthStart: 4,  dayStart: 20, monthEnd: 5, dayEnd: 20 },
        { name: "Близнецы", monthStart: 5,  dayStart: 21, monthEnd: 6, dayEnd: 20 },
        { name: "Рак", monthStart: 6,  dayStart: 21, monthEnd: 7, dayEnd: 22 },
        { name: "Лев", monthStart: 7,  dayStart: 23, monthEnd: 8, dayEnd: 22 },
        { name: "Дева", monthStart: 8,  dayStart: 23, monthEnd: 9, dayEnd: 22 },
        { name: "Весы", monthStart: 9,  dayStart: 23, monthEnd: 10, dayEnd: 22 },
        { name: "Скорпион", monthStart: 10, dayStart: 23, monthEnd: 11, dayEnd: 21 },
        { name: "Стрелец", monthStart: 11, dayStart: 22, monthEnd: 12, dayEnd: 21 }
    ];
    
    for (let zodiac of zodiacs) {
        if ((month === zodiac.monthStart && day >= zodiac.dayStart) || (month === zodiac.monthEnd && day <= zodiac.dayEnd)) {
            return zodiac.name;
        }
    }
}

//№3
//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
function getDivs(num){
    let divs = [];

    for (let i = 1; i <= num; i++){
        if (num % i === 0) {
            divs.push(i);
        }
    }

    return divs;    
}

//№4
//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function checkSimpleNumber(num){
    if (num <= 1) return false

    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }

    return true
}

//№5
//Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

function deleteEvenNumbers(num){
    let numbers = String(num).split('').map(Number);

    for (let i = numbers.length - 1; i >= 0; i--){
        if (numbers[i] % 2 === 0){
            numbers.splice(i, 1);
        }
    }

    return Number(numbers.join(''));
}

//№6
//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
function fillArray(n, min, max){
    let arr = [];

    for (let i = 0; i <= n; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}