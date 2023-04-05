//try and catch
try{
    consolee.log("Hello");

}

catch(err){
    console.log(err.name);
    console.log(err.message);
}

//try, catch, throw and finally

try{
    let x = prompt("Enter age");

    if(isNaN(x)){
        throw "Not a number. Invalid input";
    }
    else if(x<0){ 
        throw "Invalid input";
    }
    else if(x>=1 && x<=18){
        throw "Not adult";
    }
    else{
        throw "Adult";
    }
    
    }
    catch(e){
        console.log(e);
    }
   finally{
    console.log("This block will always execute");
   }

//Range error
var num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
}

//Reference error
var x;
try {
  x = y + 1;   // y cannot be referenced (used), y is not declared
}
catch(err) {
  console.log(err.name);
}

//Syntax error

try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err.name);
  }

//Type error
  var num = 1;
  try {
    num.toUpperCase();   // You cannot convert a number to upper case
  }
  catch(err) {
    console.log(err.name);
  }

//URI error
  try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name);
  }
  