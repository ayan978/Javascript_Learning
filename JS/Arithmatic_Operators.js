// '*', '/' and '%' have same precedence(left to right)
// '+' and '-' have same precedence

var precedence1 = 5+3*12-20/10; 
console.log(precedence1);

var precedence2 = 5+(3*12)-(20/10);
console.log(precedence2);

var precedence3 = (5+3)*(12-20)/10;
console.log(precedence3);

var reminder = 5%3;
console.log(reminder);