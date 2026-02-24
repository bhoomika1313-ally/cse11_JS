console.log("Hello World!");
var num = 10;
console.log(num);
console.log(typeof(num));
num = "Hello";
console.log(num);
console.log(typeof(num));
 num = true;
console.log(num);
console.log(typeof(num));
num = null;
console.log(num);
console.log(typeof(num));
num = undefined;
console.log(num);
console.log(typeof(num));
const a = Symbol(4);
console.log(a);
const b = Symbol(4);
console.log(b);
if (a === b) {
    console.log("a and b are the same");
} else {
    console.log("a and b are different");
} 