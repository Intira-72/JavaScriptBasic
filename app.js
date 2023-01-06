// EventListener

 const menu = document.getElementById('menu');
 const display = document.getElementById('display');
 const btn = document.getElementById('btn')


 menu.addEventListener('change', getMenu);
 btn.addEventListener('click', clearDispley);
 

 function getMenu(){
   display.innerText = menu.value
 };

 function clearDispley(){
   display.innerText = ''
 };