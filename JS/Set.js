// no duplicate values will be allowed in a set
let s1 = new Set();

s1.add(1);
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(3);
s1.add(4);

console.log(s1.has(2));
console.log(s1.has(5));

s1.forEach((values)=>{
    console.log(values);
});

s1.delete(4);

console.log('One element is deleted');

s1.forEach((values)=>{
    console.log(values);
});

console.log('Printing in another way');

for(let i of s1.values()){
    console.log(i);
}

