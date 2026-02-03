
/******************************************************
 * Código Secreto – Generador + Modo Maestro (una página)
 ******************************************************/

/* ==========================
   1) DATOS: temas preestablecidos
   ========================== */
const palabrasPorTema = {
  historia: [
    "Roma","Egipto","Revolución","Imperio","Faraón","Edad Media","Napoleón","Vikingo","Renacimiento","Cruzadas",
    "Jeroglífico","Pirámide","Esparta","Atenas","Legión","Coliseo","César","Cleopatra","Monarquía","República",
    "Feudalismo","Castillo","Inquisición","Navegación","Conquista","Explorador","Cartago","Mesopotamia","Sumeria","Fuego Griego",
    "Troyano","Zar","Dinastía","Samurái","Shogun","Seda","Carabela","Imperialismo","Trinchera","Arqueología",
    "Papiro","Realeza","Cronista","Jerarquía","Revolucionario","Corona","Batalla","Tratado","Descubrimiento","Foro"
  ],
  deportes: [
    "Fútbol","Baloncesto","Tenis","Atletismo","Natación","Boxeo","Ciclismo","Golf","Rugby","Hockey",
    "Maratón","Esgrima","Halterofilia","Vóley","Surf","Skate","Karate","Judo","Taekwondo","Triatlón",
    "Ping-Pong","Bádminton","Escalada","Ajedrez","Motociclismo","Automovilismo","Cricket","Béisbol","Softbol","Patinaje",
    "Remo","Piragua","Esquí","Snowboard","Regata","Billar","Petanca","Lucha Libre","Arco","Fitness",
    "CrossFit","Parkour","Gimnasia","Saltos","Velocidad","Resistencia","Entrenador","Estadio","Silbato","Árbitro"
  ],
  cine: [
    "Película","Director","Oscar","Guion","Actriz","Actor","Cámara","Rodaje","Tráiler","Escena",
    "Productor","Montaje","Banda Sonora","Animación","Documental","Cineasta","Palomitas","Cortometraje","Filmación","Estudio",
    "Clímax","Encadenado","Edición","Storyboard","Casting","Vestuario","Decorado","Iluminación","Doblaje","Subtítulo",
    "Protagonista","Antagonista","Thriller","Drama","Comedia","Musical","Fantástico","Western","Estreno","Butaca",
    "Cartelera","Extras","Claqueta","Toma","Plano","Zoom","Secuencia","Sonido","Guionista","Premiere"
  ],
  cultura: [
    "Arte","Música","Literatura","Tradición","Idioma","Danza","Pintura","Escultura","Folclore","Teatro",
    "Costumbre","Patrimonio","Historia Oral","Leyenda","Mitología","Acorde","Rima","Ensayo","Poema","Coro",
    "Catedral","Museo","Exposición","Ceremonia","Gastronomía","Artesanía","Festival","Orquesta","Sinfonía","Melodía",
    "Ópera","Cultura Popular","Ateneo","Biblioteca","Manuscrito","Icono","Simbolismo","Cántico","Improvisación","Ritual",
    "Caligrafía","Arquitectura","Coral","Patio","Escena","Autor","Narrativa","Estrofa","Acto","Butacas"
  ],
  gaming: [
    "Consola","RPG","FPS","Nintendo","Xbox","PlayStation","Pixel","Servidor","Multijugador","Streamer",
    "Guild","Level","Loot","Mapa","Dungeon","NPC","Boss","Quest","Checkpoint","Respawn",
    "Sandbox","Indie","Hitbox","Combo","Counter","Skins","HUD","Mana","XP","Ranking",
    "Speedrun","Build","Patch","Beta","Early Access","Metroidvania","Plataformas","Estrategia","Turnos","Battle Royale",
    "Crafting","Inventario","Modo Historia","Clan","Torneo","Retro","Joystick","Avatar","Cooperativo","Controller"
  ]
};

/* ==========================
   2) ELEMENTOS DEL DOM
   ========================== */
