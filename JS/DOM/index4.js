//create, adding, removing elements

var link = document.getElementById('myLink');
link.innerHTML = 'My-Link';

link.style.textDecoration = 'none';
link.style.color = 'green';
link.style.fontSize = "40px";
link.href = "https://www.google.com";
link.target = "_blank";

var heading1 = document.createElement('h1');
var text1 = document.createTextNode('Heading 1');
heading1.appendChild(text1);
var div1 = document.getElementById('my-div');
div1.appendChild(heading1);

var bye = document.getElementById('Bye');
div1.removeChild(bye);

var heading0 = document.createElement('h1');
var text2 = document.createTextNode('Heading 0');
heading0.appendChild(text2);
div1.insertBefore(heading0,heading1);


heading1.classList.add('header-class');
heading1.classList.add('header-class1');

heading1.classList.remove('header-class1');