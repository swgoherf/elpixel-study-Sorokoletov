//№1
//Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
function getDaysNextFeb29(dateStr) {
    let [year, month, day] = dateStr.split('-').map(Number);
    let target = new Date(year, month - 1, day);
    let fYear = target.getFullYear();

    while (true) {
        if ((fYear % 4 === 0 && fYear % 100 !== 0) || fYear % 400 === 0) {
            let feb29 = new Date(fYear, 1, 29);
      
            if (feb29 >= target) {
                return (feb29 - target) / (1000 * 60 * 60 * 24);
            }
        }

        fYear++;
    }
}

//№2
//Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.

function getNextMaslenitsaDate(year) {
    let marchFirst = new Date(year, 2, 1);

    let lastDayWinter = new Date(marchFirst - 1);
    
    while (lastDayWinter.getDay() !== 0) {
        lastDayWinter.setDate(lastDayWinter.getDate() - 1);
    }
    
    return lastDayWinter.toISOString().split('T')[0];
}

//№3
//Сделайте функцию, которая будет возвращать случайный цвет.

function getRandomColor() {
    const hexLetters = '0123456789ABCDEF';
    let ch = '#';
    
    for (let i = 0; i < 6; i++) {
        ch += hexLetters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

//№4
//Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
function getCommonDivs(arr) {
    if (arr.length === 0) return [];
    
    let min = Math.min.apply(null, arr);
    
    let commonDivs = [];
    
    for (let i = 1; i <= min; i++) {
        let isCommon = true;
        
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i !== 0) {
                isCommon = false;
                break;
            }
        }
        
        if (isCommon) {
            commonDivs.push(i);
        }
    }
    
    return commonDivs;
}

//№5
//Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.

function getMaxInAllArrs(arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max.apply(null, arr[i]);
        result.push(max);
    }
    
    return result;
}