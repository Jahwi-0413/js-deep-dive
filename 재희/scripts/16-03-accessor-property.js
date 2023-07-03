const person = {
  name: "J",
  get myName() {
    console.log("call getter");
    return this.name;
  },
  set myName(n) {
    console.log("call setter");
    this.name = n;
  },
};

console.log(person.myName);
person.myName = "JJ";
