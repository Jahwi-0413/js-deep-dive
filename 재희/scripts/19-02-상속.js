//before
// function Person(name) {
//   this.name = name;
//   this.hi = function () {
//     console.log(this.name);
//   };
// }

// const person1 = new Person("J");
// const person2 = new Person("Jaehe");

// console.log(person1.hi === person2.hi); //false

//after
function Person(name) {
  this.name = name;
}

Person.prototype.hi = function () {
  console.log(this.name);
};

const person1 = new Person("J");
const person2 = new Person("Jaehe");

console.log(person1.hi === person2.hi);
