//Array Destructuring

let numbers = [1,2,3];

let numbers1 = [...numbers, 4, 5, 6];

console.log(numbers1);

let a = [...numbers]; //exact copy of numbers. If we change 'numbers', 'a' will not change
console.log(a);

let numbers2 = [...numbers, ...numbers1];

console.log(numbers2);


//Object Destructuring

let p1 = {
    name : 'John',
    age : 26
}

let info = {
    siblings : 2,
    education : 'Graduate'
}

let combined = {...p1, ...info};

console.log(combined);



const add = function(a, b, c){
    return a + b + c;
}

let values = [2,8,12];

console.log(add(...values))  // using spread operator


const add1 = function(a, b, ...c){
    console.log(c);
    return a + b + c;
}

console.log(add1(1,2,3,4,5));



