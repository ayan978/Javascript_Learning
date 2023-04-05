
var len = document.querySelectorAll('.mybutton').length;

for(let i=0;i<len;i++){
   
     document.querySelectorAll(".mybutton")[i].addEventListener('click', function(){
        
        var text = this.innerHTML;
        document.querySelector('.myHeader').innerHTML = text+" is clicked";
   })

}