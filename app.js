// DOM Style

const btn_mode = document.getElementById("btn-mode")
const title = document.getElementById("title");
const content = document.querySelector(".content");
const allEl = document.querySelectorAll("p");
const box = document.querySelector(".light")

function displayText(){
    // title.style.color = "red";
    // title.style.backgroundColor = "yellow";
    // title.style.fontSize = "60px";
    
    if (box.className == 'light'){
        btn_mode.innerText = "goto Light Mode"
        box.setAttribute('class', 'dark')
    }else{
        btn_mode.innerText = "goto Dark Mode"
        box.setAttribute('class', 'light')
    }        
};