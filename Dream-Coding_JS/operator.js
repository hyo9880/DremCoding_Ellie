// 1. String concatenation (연결, 연쇄)
console.log("my" + " cat"); // + 기호를 사용해서, 문자열가 문자열을 합해서, 새로운 문자열을 만들 수 있다.
console.log("1" + 2); // 문자와 숫자열일 더해지면, 숫자가 문자열로 변화되어 더해진다.
console.log("string literals: 1 + 2 = ${1 + 2}");

console.log(`string literals: 

,,,,,,

1 + 2 = ${1 + 2}`);

console.log("ellie's book");
console.log("ellie's book"); // ''문자열 기호와 어퍼스트로피를 구분하기 위해서 백스러시(\)사용
console.log("ellie's \n\tbook"); // \n 줄발꿈, \t TAP키
// ``(뱁틱)기 $(달러) 기호를 사용해서, 변수값을 계산해서 String으로 포함해서 문자열을 만들게 됩니다. *string literals 좋은점은 줄바꿈을 하거나,중간에 특수 기호인 싱글쿼트(,,)를 사용해도, 고대로 문자열로 변환해서 확인할 수가 있다.

// 2. Nemeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder : 나누고 나머지값
console.log(2 ** 3); // exponentiation : 2의 3승

//  3. increment(++), decrement(--) operation
let counter = 2;
const preIncrement = ++counter; //변수 앞에 ++ 붙혀주면, PreCrement라고 한다.
r = counter + 1;
rement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = coutner++;
// postIncrement = counter;
// counter =  counter + 1;
`postIncrement: ${postIncrement}, counter: ${counter}`;
crement = --counter;
`postIncrement: ${postDecrement}, counter: ${counter}`;
decrement = counter--;
`postIncrement: ${postDecrement}, counter: ${counter}`;

// 4. Assingment operators : 할당하는 Operators
let x = 3;
let y = 6;
x += y; // x = x + y; 반복되는 x를 생략할 수 있다.
x = +y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = flase;
const value2 = 4 < 2;

// || (or) : *** or 연산자는 처음에 Ture가 나오면 거기에서 연산자가 멈춘다.
console.log(`or: ${value1 || value2 || check()}`); //*심플한 애들부터 앞에서 불러오는 것이 좋다, 그래서 Expression 이나 함수를 제일 뒤에 붙이는 것이 제일 효율적인 코드다.

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("");
  }
  return true;
}

// && (and), finds the first falsy value, flase 면 동작하지 않는다.
console.log(`and: ${value1 && value2 && check()}`);

// &&의 경우, 간편하게 null 체크 할때도 많이 쓰인다. often used to compress long if-statement
// nullableObject && nullableObject.somthing
// => 코드화
if (nullableObject != null) {
  nullableObject.somthing;
}

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("");
  }
  return true;
}

// ! (not) : 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality operators
// == loose equality, with type conversin : type이랑 상관없이 값이 같으면 같은거임
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// == strick equality, no type conversion : type을 신경씀
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// Equality를 공부할때는, Object를 신경써서 공부하는 것이 졶다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // flase
console.log(ellie1 === ellie3); // true

// equality -  puzzler
console.log(0 == false); // true * null, undefined, 0, empty string는 다 false으로 간주 될 수 있다.
console.log(0 === false); // false *0은 boolean(false, true) 타입이 아니다.
console.log("" == false); // ture
console.log("" === false); // false
console.log(null == undefined); // ture
console.log(null === undefined); // false

// RPROMGRAM의 하이라이트들!!!!!!!!!!!!! : Conditional operators: if, Loop

//8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operator: ? * If문의 축약형. 간단하거나 console 에서 많이 사용함.
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no"); // name이 ellie가 맞니? 맞으면, :의 왼쪽(Yes)을 실행하고, 아니면 :의 오른쪽(no)를 실행해

//10. Switch statemnet:
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
    console.log("love you!");
    break;
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same alL!");
    break;
}

// or

const browser = "IE"; //  if에서 else, else if를 여러번 반복한다면, Switch를 사용하는 것이 좋다. 나중에 Type Script에서 정해져 있는 타입을 검사하거나, Enum(이넘) 비슷한 아이를 검사할때는 Switch를 쓰는 것이 가독성이 좋다.
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same alL!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration (let 이라는 지역변수 사용)
  console.log(`inline variable for: ${i}`);
}

// do while loop? body code is executed first => 먼저 블럭({})을 실행한 다음에, 조건이 맞는지 안 맞는지 검사한다.
// then check the condition.
do {
  console.log(`do while: $[i]`);
  i--;
} while (i > 0);

// 블럭을 먼저 실행하고 싶다면 do-while을 사용하고, 조건문이 맞을때만 블럭을 실행하고 싶다면 while을 사용해야 한다.

// for loop, for(begin; condition; step), begin을 처음에 한번만 호출하고,  {}을 실행하기 전에 컨디션이 맞는지 안맞는지 검사한 다음에, 블락이 다 실행이 되면, step을 실행하게 된다.
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration (let 이라는 지역변수 사용)
  console.log(`inline variable for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration (let 이라는 지역변수 사용)
  console.log(`inline variable for: ${i}`);
}

// nested loops => CPU에 좋은 방법이 아니다!
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// loop같은 경우에는, break 나 continue를 사용해서 loop를 끝낼 수 있다.
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use contine):

for (i = 0; i < 10; i + 2) {
  console.log(`for: ${i}`);
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iteratr from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
