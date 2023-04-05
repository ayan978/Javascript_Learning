let func1 = (callback) => {
    setTimeout(() => {
        console.log('func1 called');
        callback();
    }, 3000);
}

let func2 = () => {
   console.log('Func2 is called');
}

let func3 = s1 => s1^2;

func1(()=>{
    func2();
});

console.log(func3(4));