let day = new Date().getDay();

switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
    default:
        day = "Invalid Input";
  }

  document.write(day+"<br>");

let num = Number(prompt("Enter a number between 1 and 5 : "));
let value;
switch(num){

    case 1:
        value = "One";
        break;
    case 2:
        value = "Two"
        break;
    case 3:
        value = "Three"
        break;
    case 4:
         value = "Four"
         break;
    case 5:
         value = "Five"
         break;
    default:
        value = "Invalid Input"
        break;
       
}

document.write(value+"<br>")