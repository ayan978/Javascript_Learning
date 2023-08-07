
let modifier = function(strings, ...values){  //Iterpolated values are recieved by ...values, The other parts are received by strings
    
let final_string = strings.reduce((prev, cur)=>{
    return prev + cur + (values.length ? 'Mr. '+ values.shift() : '');
   },'');

   return final_string
}

let p1 = 'John';
let p2 = 'Robert';

console.log(modifier`This is ${p1} and this is ${p2}`);