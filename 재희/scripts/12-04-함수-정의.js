console.dir(add); //[Function: add]
console.dir(sub); //undefined

function add(x, y) {
  return x + y;
}
var sub = function (x, y) {
  return x - y;
};
