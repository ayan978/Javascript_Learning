var person = {name:"John", age:30, city:"New York"};
//Method 1
for(let i in person){
    console.log(person[i]);
}

console.log(".");
//Method2
var info = Object.values(person);
console.log(info);

console.log(".");
//Method 3
var info1 = JSON.stringify(person);
console.log(info1);
