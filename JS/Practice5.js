let p1 = {
    name : 'John',
    age : 25,
    print1 : function(address, profession){
        return this.name+" "+this.age+" "+address+" "+profession
    }
}

let p2 = {
    name : 'Jacob',
    age : 'Student'
}

console.log(p1.print1.call(p2, 'New York', 'Student'));

let obj1 = {
    city : 'Clifornia',
    num : 123
}

l1 = ['city','num'];

for(let i of l1){
    console.log(obj1[i]);
}

console.log(obj1['city']);

let st1 = 'cbbc'
let st2 = 'cabc'
function isPalindrome(st){
    let value = true;
    let i = 0;
    let j = st.length - 1;
    
    while(i<j){
       if(st[i]==st[j]){
          i++;
          j--;
       }
       else{
         value = false;
         break;
       }
       
    }
    return value;
}

console.log(isPalindrome(st1));
console.log(isPalindrome(st2));