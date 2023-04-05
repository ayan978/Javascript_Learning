const loadData = function(callback){
    const xhr = new XMLHttpRequest();

    //what to do when response arrives

    xhr.onload = function(){
        callback(this); //this function will be called after getting the response
    }
    //prepare request - methods : GET, POST, PUT, PATCH, DELETE, OPTIONS etc
    xhr.open("GET", "./data/data.txt");

    //send request
    xhr.send(); 

}


function myCallback1(xhr){   //this function will be called after getting the response
    const container = document.getElementById('demo');
    container.innerHTML = xhr.responseText;
};


function myCallback2(xhr){   //this function will be called after getting the response
    const container = document.getElementById('demo2');
    container.innerHTML = xhr.responseText;
};