//№1
//Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function task1(number) {
    if (number < 0) {
        console.log("число меньше нуля");
    } 
    else if (number > 0) {
        console.log("число больше нуля");
    } 
    else console.log("число = 0");
}

//№2
//Дана строка. Выведите в консоль длину этой строки.
function task2(str){
    console.log(str.length);
}

//№3
//Дана строка. Выведите в консоль последний символ строки.
function task3(str){
    console.log(str[str.length - 1]);
}

//№4
//Дано число. Проверьте, четное оно или нет.
function task4(number){
    if (number % 2 == 0) {
        console.log("число четное");
    }
    else {
        console.log("число нечетное");
    }
}

//№5
//Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function task5(str1, str2){
    if (str1[0] == str2[0]){
        console.log("буквы совпадают")
    } 
    else {
        console.log("буквы не совпадают")
    }
}