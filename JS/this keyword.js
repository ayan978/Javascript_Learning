let person = {
    firstName: "Steven",
    lastName: "Clerk",
    FullName: function(){
     return this.firstName+" "+this.lastName; //Here 'this' refers to the person object
    }
}

console.log(person.FullName());
"use strict";
let p = this; //it's refering global object = object window
console.log(p);


let p1 = function(){ //It'll also return global window object
    return this;
}

console.log(p1());

let p0 = {
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }
}

let p2 = {
    firstname:"abc",
    lastname:"def"
}

console.log(p0.fullname.call(p2));
