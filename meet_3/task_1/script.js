"use strict"

//Вивести на сторінку в один рядок через кому числа від 10 до 20.
const numbers = [];

for (let i = 10; i < 21; i++) {
    numbers.push(i);
}

document.getElementById("output").textContent = numbers.join(", ");

//Вивести квадрати чисел від 10 до 20.
for (let i = 10; i < 21; i++) {
    let num = i*i
    console.log(num); 
}

//3 - Вивести таблицю множення на 7.
for (let i = 0; i < 11; i++) {
    let num = i*7
    console.log(num); 
};

//4 - Знайти суму всіх цілих чисел від 1 до 15.
let sum = 15 * (15+1)/2;
console.log(sum); 

//5 - Знайти добуток усіх цілих чисел від 15 до 35.
console.log('Знайти добуток усіх цілих чисел від 15 до 35.');

let product = 1n;
for (let i = 15n; i < 35n; i++) {
    product *= i; // або  product = product * i;
};
console.log(product.toString());

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let arithmeticSum = 0;
let amountNum = 500;
for (let i = 1; i < 501; i++) {
    arithmeticSum += i;
};
let arithmeticMean = arithmeticSum / amountNum;
console.log(arithmeticMean);

//7 - Вивести суму лише парних чисел в діапазоні від 30 до 80.

let evenNumbersSum1 = 0;
for (let i = 30; i <= 8; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    evenNumbersSum1 = evenNumbersSum1 + i;
};
console.log(evenNumbersSum1);

let evenNumbersSum2 = 0;

for (let i = 30; i <= 80; i+=2) {
    evenNumbersSum2 += i;
};

console.log(evenNumbersSum2);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let result = [];

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    result.push(i);
  }
}

console.log(result.join(", "));
