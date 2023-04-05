var MyImage = document.getElementById("Images");
var MyArray = ["../Images/Audi.jpg","../Images/BMW.jpg","../Images/Lamborghini.jpg","../Images/Porsche.png"];

var count = 0;

const next = () => {
    count++;
    if(count==MyArray.length){
        count=0;
    }
    MyImage.src = MyArray[count];
}

const prev = () => {
   count--;

   if(count==-1){
       count = MyArray.length - 1;
   }
   MyImage.src = MyArray[count];
}