// objects
// one of the JavaScript's data types.
// a collection fo related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key(Property) : value }; object 는 key와 value의 집합체이다. => 우리 접근할 수 있는 Property(변수) 와  값으로 나뉠 수 있다.

"use strict";

//1. literals and properties
const name = "ellie"; // Data를 간편하게 관리하기가 어렵고, 이렇게 코드를 짜면은 변수값이 너무 많아진다.
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 }; // Javascript에서는 클레스가 없어도 바로 Object를 생성할 수 있다.
print(ellie);

// 자바스크립트는  Dynamically typed language. - 동적으로 타입이 런타임일때 움직이는 언어이다.
// with JavaScript magic (dynamically typed language)
// can add properties later

ellie.hasjob = true; // 마음이 바뀌어서 데이터를 언제든지 마음대로 추가할 수 있다. 하지만 유지보수가 힘들므로 가능하면 사용하지 마라.
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasjob; // 마음이 바뀌어서 값을 뺄 수도 있다.
console.log(ellie.hasJob);

// 2. computed properties( 계산된 Properties )
// key should be always string
console.log(ellie.name); // . 을 사용할때는 코딩하는 그 순간, 키에 해당하는 값을 받아올때, .을 사용 " 코딩을 할때, .을 사용"
console.log(ellie["name"]); // string type
ellie["hasJob"] = true; // 어떤 키를 정확하게 받아올지 모르고, 런타임때, 키를 받아올때, Computer property를 사용한다.
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, "name"); // 다양한 키들을 변경할 수도 있다.
printValue(ellie, "age"); // 나중에 동적으로 키에 관련된 value을 받아올때 사용할 수도 있다.

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
//const person4 = { name: '' };
const person4 = makePerson("ellie", 30);

function amkePerson(name, age) {
  return {
    //name: name,
    //age: age,
    //or
    name,
    age,
  };
}

// 또는

// 4. Constructor function
const person4 = new Person("elile", 30);
console.log(person4);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

//  5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

//6. for...in vs for..of
//for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
//for(let i = 0; i < array.length ; i++) {
//    console.log(array[i]);
//}
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest. [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = uswer;
uswer2.name = "coder";
console.log(user);

// old way
const user = {};
for (key in user) {
  user[key] = user[key];
}
console.log(user3);

const uswer4 = Object.assign({}, user);
Object.assign(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 애(fruits2)의 값이 앞의 값을 덮는다
console.log(mixed.color);
console.log(mixed.size);
