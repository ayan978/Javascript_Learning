
let p = new Promise((resolve, reject) => {

    let work = true;

    if(work){
        resolve("Work is done");
    }
    else{
        reject(new Error("Work isn't done"));
    }
})

let p1 = new Promise((resolve,reject)=>{
      let cgpa = 3.5;

      schedule = true;

      if(schedule){
          resolve("Scheduled");
      }
      else{
          reject(new Error("It's not scheduled"));
      }
})



Promise.all([p,p1])
.then((myResolve1)=>{
    console.log(myResolve1);
})

.catch((MyError1)=>{
    console.log(MyError1.message);
})


let promise1 = new Promise((MyResolve,MyReject)=>{

    setTimeout(()=>{
       MyResolve("Promise 1 completed");
    },4000)
});

let promise2 = new Promise((MyResolve,MyReject)=>{

    setTimeout(()=>{
       MyResolve("Promise 2 completed");
    },3000)
});

Promise.race([promise1,promise2])
.then((res)=>{
    console.log(res);
})