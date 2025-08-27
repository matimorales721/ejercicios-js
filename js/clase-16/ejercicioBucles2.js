const formEjercicioBucles2 = document.getElementById("formEjercicioBucles2");

let paises = ["Argentina", "Peru", "Bolivia", "Italia", "Australia"];

function paisExistente(paisUsuario) {
  return paises.find((pais) => pais.toLocaleLowerCase() === paisUsuario.toLocaleLowerCase());
}

formEjercicioBucles2.addEventListener("submit", (e) => {
  e.preventDefault();
  const paisUsuario = formEjercicioBucles2.querySelector("#pais_b2").value;

  let resultado;
  if (paisExistente(paisUsuario)) {
    paises.splice(paises.indexOf(paisUsuario), 1);
    resultado = "Pais ya registrado, se elimina del registro.";
  } else {
    paises.push(paisUsuario);
    resultado = "Pais registrado.";
  }

  resultado += `<br />La lista de paises es: ${paises.join(", ")}`;

  document.getElementById("mensaje_ejercicioBucle2").innerHTML = resultado;
});
