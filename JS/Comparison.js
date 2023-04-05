
let age = Number(prompt())
let isAdult
if(isNaN(age)){  //If age is not a Number, it'll return true. If age is a Number, it'll return false
   document.write("Input is not a number")
}
else{
    isAdult = (age<18) ? "Not Adult" : "Adult"
    document.write(isAdult) 
}