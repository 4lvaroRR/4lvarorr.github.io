const boton = document.querySelector(".btn");

function subir (){
    window.scrollTo({
        top: 1,
        behavior: "smooth",
    });
}

boton.addEventListener("click", subir)

let colorOriginal;

        function despMenu(id, estado) {
            var visibilidad = document.getElementById(id);
            if (estado) {
                visibilidad.style.visibility = "visible";
            } else {
                visibilidad.style.visibility = "hidden";
            }
        }
        function destacar(elem, estado) {
            if (estado) {
                colorOriginal = elem.style.backgroundColor;
                elem.style.backgroundColor = "#C31010";
            } else {
                elem.style.backgroundColor = colorOriginal;
            }
        }
        document.addEventListener("DOMContentLoaded", function () {

            // Cabecera
            const menu1 = document.getElementById("Menu1");
            const itMenu1 = document.getElementById("itMenu1");

            menu1.addEventListener("mouseover", () => despMenu("itMenu1", true));
            menu1.addEventListener("mouseout", () => despMenu("itMenu1", false));

            itMenu1.addEventListener("mouseover", () => despMenu("itMenu1", true));
            itMenu1.addEventListener("mouseout", () => despMenu("itMenu1", false));

            // Item 1
            const itMenu11 = document.getElementById("itMenu11");
            itMenu11.addEventListener("mouseover", () => destacar(itMenu11, true))
            itMenu11.addEventListener("mouseout", () => destacar(itMenu11, false))

            // Item 2
            const itMenu12 = document.getElementById("itMenu12");
            itMenu12.addEventListener("mouseover", () => destacar(itMenu12, true))
            itMenu12.addEventListener("mouseout", () => destacar(itMenu12, false))
            // Item 3
            const itMenu13 = document.getElementById("itMenu13");
            itMenu13.addEventListener("mouseover", () => destacar(itMenu13, true))
            itMenu13.addEventListener("mouseout", () => destacar(itMenu13, false))

        });