
const loadData = function(){
    const xhr = new XMLHttpRequest();

    //what to do when response arrives

    xhr.onload = function(){   //this function will be called after getting the response
        console.log('Request Finished')
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    };

    //prepare request - methods : GET, POST, PUT, PATCH, DELETE, OPTIONS etc
    xhr.open("GET", "./data/data.txt",true);

    //send request
    xhr.send();
    console.log('Hello')

}