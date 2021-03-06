"use strict";

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π"]; // Emojiλ Ctrl + Command + Space
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // λ°°μ΄μ λ§μ§λ§ κ°μ νμΈ νκ³  μΆμλ.

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach : λ°°μ΄μμ λ€μ΄μλ κ°λ§λ€ λ΄κ° μ λ¬ν ν¨μλ₯Ό μΆλ ₯νλκ΅¬λ
fruits.forEach(function () {
  // Command + Api(forEach)λ₯Ό ν΄λ¦­νλ©΄, μ¬μ©λ²μ νμΈν  μ μλ€.
  console.log("he");
});

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array); // λ³΄ν΅μ arrayλ₯Ό μΆλ ₯νμ§ μλλ€.
});

fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// μ΅λͺμ functionμ Arrowλ₯Ό μ¬μ©νμ¬ νκΈ°ν  μ μμΌλ©°, κ°λ‘λ μλ΅μ΄ κ°λ₯νλ€
// SO,

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletin, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are MUCH MUCH slower than pop, push

// splice(κΌ¬μμ μ΄μ΄μ£Όλ€): remove an item by index position
fruits.push("π", "π", "π");
console.log(fruits);
fruits.splice(1, 1, "π", "π");
console.log(fruits);

// combine two arrays
const fruits2 = ["π", "π₯₯"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π")); // λ°°μ΄ μμ ν¬λκ° μμΌλ©΄, -1μ΄ μΆλ ₯λλ€.

//Includes
console.log(fruits.includes("π")); // λ°°μ΄μ μλ°μ΄ μλμ§ μλμ§ νμΈ
console.log(fruits.includes("π"));

//lastIndexOf
console.clear();
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.lastIndexOf("π"));
