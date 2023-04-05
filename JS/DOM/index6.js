var button1 = document.getElementById("my-button");
button1.addEventListener("click", function(){
    alert("Hello")
});

var heading1 = document.getElementById("my-heading");

heading1.addEventListener("mouseover", ()=>{
      
    heading1.classList.add("my-heading");
})

heading1.addEventListener("mouseout", ()=>{
    heading1.classList.remove("my-heading");
})