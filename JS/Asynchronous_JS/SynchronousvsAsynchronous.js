
const taskOne = () => {
   console.log("Task one completed");
}

const taskTwo = () => {
    console.log("Task two completed");
 }

 const taskThree = () => {
    console.log("Task three completed");
 }

 const taskFour = () => {
    console.log("Task Four completed");
 }

 const taskFive = () => {
    console.log("Task five completed");
 }


//Synchronous
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
console.log("Synchronous code finished");
console.log("Asynchronous Code started");


const task1 = () => {
    console.log("Task one completed");
 }
 //Asynchronous Function
 const task2 = () => {
     setTimeout(()=>{console.log("Task two completed")},1000);  
  }
 
  const task3 = () => {
     console.log("Task three completed");
  }
 
  const task4 = () => {
     console.log("Task Four completed");
  }

  const task5 = () => {
   console.log("Task five completed");
}

  task1();
  task2();
  task3();
  task4();
  task5();



