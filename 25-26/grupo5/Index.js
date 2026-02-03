document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btnMenu");
    const btnNoticias = document.getElementById("btnNoticias")
    const menu = document.getElementById("menuPrincipal");
    const noticias = document.getElementById("NoticiasPrincipal");
    const boton = document.getElementById("modooscuro");
    const hojaEstilos = document.getElementById("estilo");

    menu.style.display = "none";

    btnMenu.addEventListener("click", () => {
        if (menu.style.display === "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    noticias.style.display = "none";

    btnNoticias.addEventListener("click", () => {
        if (noticias.style.display === "none") {
            noticias.style.display = "block";
        } else {
            noticias.style.display = "none";
        }
    });

    boton.addEventListener("click", () => {
        if (hojaEstilos.getAttribute("href") === "css pagina principal.css") {
          hojaEstilos.setAttribute("href", "principaloscuro.css");
        } else {
          hojaEstilos.setAttribute("href", "css pagina principal.css");
        }
    });
});







