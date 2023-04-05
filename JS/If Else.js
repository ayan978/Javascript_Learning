
let hour = new Date().getHours
let greeting
if (hour < 10) {
    greeting = "Good morning"
  } else if (hour < 20) {
    greeting = "Good day"
  } else {
    greeting = "Good evening"
  }

  document.write(greeting+"<br>")

  let price = Number(prompt())
   
  if(price>=1 && price<=100){
      document.write("Low price")
  }

  else if(price>=101 && price<=500){
    document.write("Mid Price")
}
else if(price>=501){
    document.write("High Price")
}

