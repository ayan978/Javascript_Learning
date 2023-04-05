
for(let i=1;i<=10;i++){  //This will print from 1 to 10

    document.write(i+" ");
}
document.write("<br>");

let cars = ["Audi","BMW","Porsche","Ferrari","Lamborghini"]

for(let i=0;i<cars.length;i++){
    document.write(cars[i]+" ");
}
document.write("<br>");
var text;
for (let i = 0, len = cars.length; i < len; i++) {  //We can use multiple lines in statement 1
    document.write(cars[i]+" ")
  }

 document.write("<br>")

let j = 0
for(;j<cars.length;j++){    //We can declare for loop like this
    document.write(cars[j]+"<br>")
}

let x = 0;
for(;x<cars.length;){  //We can also declare for loop like this
    document.write(cars[x]+" ");
    x++;
}