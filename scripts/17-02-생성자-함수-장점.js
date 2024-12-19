//17.2.2

function Person(name) {
  this.name = name;
  this.hi = function () {
    console.log(this.name);
  };
}

const person1 = new Person("J");
const person2 = new Person("Jaehe");

person1.hi();
person2.hi();

//------------------------------------------------------
//17.2.5 constructor, non-constructor
function foo() {}
const bar = function () {};

const baz = {
  x: function () {},
};

new foo();
new bar();
new baz.x();

const arrow = () => {};
new arrow(); //TypeError: arrow is not a constructor

const obj = {
  x() {}, //메서드 (10.1 프로퍼티 값이 함수인 경우 메서드라고 칭함)
};
new obj.x(); //TypeError: obj.x is not a constructor

//------------------------------------------------------
//17.2.7 new.target

function Person(name) {
  if (!new.target) {
    return new Person(name);
  }
  this.name = name;
  new.target.age = 10; //메타 속성임
}

const person = Person("J");
console.log(person.name); //J
console.log(person.age); //undefined
