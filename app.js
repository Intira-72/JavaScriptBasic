// DOM Nodes create, remove, append, replace

const menu = document.getElementById('menu');
let count = 1;

function addItem(){ 
    const item_list = document.createElement('li');   
    item_list.innerText = "Coffee " + count;
    item_list.id = "coffee_" + count++
    menu.appendChild(item_list)
};

function delItem(){
    item = document.getElementById("coffee_" + --count)
    menu.removeChild(item)
};

function replaceItem(){
    item = document.getElementById("coffee_" + --count)

    item_b = document.createElement('li')
    item_b.innerText = "Bekery_" + count
    item_b.id = "bekery_" + count
    
    menu.replaceChild(item_b, item)
};