//Fuction
//-fundamental building block in the program : Function은 프로그램을 구성하는, 가장 기본적인 building block이다.
<<<<<<< HEAD
// subprogram can be used multipe times *여러번의 사용하기 위함.
=======
// subprogram can be used multipe times
>>>>>>> 268e9f58f41ef46ca48e528223c56cc5bd7d3dc8
//-performs a task or calculates a values

//자바스크립트에서 Function을 정의하는 방법은
//1. Function Declaration
//function name(param1, param2) { body (*함수안에 기본적인 비지니스 로직을 작성)... return; }
<<<<<<< HEAD
//one function ===  one thing * 하나의 함수는 한가지의 일만 하도록 해야합니다.
//naming: doSomething, command, verb /* 함수는 동사의 형태(동작을 위해)도 이름을 지정해야한다.
//e.g createCardAndPoint -> createCard, creatPoint
//function is object in JS * 자바스크립트에서는 함수가 객체가 된다. 그래서, 변수, 패러미터, 리턴도 할 수 있다.

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");

log(1234);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

//3. Deafault parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

//4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("dream", "coding", "ellie");

//5. Local scope
let globalMessage = "global"; // global variable (광역변수)
function printMessage() {
  let message = "hello";
  console.log(message); // local variable (지역변수)
  console.log(globalMessage);
}
printMessage();

//**밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다 */

//6.Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}

// function expression

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted:감아 올리다)
//a fundtion expression is created when the execution reaches it.
const print = function () {
  // 함수에 이름이 없는것을 anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "ove you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes");
};

//named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
  print(); //*recursions: 함수 안에서 함수 자신을 스스로 호출하는거
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function : 함수를 아주 간결하게 만들어 주는 것!
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
  //do somthing more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression ** 최근에 잘 쓰이지는 않음. 자바스크립트에서 바로바로 함수를 실행하고 싶을때, 유용하다
(function hello() {
  console.log("IIFE");
})();


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remaider

function calculate(command, a, b) {
    switch (command) {
        case 'add' :
            return  a + b;
        case 'substract' :
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder': 
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3))