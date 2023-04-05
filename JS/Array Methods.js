
let arr = ["Apple","Mango","Orange","Jackfruit"]

document.write(arr+"<br>")
document.write(arr.toString()+"<br>") //Converts the array into comma separated string

let arrType = arr.join(" * ") //Same as toString(), but we can add separator using join()
document.write(arrType+"<br>")

let x = arr.pop() //Removes the last element

document.write(arr+"<br>")
document.write(x+"<br>")

let y = arr.push("Guava") //Adds new element and returns the new length of the array. So, y = 5

document.write(arr+"<br>")
document.write(y+"<br>")


let z = arr.shift() //removes the first array element and "shifts" all other elements to a lower index.
document.write(arr+"<br>")
document.write(z+"<br>")

let z1 = arr.unshift("Lemon");    // Adds a new element "Lemon" to fruits(at the beginning) and returns new length of array. So, z = 4
document.write(arr+"<br>")

arr[0] = "Pineapple" //Changes the first element to Pineapple
document.write(arr+"<br>")

//delete arr[0] //Delets array element
//document.write(arr+"<br>")
arr.push("Lychee")
arr.push("Apple")

document.write(arr+"<br>")

arr.splice(2,0,"Lemon","Kiwi")
document.write(arr+"<br>")

arr.splice(3,1) //Removes the 3rd index element
document.write(arr+"<br>")

let arr1 = ["Cecilie", "Lone"]
let arr2 = ["Emil", "Tobias", "Linus"]
let arr3 = ["Robin", "Morgan"]
let myChildren = arr1.concat(arr2, arr3)   // Concatenates arr1 with arr2 and arr3

document.write(myChildren+"<br>")

let arr4 = arr.slice(2) //Slices the array from index 2 to last
document.write(arr4+"<br>")

let arr5 = arr.slice(1,4) //Slices array from index 1 to 3
document.write(arr5+"<br>")

arr5.reverse()
document.write(arr5+"<br>")


