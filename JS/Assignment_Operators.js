
let x = 12;
let y = ++x; //pre-increment

console.log("y = "+y);
console.log("x = "+x);

let a = 12;
let b = a++; //post-increment

console.log("b = "+b);
console.log("a = "+a);

let s = 56;

s += 2; //s = s+2

console.log("s = "+s);

let r = 10;
r %=3;
console.log("r = "+r);

var c = 100;
var d = '100';

console.log(c==d); //It'll return true, because it will not check data type
console.log(c===d); //It'll return false, because it will check data type