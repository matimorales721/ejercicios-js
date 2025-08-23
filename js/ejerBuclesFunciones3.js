const formEjercicioBuclesFunciones3 = document.getElementById("formEjercicioBuclesFunciones3");

formEjercicioBuclesFunciones3.addEventListener("submit", (e) => {
  e.preventDefault();

  let array = [];
  for (let i = 0; i < 10; i++) {
    random = Math.floor(Math.random() * 100) + 1;
    array.push(random);
  }

  document.getElementById("mensaje_ejercicioBuclesFunciones3_impares").textContent =
    "La cantidad de impares es: " + contarImpares(array);
  document.getElementById("mensaje_ejercicioBuclesFunciones3_pares").textContent =
    "La cantidad de pares es: " + contarPares(array);
});

function contarPares(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

function contarImpares(array) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      contador++;
    }
  }
  return contador;
}
