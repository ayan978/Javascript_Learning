

const task1 = (callback) => {
    console.log("Task one completed");
    callback();
 }
 //Asynchronous Function
 const task2 = (callback) => {
     setTimeout(()=>{
         console.log("Task two completed");
       callback();
         },3000);
     
  }
 
  const task3 = (callback) => {
     console.log("Task three completed");
     callback();
  }
 
  const task4 = (callback) => {
     console.log("Task Four completed");
     callback();
  }
 
  const task5 = () => {
     console.log("Task five completed");
  }
  

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5();
            });
        });
    });
});



