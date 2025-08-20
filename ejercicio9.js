const formEjercicio9 = document.getElementById("formEjercicio9");

formEjercicio9.addEventListener("submit", (e) => {
  e.preventDefault();

  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }

  const inicio = parseInt(formEjercicio9.querySelector("#inicio_9").value);
  const fin = parseInt(formEjercicio9.querySelector("#fin_9").value);
  //console.log("numeros", inicio, fin);

  let arrayPrimos = [];
  for (let i = inicio; i <= fin; i++) {
    if (esPrimo(i)) {
      arrayPrimos.push(i);
    }
  }
  //console.log("array primos", arrayPrimos);
  document.getElementById(
    "mensaje_9"
  ).textContent = `Los numeros primos entre los numeros parámetro son: ${arrayPrimos.join(", ")}`;
});
