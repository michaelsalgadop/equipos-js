const consola = document.querySelector(".consola");
const pre = document.createElement("pre");
for (const boton of document.querySelectorAll(".boton")) {
  boton.addEventListener("click", (e) => {
    e.preventDefault();
    const nuevoPre = pre.cloneNode();
    limpiaConsola();
    switch (true) {
      case e.target.classList.contains("gt30"):
        nuevoPre.textContent = JSON.stringify(
          equiposMayoresEdad(equipos, 30),
          null,
          2
        );
        break;
      case e.target.classList.contains("tarragona"):
        nuevoPre.textContent = JSON.stringify(
          equiposProvincia(equipos, "Tarragona"),
          null,
          2
        );
        break;
      case e.target.classList.contains("provincias"):
        nuevoPre.textContent = JSON.stringify(provincias(equipos), null, 2);
        break;
      default:
        break;
    }
    consola.appendChild(nuevoPre);
  });
}

const limpiaConsola = () => {
  consola.textContent = "";
};
