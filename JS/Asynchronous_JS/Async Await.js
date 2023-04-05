const taskOne = () => {
    return new Promise((resolve,reject)=>{
        resolve("Task one is completed");
    })
}

const taskTwo = () => {
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("Task two is completed");
         },4000); 
    })
}

const taskThree = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task three is completed");
        },2000);
       
    })
}

const taskFour = () => {
    return new Promise((resolve,reject)=>{
        resolve("Task four is completed");
    })
}

// function async executeAll(), we can also write like this
const executeAll = async() => { 
    try{
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
    }
    catch(err){
        console.log(err);
    }

}

executeAll();