var input = document.getElementById("todoinput") ; 
var btn = document.getElementById("btn") ;
var list = document.getElementById("todolist") ; 


btn.addEventListener("click" , function(){
  todotext = input.value ; 
  console.log("task=> " , todotext) ;
  var listeditem = document.createElement("li") ; 
  listeditem.innerText = todotext ; 
  console.log(listeditem) ;
  list.appendChild(listeditem) ;


})

