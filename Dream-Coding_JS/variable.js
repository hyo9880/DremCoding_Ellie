//1. "use strict";
// added in ES 5
//use this for valina Javascript
"use strict";

//2. Variable, rw(read/write) 읽고 쓰는 것이 가능
// let (added in ES6)

// global scope

{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from botton to top: 어디에 선언했는거와 상관없이 제일 위로 끌어 올려주는 것을 말함)
//  var hs no block scope {}

//3. Constants 읽기만 가능함
//use const whenever possible.
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// Variable types
// 데이터의 타입에 따라서, privimitive 타입인지, object 타입인지에 따라서 다른방식으로 저장됩니다.
// primitive type: single item: number, string, boolean, null, undefine, symbol: privitive type한번에 저장
// object type: box container: 오브젝트 타입은 메모리가 너무 커서 한번에 올라 갈 수가 없다.... ref(reference-실제로 오브젝트가 있는 메모리를 가르키고 있는 곳)가 있다.

// privitive 타입은 value로 값이 저장되고,
// object type은 Object를 가르키는 Reference가 메모리를  저장된다.
// function: first-class function

const count = 17; // integer(정수)
const size = 17.1; // decimal number
console.log("value: ${count}, type: ${typeof count}");
console.log("value: ${size}, type: ${typeof size}");

// NOTE!!!!!
// Immutalbe data types: premitive types, frozen objects (i.e. object.freeze())
// Mutalbe data type: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - secrutity
// - thread safety
// - reduce human mistakes

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yeat)
const bigInt = 124567890124567890124567890124567890124567890n; // over (-2**53) ~ 2*53)
console.log("value: ${bigInt}, typeof: ${typeof bigInt}");
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log("value: ${greeting}, type: ${typeof greeting}");
const helloBob = "hi ${brendan}!"; //template literals (string)
console.log("value: ${helloBob}, type: ${typeof helloBob}");

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log("value: %{canRead}, type: ${typeof canRead}");
console.log("value: ${test}, type: ${typeof test}");

// null
let nothing = null; // 값이 텅텅 비어있음
console.log("value: ${nothing}, type: ${typeof nothing}");

//undefined
let x; //값이 아직 할당되지 않음
console.log("value: ${x}, type: ${typeof x}");

//symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id"); // 같은 String이라고 하더라도, 고유한 식별자로 사용하기 위해서 사용
console.log(symbole1 === symbol2);
const gSymbol1 = Symbol.for("id"); // Symbol.for 주어진 스트링에 만든 심볼을 만들어줘
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // ture
console.log("value: ${symbol1.description}, type: ${typeof symbol1}");
// symbol 은 바로 출력하면 안되고, .description을 사용하여 스트링으로 바꿔줘야한다.

//object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// 자바스크립트 언어는, 프로그래밍이 동작할때(런타임) 할당된 값에 따라서 데이터 타입이 변경될수 있다.

// 이런 종류의 prototype을 만들때는 유용하게 쓰이지만, 발등에 불똥이 뜰어질때는.... 문제가 될 수 있다.

let text = "hello";
console.log("value: ${text}, type: ${typeof text}");
text = 1;
console.log("value: ${text}, type: ${typeof text}");
text = "7" + 5;
console.log("value: ${text}, type: ${typeof text}");
text = "8" + "2";
console.log("value: ${text}, type: ${typeof text}");
