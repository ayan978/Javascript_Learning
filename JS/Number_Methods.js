//In Javascript, functions are objects
let x = 5;
let y = 6543981;
let z = 4.31656781;
console.log("Binary value of x is : ",x.toString(2)); //Convert decimal to binary
console.log("Exponential of x is : ",y.toExponential(8)); //Convert to exponential value, parameter 8 is the range after decimal point
console.log("z = ",z.toFixed(2)); //range after decimal point
console.log("Organized y = ",y.toLocaleString()); //Organized number with commma
console.log("z = ",z.toPrecision(4)); //How many digits we want to see
