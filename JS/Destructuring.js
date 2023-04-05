// Object Destructuring

const p1 = {
    name : 'John',
    age : 26,
    Address : 'New York',
    education : {
        degree : 'graduate'
    }
};

const {name} = p1;  // value of name will be stored inside a variable called 'name'

console.log(name);

const {age : a1} = p1; // value of age will be stored inside a variable named a1

console.log(a1);

const {education : {degree}} = p1; //value of degree will be stored inside a varable named degree

console.log(degree);

const {education : {degree:degree1}} = p1; //value of degree will be stored inside a varable named degree1

console.log(degree1);


const p2 = {
    name : 'Robert',
    /*education : {
        qualification : 'masters'
    }*/
};

const {education : {qualification} = {} } = p2;  //If there is no key or variable name 'qualification', it will recieve a blank object, will show undefined

console.log(qualification);


//Array Destructuring

let arr1 = [1,2,3,4,5,6];

const[a, b] = arr1;  //First two elements will be stored inside a and b

console.log(a, b);

const[,,x,,,y] = arr1;  //Third element inside x, sixth element inside y

console.log(x, y);

let arr2 = [1,2,3,[7,8,10],12];

const[,,,[,c,d]] = arr2;

console.log(c, d);


