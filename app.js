// DOM CSS Add & Remove Class

const box = document.getElementById('box')
let o_status;

function setDarkMode(){
    box.classList.add('darkMode')
}

function removeDarkMode(){
    box.classList.remove('darkMode')
}

function switchMode(){
    box.classList.toggle("darkMode")
    o_status = box.classList.contains("darkMode")
    console.log(o_status);
}
