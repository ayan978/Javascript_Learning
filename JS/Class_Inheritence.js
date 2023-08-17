class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Cricketer extends Person{
    constructor(name, age, type, country){
        super(name, age);
        this.type = type;
        this.country = country;
    }

    play(){
        console.log(`${this.name} is playing`);
    }
}

let John = new Cricketer('John', 26, 'All Rounder', 'England');
console.log(John.name);
console.log(John.age);
console.log(John.type);
console.log(John.country);
John.eat();
John.play();