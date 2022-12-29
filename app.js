// DOM Nodes

const textAll = document.querySelectorAll("p")
console.log(textAll);

let msg = textAll[1].innerHTML
console.log(msg);

const menu = document.getElementById('menu');
let count = 1;

function addItem(){
    const item = document.createElement('li');
    item.innerText = "Coffee " + count;
    menu.appendChild(item)
    count++
};
