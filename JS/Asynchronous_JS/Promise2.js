//Promise Chaining

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
        resolve("Task three is completed"); 
    })
}

const taskFour = () => {
    return new Promise((resolve,reject)=>{
        resolve("Task four is completed"); 
        })
    }


taskOne()
.then((res)=>{
    console.log(res);
})
.then(taskTwo)
.then((res)=>{
    console.log(res);
})
.then(taskThree)
.then((res)=>{
    console.log(res);
})
.then(taskFour)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.message);
})
