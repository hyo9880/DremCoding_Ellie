// JSon: Javascript Object Notation
// - Simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform

//1. Object to JSON
let json = JSON.stringify(true);
console.log(json);  

json =  JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json =  JSON.stringify(rabbit, ['name', 'color', 'size'] );
console.log(json);

json =  JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie':value;
});
console.log(json);

//*overloading : 함수의 이름은 동일하지만, 매개변수가 다름. 그리고 몇개의 변수를 전달하냐에 따라서 각각 다른 방식으로 호출.

//2. Json to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); 

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// 유용한 사이트
// 1. JSON Diff.com
// 2. JSON Beautifier
//3. JSON Parser
//4. Json Validator 