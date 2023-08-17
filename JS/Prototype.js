//Prototype is a property of a Javascript function(which is an object itself) that indicates an object

function Car(name, color){
    let the_car = Object.create(Car.prototype); //All the properties of the parent 'Car.prototype' is inherited to the child 'the_car'
    the_car.name = name;
    the_car.color = color;

    return the_car
}

//Properties inside Car.prototype will not be created separately for each objects
Car.prototype = {
    wheels : 4,

    run(){
        console.log('The car is running');
    },

    stop(){
        console.log('The car is stopped')
    }
}


let car = Car('Toyota GT-One', 'Black');
console.log(car);
let car2 = Car('Toyota Premio', 'White');
console.log(car2)

console.log(car.name);
console.log(car.color);
console.log(car.wheels);
car.run();
car.stop();

console.log(car2.name);
console.log(car2.color);
console.log(car2.wheels);
car2.run();
car2.stop();