const modoTema     = document.getElementById("modoTema");
const modoManual   = document.getElementById("modoManual");
const panelTemas   = document.getElementById("panelTemas");
const panelManual  = document.getElementById("panelManual");
const temaSelect   = document.getElementById("temaSelect");
const manualInput  = document.getElementById("manualInput");
const btnGenerar   = document.getElementById("btnGenerar");
const btnBarajar   = document.getElementById("btnBarajar");
const btnLimpiar   = document.getElementById("btnLimpiar");
const tableroSec   = document.getElementById("tableroSection");
const gridPalabras = document.getElementById("gridPalabras");

/* Modo Maestro */
const btnModoMaestro     = document.getElementById("btnModoMaestro");
const btnRegenerarMaestro= document.getElementById("btnRegenerarMaestro");
const overlayMaestro     = document.getElementById("overlayMaestro");
const cerrarMaestro      = document.getElementById("cerrarMaestro");
const maestroGrid        = document.getElementById("maestroGrid");

/* ==========================
   3) UTILIDADES
   ========================== */
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function obtenerPalabrasManual() {
  return manualInput.value
    .split(/[\n,;]+/g)
    .map(p => p.trim())
    .filter(p => p.length > 0);
}
function seleccionarAleatorias(lista, n = 20) {
  const copia = [...lista];
  const result = [];
  while (result.length < n && copia.length > 0) {
    const i = Math.floor(Math.random() * copia.length);
    result.push(copia.splice(i, 1)[0]);
  }
  return result;
}

/* ==========================
   4) LÓGICA INTERFAZ GENERADOR
   ========================== */
function validarBoton() {
  let habilitar = false;
  if (modoTema.checked) {
    habilitar = temaSelect.value !== "";
  } else if (modoManual.checked) {
    habilitar = obtenerPalabrasManual().length >= 20;
  }
  btnGenerar.disabled = !habilitar;
}
modoTema.addEventListener("change", () => {
  if (modoTema.checked) {
    panelTemas.style.display = "block";
    panelManual.style.display = "none";
    manualInput.value = "";
  }
  validarBoton();
});
modoManual.addEventListener("change", () => {
  if (modoManual.checked) {
    panelTemas.style.display = "none";
    panelManual.style.display = "block";
    temaSelect.value = "";
  }
  validarBoton();
});
temaSelect.addEventListener("change", validarBoton);
manualInput.addEventListener("input", validarBoton);

let palabrasActuales = [];

function renderPalabras(words) {
  gridPalabras.innerHTML = "";

  const colores = ["", "red", "blue", "DarkGrey", "black"]; 
  // "" representa el color original (sin estilo)

  words.forEach((w, i) => {
    const cell = document.createElement("div");
    cell.className = "card";
    cell.textContent = w;
    cell.setAttribute("aria-label", `Casilla ${i + 1}: ${w}`);

    // índice de color para esta celda
    let colorIndex = 0;

    cell.addEventListener("click", () => {
      colorIndex = (colorIndex + 1) % colores.length;
      cell.style.backgroundColor = colores[colorIndex];
    });

    gridPalabras.appendChild(cell);
  });
}

btnGenerar.addEventListener("click", () => {
  let palabrasFinales = [];
  if (modoTema.checked) {
    const tema = temaSelect.value;
    if (!tema || !palabrasPorTema[tema] || palabrasPorTema[tema].length < 20) {
      alert("Selecciona un tema válido con suficientes palabras.");
      return;
    }
    palabrasFinales = seleccionarAleatorias(palabrasPorTema[tema], 20);
  } else if (modoManual.checked) {
    const manuales = obtenerPalabrasManual();
    if (manuales.length < 20) {
      alert("Introduce al menos 20 palabras.");
      return;
    }
    palabrasFinales = seleccionarAleatorias(manuales, 20);
  } else {
    alert("Selecciona un modo de generación.");
    return;
  }

  palabrasActuales = palabrasFinales;
  renderPalabras(palabrasActuales);
  tableroSec.style.display = "block";
  btnBarajar.disabled = false;
});

btnBarajar.addEventListener("click", () => {
  if (palabrasActuales.length === 20) {
    shuffleArray(palabrasActuales);
    renderPalabras(palabrasActuales);
  }
});

btnLimpiar.addEventListener("click", () => {
  // Reset UI
  [modoTema, modoManual].forEach(i => i.checked = false);
  panelTemas.style.display = "none";
  panelManual.style.display = "none";
  temaSelect.value = "";
  manualInput.value = "";
  btnGenerar.disabled = true;
  btnBarajar.disabled = true;
  tableroSec.style.display = "none";
  gridPalabras.innerHTML = "";
  palabrasActuales = [];
});

