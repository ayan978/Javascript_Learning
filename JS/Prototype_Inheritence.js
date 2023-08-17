
function Person(name, age){
    this.name = name;
    this.age = age;
}


function Cricketer(name, age, type, country){
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}

Person.prototype = {
    eat : function(){
        console.log(`${this.name} is eating`);
    }
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

let John = new Cricketer('John', 26, 'All Rounder', 'England');

console.log(John.name);
console.log(John.age);
console.log(John.type);
console.log(John.country);
John.eat();

