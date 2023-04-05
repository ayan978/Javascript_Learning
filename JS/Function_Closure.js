

const func1 = (function(){
    let value = 0;
    return function(){
        value += 1;
        console.log(value);
    }
})();

function func2(){
    console.log("I am a function");
}


func1(); //value = 1
func1(); //value = 2
func1(); //value = 3
func1(); //value = 4