//Promise Chaining

const taskOne = () => {
    console.log('t1');
    return new Promise((resolve,reject)=>{
        resolve("Task one is completed");
    },2000)
}

const taskTwo = () => {
    console.log('t2');
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve("Task two is completed");
         },4000); 
    })
}

const taskThree = () => {
    console.log('t3');
    return new Promise((resolve,reject)=>{
        resolve("Task three is completed"); 
    },2000)
}

const taskFour = () => {
    return new Promise((resolve,reject)=>{
        resolve("Task four is completed"); 
        })
    }


taskOne()
   .then(taskTwo)
   .then(taskThree)
   .then(taskFour)
   .then((res)=>{
    console.log(res);
})
   .catch((err)=>{
    console.log(err.message);
       })
