//№1
//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function task1(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (!array[i].startsWith("http://")){
            array.splice(i, 1);
        }
    }

    console.log(array);
}

//№2
//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function task2(array){
    for (let i = array.length - 1; i >= 0; i--){
        if (!array[i].endsWith(".html")) {
            array.splice(i, 1);
        }
    }

    console.log(array);
}

//№3
//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
function task3(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] * 1.1;
    }

    console.log(array);
}