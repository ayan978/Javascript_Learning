var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(typeof text);

var obj = JSON.parse(text); 

console.log(obj.employees[0].firstName+" "+obj.employees[0].lastName);
console.log(obj.employees[1].firstName+" "+obj.employees[1].lastName);
console.log(obj.employees[2].firstName+" "+obj.employees[2].lastName);

console.log(typeof obj);

var text1 = JSON.stringify(obj);

console.log(text1);
console.log(typeof text1);