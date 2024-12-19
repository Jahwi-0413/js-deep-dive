//10.9.1
const x = 1;
let obj = {
  x,
};

console.log(obj.x); //1;

//10.9.2
const prefix = "prop";
let i = 0;

obj = {};

obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj);

//객체 리터럴 사용
i = 0;
obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj);

//10.9.3
const person = {
  name: "J",
  hi() {
    console.log(`${this.name} : hi`);
  },
};

person.hi();
