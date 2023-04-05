let person = {
    name : "John",
    age : "26",
    Nationality : "American"
};

let cars = ["Audi","BMW","Porsche","Ferrari","Lamborghini"]

for(let i in person){
    document.write(person[i]+" ")
}
document.write("<br>")
for(let i in cars){
    document.write(cars[i]+" ")
}
document.write("<br>")

cars.forEach(function(value){   //We can also traverse an array using forEach()

    document.write(value+" ")
})