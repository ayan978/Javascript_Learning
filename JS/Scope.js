//Local Scope
// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
  
    // code here CAN use carName
    console.log(carName);
  }

  myFunction();
  //console.log(carName); //it'll create an error


  var carName1 = "Volvo";

//Global Scope
var carName1 = "Volvo";
// code here can use carName1
function myFunction1() {
 // code here can also use carName1
  console.log(carName1);
}

console.log(carName1);
myFunction1();

//Automatically Global
// code here can use carName2

function myFunction2(){
    carName2 = "Volvo";
}
myFunction2();
console.log(carName2);