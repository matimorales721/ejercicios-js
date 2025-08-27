const formEjercicioClase17_1 = document.getElementById("formEjercicioClase17_1");
let parrafo = formEjercicioClase17_1.querySelector(".parrafo-c17");

formEjercicioClase17_1.querySelector("#cambiarColorTexto-c17").addEventListener("click", (e) => {
  let color_letra = parrafo.style.color;

  if (color_letra === "red") {
    color_letra = "blue";
  } else if (color_letra === "blue") {
    color_letra = "green";
  } else if (color_letra === "green") {
    color_letra = "red";
  } else {
    color_letra = "red";
  }
  parrafo.style.color = color_letra;
});

formEjercicioClase17_1.querySelector("#cambiarTamañoFuente-c17").addEventListener("click", (e) => {
  let tamano_letra = parrafo.style.fontSize;

  if (tamano_letra === "2em") {
    tamano_letra = "1em";
  } else if (tamano_letra === "1em") {
    tamano_letra = "1.5em";
  } else if (tamano_letra === "1.5em") {
    tamano_letra = "2em";
  } else {
    tamano_letra = "1.5em";
  }
  parrafo.style.fontSize = tamano_letra;
});

formEjercicioClase17_1.querySelector("#cambiarColorFondo-c17").addEventListener("click", (e) => {
  let color_fondo = parrafo.style.backgroundColor;

  if (color_fondo === "yellow") {
    color_fondo = "white";
  } else if (color_fondo === "white") {
    color_fondo = "darksalmon";
  } else if (color_fondo === "darksalmon") {
    color_fondo = "yellow";
  } else {
    color_fondo = "yellow";
  }
  parrafo.style.backgroundColor = color_fondo;
});
