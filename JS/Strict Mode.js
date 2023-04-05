//"use strict";
//x = 3.14;       // This will cause an error because x is not declared


x = 3.14;       // This will not cause an error.
console.log(x);
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}


//Deleting a variable (or object) is not allowed.
"use strict";
var x = 3.14;
delete x;                // This will cause an error

//Deleting a function is not allowed.
function x(p1, p2) {};
delete x;                // This will cause an error 

//Duplicating a parameter name is not allowed:
function x(p1, p1) {};   // This will cause an error


//Octal numeric literals are not allowed:
var x = 010;             // This will cause an error

