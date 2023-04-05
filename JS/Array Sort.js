let arr = [100,1,19,5,120,31,6]

let ascending_arr = arr.sort(function(a,b){return a-b})  //Sorting arr in ascending order
document.write(ascending_arr+"<br>")

let descending_arr = arr.sort(function(a,b){return b-a}) //Sorting arr in descending order
document.write(descending_arr+"<br>")

let random_sort = arr.sort(function(a, b){return 0.5 - Math.random()}); //Sorting arr in random order
document.write(random_sort+"<br>")

let arr1 = [120,5,1,150,22,53,170,9,11]
let maximum = Math.max.apply(null,arr1) //Finding the maximum element in arr, it's equivalent to Math.max(all arr1 elements)
document.write("Highest element is arr1 is : "+maximum+"<br>")

let minimum = Math.min.apply(null,arr1) //Finding the minimum element in arr, it's equivalent to Math.max(all arr1 elements)
document.write("Lowest element is arr1 is : "+minimum+"<br>")

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ]; //Array of objects

let sorted_cars = cars.sort(function(a,b){return a.year-b.year}) //Sorting cars in terms of year
for(let i=0;i<sorted_cars.length;i++){
document.write(sorted_cars[i].type+"<br>");


}