/* ==========================
   5) MODO MAESTRO – Patrón 4×5
   EXACTAMENTE: 8 rojas, 7 azules, 1 negra, 4 grises
   ========================== */

   function generarPatronMaestro() {
  const roles = [];
  // 8 rojas
  for (let i = 0; i < 8; i++) roles.push('R');
  // 7 azules
  for (let i = 0; i < 7; i++) roles.push('A');
  // 4 grises
  for (let i = 0; i < 4; i++) roles.push('G');
  // 1 negra
  roles.push('X');
  // Mezclar
  return shuffleArray(roles);
}

/*
// Si prefieres aleatorizar quién tiene 8 (rojo o azul), usa esta variante:
 function generarPatronMaestro() {
   const ochoEsRojo = Math.random() < 0.5;
   const rojos = ochoEsRojo ? 8 : 7;
   const azules = ochoEsRojo ? 7 : 8;
   const roles = [];
   for (let i = 0; i < rojos; i++) roles.push('R');
   for (let i = 0; i < azules; i++) roles.push('A');
   for (let i = 0; i < 4; i++) roles.push('G');
   roles.push('X');
   return shuffleArray(roles);
 }
*/
function renderPatronMaestro(roles) {
  maestroGrid.innerHTML = "";
  // Seguridad: siempre 20
  if (!Array.isArray(roles) || roles.length !== 20) {
    console.error("Patrón inválido", roles);
    return;
  }
  roles.forEach(role => {
    const cell = document.createElement("div");
    cell.classList.add("celda-maestro");
    switch (role) {
      case 'R':
        cell.classList.add("celda-roja");
        cell.setAttribute("aria-label","Rojo");
        break;
      case 'A':
        cell.classList.add("celda-azul");
        cell.setAttribute("aria-label","Azul");
        break;
      case 'G':
        cell.classList.add("celda-gris");
        cell.setAttribute("aria-label","Neutral");
        break;
      case 'X':
        cell.classList.add("celda-negra");
        cell.setAttribute("aria-label","Asesino");
        cell.innerHTML = `
          <svg class="bomba" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17 5h3V3h-3V1h-2v2h-3v2h3v2.09a7 7 0 1 0 2-1.69V5zM10 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
        `;
        break;
      default:
        cell.classList.add("celda-gris");
        cell.setAttribute("aria-label","Neutral");
    }
    maestroGrid.appendChild(cell);
  });

  // (Opcional) trazas de verificación por consola:
  const conteo = roles.reduce((acc, r) => (acc[r]=(acc[r]||0)+1, acc), {});
  console.log("Patrón maestro →", conteo); // {R:8, A:7, G:4, X:1}
}

function abrirMaestro() {
  const roles = generarPatronMaestro();
  renderPatronMaestro(roles);
  overlayMaestro.classList.add("activo");
  overlayMaestro.setAttribute("aria-hidden", "false");
}
function cerrarMaestroFn() {
  overlayMaestro.classList.remove("activo");
  overlayMaestro.setAttribute("aria-hidden", "true");
}

/* Eventos Modo Maestro */
btnModoMaestro.addEventListener("click", abrirMaestro);
btnRegenerarMaestro.addEventListener("click", () => {
  if (overlayMaestro.classList.contains("activo")) {
    const roles = generarPatronMaestro();
    renderPatronMaestro(roles);
  } else {
    abrirMaestro();
  }
});
cerrarMaestro.addEventListener("click", cerrarMaestroFn);
overlayMaestro.addEventListener("click", (e) => {
  if (e.target === overlayMaestro) cerrarMaestroFn();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlayMaestro.classList.contains("activo")) cerrarMaestroFn();
});

/* ==========================
   6) Estado inicial de la UI
   ========================== */
(function init() {
  // Nada seleccionado al inicio
  [modoTema, modoManual].forEach(i => i.checked = false);
  panelTemas.style.display = "none";
  panelManual.style.display = "none";
  btnGenerar.disabled = true;
  btnBarajar.disabled = true;
  tableroSec.style.display = "none";
})();
