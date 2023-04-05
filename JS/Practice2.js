
const p1 = {
    name: 'Jack',
    occupation : {
        id : 1
    }
}

const{name:name1, occupation:{id:id1}} = p1;
console.log(name1);
console.log(id1);

let list1 = [1,2,3,[4,5],6];

let[,,a,[b,c]] = list1;

console.log(a,b,c);

try{
    let c = 5/0;
}
catch(error){
    console.log(error.message);
}

let e = [1,2,3];
console.log(e[2]);

let p2 = {
    name : 'John',
    Address : {
        Road : 3,
        House : 2
    },
    list1: [1,2,3,4]
}

const{name, Address:{Road:myRoad, House:MyHouse}, list1:[v,n,,p]} = p2;
const[,,z,x] = p2.list1;
console.log(name);
console.log(myRoad);
console.log(MyHouse);
console.log(v,n,p);