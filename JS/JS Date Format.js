
var d = new Date("2015-03-25"); //ISO Date
document.write(d+"<br>")
var d1 = new Date("2015-03-25T12:00:00Z"); //ISO Date with time
document.write(d1+"<br>")

var d2 = new Date("Jan 25 2015"); //Long Date

document.write(d2+"<br>") 

var d3 = new Date("03/25/2015")

document.write(d3+"<br>")

var d4 = new Date("April 18, 2018 02:40:12")
var msecond = Date.parse(d4) //Converting d4 into millisecond

document.write(msecond+"<br>")

var d5 = new Date(msecond) //Converting mscond into date
document.write(d5+"<br>")
