
const hello = () =>{
    return "Hello";
}

const hello1 = () => "Hello";

const hello2 = (fname, lname) => "Hello "+fname+" "+lname;
const hello3 = text => "Hello "+text;

console.log(hello());
console.log(hello1());
console.log(hello2("Michael","Clerk"));
console.log(hello3("Robert"));
