var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.write(txt)
function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}

document.write("<br>")

var txt1 = "";
let numbers1 = [45, 4, 9, 16, 25];
numbers.forEach(myFunction1);

function myFunction1(value) {
  value*=2
  document.write(value+"<br>")
}

let newArray = numbers.map(function(value){return value*3}) //map() will create new array change elements of previous array 
document.write(newArray+"<br>")

let evenArray = numbers.filter(function(value){return value%2===0})
document.write(evenArray+"<br>")

let myArray = [1,2,3,4,5]
let multiply = myArray.reduce(function(result,value){return result*value},1) 
document.write(multiply+"<br>")

let contains_even = myArray.some(function(value){return value%2==0}) //some() function will return true or false if any of the number meets condition
document.write(contains_even+"<br>")

let contains_negative = myArray.some(function(value){return value<0}) 
document.write(contains_negative+"<br>")

let evens = [2,4,6,8]
let all_even = myArray.every(function(value){return value%2==0}) //every() is same as some(), but all the elements have to meet the condition
document.write(all_even+"<br>")

let all_even1 = evens.every(function(value){
  return value%2==0}) 
document.write(all_even1+"<br>")

let found = evens.find(function(element){
  return element==8
}
  )
document.write(found+"<br>")

let found_index = evens.findIndex(function(element){
      return element==8
    })
document.write(found_index+"<br>")

