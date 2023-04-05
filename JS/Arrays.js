let arr = [1,2,3,4,5]
function f1(){
    return "This is function 1"
}

let f2 = function(){
    document.write("This is function 2 <br>")
}

let car = {
    name : "BMW",
    color: "Black",
    type: function(){
        document.write("This is BMW <br>")
    },
    type1: function(){
        return "This is another BMW <br>"
    }

}

let arr1 = ["John",16,"Steven",arr,true,f1,f2,car]

document.write(arr1[3]+"<br>")
document.write(arr1[4]+"<br>")
document.write(arr1[5]()+"<br>")
arr1[6]()
document.write(arr1[7].name+"<br>")
arr1[7].type()
document.write(arr1[7].type1())

arr1[0] = "Steve" //Changing element

document.write(arr1[0]+"<br>")

let arr2 = [3,5,2,1,6,4]
document.write(arr2+"<br>")

arr2.sort()
document.write(arr2+"<br>")
document.write("Length of arr2 is "+arr2.length+"<br>")

let arr3 = new Array(1,2,3,4)
document.write(arr3+"<br>")
arr3.push(5)
document.write(arr3+"<br>")
document.write(typeof arr2+"<br>")
document.write(typeof arr3+"<br>")

let x = 6
document.write(Array.isArray(arr2)+"<br>")
document.write(Array.isArray(x)+"<br>")

