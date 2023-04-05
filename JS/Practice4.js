const func1 = () => {
    setTimeout(()=>{
        console.log('func1 executed');
    },1000);
}

const func2 = () => {
    console.log('func2 executed');
}

const func3 = () => {
    console.log('func3 executed');
}

func1();
func2();
func3();