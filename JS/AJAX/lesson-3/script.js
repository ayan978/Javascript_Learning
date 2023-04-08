const loadData = function(){
    const xhr = new XMLHttpRequest();

    //what to do when response arrives

    xhr.onload = function(){   //this function will be called after getting the response
        console.log('Request Finished')
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    };

    //prepare request - methods : GET, POST, PUT, PATCH, DELETE, OPTIONS etc
    xhr.open("GET", "./data/data.txt",false); //The 3rd parameter defines whether the request sending task will be asynchronous or not. true means synchronous and false means asynchronous

    //send request
    xhr.send();
    console.log('Hello')

}