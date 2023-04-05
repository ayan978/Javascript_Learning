// parseInt() and parseFloat() methods will convert a string into a number

let x = "10";
let y = 5;
console.log("x + y = ",x+y);
x = Number.parseInt(x);
console.log("x + y = ",x+y);

let a = "10.56";
let b = "11.22 is a number";

console.log(a+b);

a = Number.parseFloat(a);
b = Number.parseFloat(b); //It'll take only the number part from the string and then convert it

console.log(a+b);

