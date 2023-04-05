
let func1 = (callback) => {

    console.log('func1 executed!');
    callback();
}

let func2 = (callback) => {
    setTimeout(() => {
       console.log('func2 executed!');
       callback();
    }, 3000);
    
}

let func3 = () => {
    console.log('func3 executed!')
}

func1(()=>{
    func2(()=>{
        func3();
    })
});

