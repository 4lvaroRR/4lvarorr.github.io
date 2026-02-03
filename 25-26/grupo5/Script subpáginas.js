var menu = document.querySelector(".principal");
var btnMenu = document.querySelector("#btnMenu");

function aparecerMenu(){
    if(menu.style.display === "none"){
        menu.style.display = "Block";
    } else{
        menu.style.display = "none";
    }
}
btnMenu.addEventListener("click", aparecerMenu);