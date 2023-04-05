//Method 1
function func1(a,b){
    return a+b;
}

console.log(func1(3,4));
//Method 2
var x = function(a,b){
    return a*b;
};

console.log(x(5,6));

//Method 3
let myFunction = new Function("a", "b", "return a * b");

console.log(myFunction(3,2));

//Self invoking function
(function (text) {
    console.log("Hello "+text);  // I will invoke myself
  })('world');


  function MyFunc1(a,b,c){
      return arguments.length;
  }

  console.log(MyFunc1(1,2,3));

