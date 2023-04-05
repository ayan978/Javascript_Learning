let x = 5;
let a = String(x); //Converting number to string
document.write(typeof a+"<br>");

let y = 6;
let b = y.toString();
document.write(typeof b+"<br>");

let c = true;

let q = a.toString(); //converting boolean to string
let w = String(a); //converting boolean to string
document.write(typeof q+"<br>");
document.write(typeof w+"<br>");

let d = new Date();
let j = d.toString(); //converting date to string
let h = String(d); //converting date to string
document.write(typeof j+"<br>");
document.write(typeof h+"<br>");

let r = "10";
let t = "10.92";
let r1 = Number(r); //Converting string to number
let t2 = Number.parseFloat(t); //Converting string to number

document.write(typeof r1+"<br>");
document.write(typeof t2+"<br>");

let u = "5";
let u1 = +u; //coverting string to number
document.write(typeof u1+"<br>");

let i = true;
let i1 = Number.parseInt(i); //converting boolean to number
let i2 = Number(i); //converting boolean to number
document.write(typeof i1+"<br>");
document.write(typeof i2+"<br>");



