let myKey = document.querySelector("#myPara");

const myFunction = () => {
    myKey.innerHTML = "You have clicked button 1";
}

const myFunction2 = () => {
    myKey.innerHTML = "You have clicked button 2";
}

let Photo = document.querySelector("#MyPhoto")
const myImage1 = () => {
     Photo.src = "../Images/BMW.jpg";
}

const myImage2 = () => {
    Photo.src = "../Images/Audi.jpg";
}