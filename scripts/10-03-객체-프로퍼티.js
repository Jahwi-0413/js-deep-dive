//프로퍼티 키 동적 생성

const keyName = "name";
const obj = {};
obj[keyName] = "J";

console.log(obj[keyName]); //J

//프로퍼티 키 빈 문자열
obj[""] = "empty key";
console.log(obj[""]);
// console.log(obj.""); //SyntaxError
