"use strict";

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"]; // Emoji는 Ctrl + Command + Space
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열에 마직막 값을 확인 하고 싶을때.

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

// c. forEach : 배열안에 들어있는 값마다 내가 전달한 함수를 출력하는구나
fruits.forEach(function () {
  // Command + Api(forEach)를 클릭하면, 사용법을 확인할 수 있다.
  console.log("he");
});

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array); // 보통은 array를 출력하지 않는다.
});

fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});

// 익명의 function은 Arrow를 사용하여 표기할 수 있으며, 가로도 생략이 가능하다
// SO,

fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletin, copy
// push: add an item to the end
fruits.push("🍑", "🍇");
console.log(fruits);
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are MUCH MUCH slower than pop, push

// splice(꼬아서 이어주다): remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍓"));
console.log(fruits.indexOf("🍑"));
console.log(fruits.indexOf("🍇")); // 배열 안에 포도가 없으면, -1이 출력된다.

//Includes
console.log(fruits.includes("🍉")); // 배열에 수박이 있는지 없는지 확인
console.log(fruits.includes("🍇"));

//lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.lastIndexOf("🍎"));
