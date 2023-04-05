let name = "Sadiqun";
let s1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
console.log(name);

console.log(name.length);
console.log(name.charAt(2));
name = name.concat(" Nur"," Ayan");
console.log(name);
console.log(name.includes("Nur"));
console.log(name.indexOf("Nur"));
console.log(name.indexOf("n"));
console.log(name.lastIndexOf("n")); //returns the last n's index
console.log(s1.substring(3,26)); //returns string from index 3 to 26;
console.log(s1.substr(6,11)); //returns total 11 chatracters from index 6  
console.log(s1.slice(3,26)); //same as substring
console.log(s1.toUpperCase()); //Converts to capital letter
console.log(s1.toLowerCase()); //Converts to small letter

let s2 = "   Lorem ipsum dolor   sit amet,";

console.log(s2.trim()); //removes extra whitespaces
console.log(s1.split(" ")); //makes an array of the String where it'll find a space
