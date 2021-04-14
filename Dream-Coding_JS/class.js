"use strickt";

// calss person {
// name;
// age;
// speak();
//}

// class는 이름과, 나이와 같은 filed가 들어잇고, 행동(method => speak)가 들어 있습니다.
// Class는 조금 더 연관된, Fields와 methods가 종합적으로 묶여 있는 것을 말함. 간혹 class 안에는 methods가 들어 있지 않고, data, 즉 fields만 들어 있는 경우가 있다. => data class
// class는 붕어빵을 만들 수 있는 틀을 말합니다.

// Class: 클레스 자체에는 데이타가 들어 있지 않고, 틀만, Template만 정의해 놓는다. 틀만 만들어 놓고, 한번만 선언한다.
// 클레스는 정의만 하는 것이라서, 실제로 메모리에 올라가지는 않는다.
// - Template
// - decalre once
// - no date in

// Object : 클래스를 이용해서, 새로운 instance를 생성하면 Object가 된다. Object는 Class를 이용해서 많이 만들 수 있다.
// 실제로 데이터를 넣으면 이제 Ojbect는 메모리에 올라간다.
// - instance of a class
// - created many times
// - data in

// Object-oriented programing
// class: template
// object: instance of a class
// JavaScript classes (언어구현사항 디테일)
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class person {
  //constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    // throw Error('age can not be negative');
    // }
    // }

    //if (value < 0) {
    //    throw Error('age can not be negative');
    //}
    //this._age = value; or
    this._age = value < 0 ? 0 : value; // value가 - 라면, 0을 쓰고, 아니면 지정된 value를 쓰겠다.
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

//4. Fields (public, private)
// Too Soon!!
// https://develop
class Experiment {
  publicField = 2;
  #privateFiels = 0;
}
const experiemnt = new Experiemnt();
console.log(experiemnt.publicField);
console.log(experiemnt.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
//호출할때,
Article.printPublisher();

//상속과 다양성.
//5. Inheritance
// a way for one clas to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  //overwriting
  draw() {
    super.draw(); // 부모 darw()함수를 그대로 유지한다.
    console.log("😀");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triagnle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf : 이 Object는 class를 통해서 만들어진 새로운 instance들이다.
console.log(rectangle instanceof Rectangle); // 왼쪽에 있는 Object(rectangle)가 오른쪽에 있는 Class(Rectangle)를 통해서 만들어 졌는지 아닌지 확인하기 위해서 True, False로 알려준다.
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // Treue
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True * 자바스크립트에 있는 모든 ojbect는 자바스크립트의 모든 object를 상속받는다.

//그래서 Commnad를 누른채로, object를 클릭을 하면, 상속받은 아이를 확인할 수 있다.inputvis

console.log(triangle.toString());
