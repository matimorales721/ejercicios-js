const formEjercicioBucles3 = document.getElementById("formEjercicioBucles3");

formEjercicioBucles3.addEventListener("submit", (e) => {
  e.preventDefault();

  let listaNumerosUsuario = formEjercicioBucles3.querySelector("#listaNumeros_b3").value;
  let numerosArray = listaNumerosUsuario.split(","); //.map((n) => parseInt(n));

  // Validar que la lista sea válida y contenga solo números
  if (!numerosArray || numerosArray.length === 0 || numerosArray.some((n) => isNaN(parseInt(n)))) {
    document.getElementById("mensaje_ejercicioBucle3").textContent = "Por favor ingresa una lista de números válida.";
    return;
  }
  numerosArray = numerosArray.map((n) => parseInt(n));

  // hallar el mas cercano a 0 (de copilot)
  //let masCercano = listaArray.reduce((prev, curr) => {
  //  return Math.abs(curr - 0) < Math.abs(prev - 0) ? curr : prev;
  //});

  // hallar el mas cercano a 0 (a mano)
  let masCercano = numerosArray[0];
  numerosArray.forEach((numero) => {
    numero = parseInt(numero);

    // con esto me quedo con el más cercano a 0 en valor absoluto
    if (Math.abs(numero) < Math.abs(masCercano)) {
      masCercano = numero;
    }
    // con esto me quedo con el valor positivo si la distancia es la misma
    else if (Math.abs(numero) === Math.abs(masCercano)) {
      masCercano = Math.max(masCercano, numero);
    }
  });

  let resultado = "";
  if (masCercano < 0) {
    resultado = `El valor mas cercano al 0 es negativo y es: ${masCercano}`;
  } else if (masCercano > 0) {
    resultado = `El valor mas cercano al 0 es positivo y es: ${masCercano}`;
  } else if (masCercano === 0) {
    resultado = `Tenemos en la lista el numero 0, por lo que este seria el mas cercano a si mismo.`;
  }

  document.getElementById("mensaje_ejercicioBucle3").textContent = resultado;
});
