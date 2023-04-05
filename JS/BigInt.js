//Method of storing too big number inside a variable

let x = BigInt("23423782361278371209812"); // We can declare bigint like this
let y = 12371289n; //we can also declare bigint like this

console.log(x);
console.log(typeof x);

let result = Number(x) / 2;
let result1 = Number(y) / 2;

console.log(result);
console.log(result1);
