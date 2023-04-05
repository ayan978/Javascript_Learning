(function(){ //IIFE
    var x = 10; //This variable is inside IIFE. So, it can't be accessed from outside
    console.log("This is an IIFE. It'll be called automatically")
})();

//console.log(x);


{ //Block
    var a = 11; //Can be accessed from outside
    let b = 10; //Can't be accessed from outside
    const c = 12; //Can't be accessed from outside, value can't be changed as well
}

console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
