/* js */

/* mensaje d bienvenida  */
window.addEventListener("load", function () {
  alert("🎶 Bienvenido al NEW YORK SOUND FEST 2025 🎵");
  console.log("La página ha cargado correctamente");
});
/* info */
function mostrarPrograma(dia) {
  alert("Has hecho clic en el programa del día: " + dia);
  console.log("Usuario consultó el programa del " + dia);
}
/* contacto formulario */
function abrirFormulario() {
  alert("Formulario de contacto abierto");
}
/* menu */
let menuVisible = false;
function mostrarMenu() {
  const nav = document.querySelector("nav > ul.menu_pr");
  if (menuVisible) {
    nav.style.display = "none";
    menuVisible = false;
  } else {
    nav.style.display = "flex";
    menuVisible = true;
  }
}
/* boton de entradas */
const botonEntradas = document.querySelector(".hero button");
if (botonEntradas) {
  botonEntradas.addEventListener("click", function () {
    window.location.href = "tickets.html";
  });
}
