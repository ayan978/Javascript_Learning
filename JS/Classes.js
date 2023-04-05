class person{
    
     constructor(name,age){
         this.name = name;
         this.age = age;
     }

     getName(){
         return "Name is : "+this.name;
     }

     getAge(){
         return "Age is : "+this.age;
     }
}


let Robert = new person("Robert",24);
let Johnson = new person("Johnson",25);

console.log(Robert.getName());
console.log(Robert.getAge());
console.log(Johnson.getName());
console.log(Robert.getAge());