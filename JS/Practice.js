
let p1 = {
    name: 'John',
    age: 30,
    fullname : function(ocupation, address){
        return this.name+" "+this.age+" "+ocupation+" "+address;
    }
}

let p2 = {
    name: 'Jacob',
    age: 30 
}

console.log(p1.fullname('Engineer', 'California'));
console.log(p1.fullname.call(p2, 'Teacher', 'New York'));
console.log(p1.fullname.apply(p2, ['Teacher', 'New York']));
//console.log(p1.fullname.apply(p2, 'Doctor', 'Canada'));
//console.log(p1.fullname.apply(p2, ['Doctor', 'Canada']));

let a1 = [1,2,3,4,5,6];

a2 = a1.reduce((a, value)=>{
    return a + value
});

console.log(a2);

a1.splice(2,1,5,6);
console.log(a1);
let a4 = a1.slice(2,4);
console.log(a4);

let z = a4.some((x)=>{
    return x%5==0;
});

let z1 = a4.some((x)=>{
    return x%6==0;
});

let z2 = a4.some((x)=>{
    return x%7==0;
});

let z3 = (x,y) =>{
    return x + y
}
console.log(z);

console.log(z1);

console.log(z2);


function f1(v, i, arr){
    console.log('value = ',v,' index = ',i, 'arr = ',arr)
}

console.log('Stop!')
let arr1 = [1,2,3,4,5];

arr1.forEach(f1);
