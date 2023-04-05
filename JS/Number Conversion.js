//First Method

let x = prompt("Enter a value in decimal : ");

console.log("Decimal = ",x);
console.log("Binary = ",Number.parseInt(x, 2)); //Convert to binary
console.log("Octal = ",Number.parseInt(x, 8)); //Convert to octal
console.log("Hexadecimal = ",Number.parseInt(x, 16)); //Convert to hexadecimal

//Second Method

let y = Number(prompt("Enter a value in decimal : "));

console.log("Decimal = ",y);
console.log("Binary = ",y.toString(2));
console.log("Octal = ",y.toString(8));
console.log("Hexadecimal = ",y.toString(16));

