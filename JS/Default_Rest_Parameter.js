
function printer(text = 'Default, no value is passed yet'){  //Default parameter
    console.log(text);
}

printer('Hello World');
printer();


function printer1(a, b, ...c){   // c is the rest parameter
    console.log(c);
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

printer1(1,2,3,4,5,6);