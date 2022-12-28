// DOM

let a = document.getElementById("demo");
let b = document.querySelector('.myjs');
let c = document.querySelectorAll("p")

let x = 10;
let y = 10;

function textChange(){
    if(a.innerText == "kongruksiam"){
        a.innerHTML = `X: ${x}, Y: ${y}`;
    }else{
        a.innerText = "kongruksiam"
    };      
};

console.log(c)