//№1
//Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.
function task1(arr, char){
    let randomIndex;
    let mbRandomWord;
    let isFind = false;

    for (let i = 0; i < arr.length; i++){
        let word = arr[i];
        if (word[0] === char){
            isFind = true;
            break;
        } 
    }

    if (!isFind) return null;

    do {
        randomIndex = Math.floor(Math.random() * arr.length);
        mbRandomWord = arr[randomIndex];

    } while (mbRandomWord[0] !== char);

    return mbRandomWord;
}

//№2
//Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
function task2() {
    const dates = [];

    for (let year = 2000; year < 2100; year++) {
        for (let month = 1; month <= 12; month++) {
            let monthStr = '' + month;

            if (month < 10) {
                monthStr = '0' + month;
            }      

            let dateStr = '22.' + monthStr + '.' + year;
            let count = dateStr.split('2').length - 1;

            if (count === 4) {
                dates.push(dateStr);
            }
        }
    }

    return dates;
}

// №3
// Дан массив с точками:
// [
// 	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
// ]
// Отрисуйте эти точки на графике.
let points = [
  [1, 2],
  [2, 4],
  [3, 8],
  [4, 16],
  [5, 32],
];

const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');

ctx.beginPath();

points.forEach((point, index) => {
  const x = point[0] * 40;
  const y = 300 - point[1] * 6;

  if (index === 0) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
  }
});

ctx.stroke();