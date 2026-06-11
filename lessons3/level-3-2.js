//№1
//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная
function task1(){
    let nums = [];
    for (let i = 10; i <= 1000; i++) {
        if (Math.floor(i / 10) % 2 === 0){
            nums.push(i);
        }
    }

    console.log(nums);
}

//№2
//Дан массив. Удалите из него каждый пятый элемент.
function task2(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        if ((i + 1) % 5 === 0){
            arr.splice(i, 1);
        }
    }
}

//№3
//Дана некоторая переменная с числом:let num = 5;
//Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'
function task3(num){
    let res = new Array(num);
    res.fill(0);

    return res.join('');
}

//№4
//Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
//Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
//'aaa ccc fff'

function task4(str){
    let sArr = str.split(' ');

    for (let i = sArr.length - 1; i >= 0; i--) {
        if ((i + 1) % 2 === 0){
            sArr.splice(i, 1);
        }
    }

    return sArr.join(' ');
}

/*№5
Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Найдите сумму элементов этого массива. */
function task5(arr){
    let nArr = arr.join(',').split(',');
    let sum = 0;
    for (let i = 0; i < nArr.length; i++){
        sum += +nArr[i];
    }

    console.log(sum);
}

