
const loadData = function(){
    const xhr = new XMLHttpRequest();

    //what to do when response arrives

    xhr.onload = function(){   //this function will be called after getting the response
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    };

    //prepare request - methods : GET, POST, PUT, PATCH, DELETE, OPTIONS etc
    xhr.open("GET", "./data/data.txt");

    //send request
    xhr.send();

}