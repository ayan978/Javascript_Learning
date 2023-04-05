
hello = () =>{
    return "Hello";
}

hello1 = () => "Hello";

hello2 = (fname, lname) => "Hello "+fname+" "+lname;
hello3 = text => "Hello "+text;

console.log(hello());
console.log(hello1());
console.log(hello2("Michael","Clerk"));
console.log(hello3("Robert"));