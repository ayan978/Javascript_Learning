
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullname = function() {return this.firstName + " " + this.lastName;};
}

let p1 = new Person("John","Smith",24);
let p2 = new Person("Jacob","Ponting",26);

p1.nationality = "English"; //Adding property to an object
p2.nationality = "English"; //Adding property to an object

p1.getNationality = function(){ //Adding function to an object
  return this.nationality;
}

p2.getNationality = function(){ //Adding function to an object
  return this.nationality;
}


console.log(p1.fullname());
console.log(p2.fullname());
console.log(p1.getNationality());
console.log(p2.getNationality());
