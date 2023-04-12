
const sendRequest = function(method, url, data){

    const promise = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.onload = function(){
            //handling application error
            if(this.status >= 400){
                reject(`There's an application error and the status is ${this.status}`);
            }
            resolve(JSON.parse(this.responseText));  //converting the resposnse text(type is string) to Javacript object
        }

        xhr.onerror = function(){
            reject("There's an error!");
        }
    
        xhr.open(method, url);
    
        xhr.send(data);

    });

    return promise
    }

const getData = function(){

    sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/1").then((responseData)=>{
         
        console.log(responseData);
    })
    
    .catch((err)=>{
        console.log(err);
    });
    
}

const sendData = function(){

    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })).then((responseData)=>{
         
        console.log(responseData);
    })
    
}


const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
