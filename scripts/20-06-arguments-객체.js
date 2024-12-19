function test(a) {
  "use strict";

  a = 2;

  console.log(arguments);
}

let a = 0;
console.log(a); //0
test(a); //0
console.log(a); //0
