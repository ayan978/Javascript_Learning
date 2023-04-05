
let s = "Hello Google Google";
let s1 = s.search("google"); //case sensitive search
document.write(s1+"<br>");
let s2 = s.search(/google/i); //case insensitive search
document.write(s2+"<br>"); 

let s3 = s.replace('google','microsoft'); //case insensitive 
document.write(s3+"<br>");

let s4 = s.replace(/google/i,'Microsoft'); //Case insensitive
document.write(s4+"<br>");

let s5 = s.match(/Google/g); //global search, searches for all the google words in the sentence
document.write(s5+"<br>");

let str = "\nIs th\nis it?";
let patt = /^is/m; //Multiline searching
document.write(str.match(patt)+"<br>");

let str1 = "Is this all there is?";
let patt1 = /[h-j]/g; //Find any of the characters between the brackets
document.write(str1.match(patt1)+"<br>");

let str2 = "Hello 475109423";
document.write(str2.match(/[1-5]/g)+"<br>"); //Find any of the digits between the brackets

var str3 = "re, green, red, green, gren, gr, blue, yellow";
document.write(str3.match(/(red|green)/g)+"<br>"); //Find any of the alternatives separated with |

let str4 = "Give 100%!";  
var patt2 = /\d/g; //Find a digit in the string
var result = str4.match(patt2);
document.write(result+"<br>");

var str5 = "Is this all there is?";
var patt3 = /\s/g; //Find a whitespace character
document.write(str5.match(patt3)+"<br>");

var str6 = "HELLO, LOOK AT YOU!"; 
var patt4 = /OU\b/; 
document.write(str6.match(patt4)+"<br>");

var st7 = "Hellooo World! Hello W3Schools!"; 
var patt5 = /o+/g; //matches any string that contains at least one o
document.write(str7.match(patt5)+"<br>");

var str8 = "Hellooo World! Hello W3Schools!"; 
var patt6 = /lo*/g; //Matches any string that contains zero or more occurrences of lo
document.write(str8.match(patt6)+"<br>");

var str9 = "1, 100 or 1000?";
var patt7 = /10?/g;
var resultType = str9.match(patt7);
document.write(resultType+"<br>");
