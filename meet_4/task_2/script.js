"use strict"

//№2
//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let result1 = "";

for (let i = 20; i <= 30; i+= 0.5) {
    result1 += i + " ";
}

document.getElementById("output1").textContent = result1;

// методи push, join

const result2 = [];

for (let i = 20; i <= 30; i += 0.5) {
  result2.push(i);
}

document.getElementById("output2").textContent = result2.join(" ");



//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let uanValue = 27;
let resultUanValue = [];

for (let i = 10; i <= 100; i += 10) {
    let cost = i * uanValue;        
    resultUanValue.push(cost);      
}

document.getElementById("output3").textContent = resultUanValue.join(", ");



//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let N = 80; 
let result = [];

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) {
    result.push(i);
  }
}

document.getElementById("output4").textContent = result.join(", ");



// Дане ціле число. З'ясувати, чи є воно простим 
// (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

// 1 - Якщо число меньше чи дорівнює 1 повертаємо false
// 2 - Перевіряємо числа від 2 до кореня квадратного вибраного числа (num)
// 3 - Якщо знайшли дільник, число не просте
// 4 - Якщо не знайшли дільник, число просте - return

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const number = 29;
document.getElementById("output5").textContent = number + (isPrime(number) ? " є простим числом" : " не є простим числом");



// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

// 1) Якщо  число 0 або меньше 1 false
// 2) while oстаток ділення на 3 поки ділиться
// 3) Якщо получаэмо 1 то це число 3 у якомусь ступені

const isPowerThree = (n) => {
  if (n < 1) return false;           
  while (n % 3 === 0) n /= 3;        
  return n === 1;                    
};

// const numberIsPowerThree = parseInt(prompt("Введіть число для перевірки, чи воно є ступенем 3:"), 10);
const numberIsPowerThree = 10;
const resultIsPowerThree = isPowerThree(numberIsPowerThree);

document.getElementById("output6").textContent = 
  numberIsPowerThree + 
  (resultIsPowerThree 
    ? " - це число 3 у якомусь ступені" 
    : " - не можна одержати шляхом зведення числа 3 у деякий ступінь"
);

//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length

const generateKey = (length, characters) => {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);
document.getElementById("output7").textContent = "Згенерований ключ: " + key;

//----------------



