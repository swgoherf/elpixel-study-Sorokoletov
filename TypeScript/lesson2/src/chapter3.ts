// Сделайте функцию, которая параметром принимает или два числа, или две строки. Своим результатом функция должна возвращать сумму параметров
function func1 <T extends string | number> (data1: T, data2: T): T {
    // @ts-ignore
    return data1 + data2;
}

// Напишите функцию для перебора и вывода всех элементов массива обобщенного типа в консоль.
function func2 <T> (data: T[]) {
    for (let i: number = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}

//На основе примера, рассмотренного в уроке, задайте функцию для нахождения длины числового массива.
function func3 <T extends {nums: number[]}> (data: T): number{
    return data.nums.length;
}