const formEjercicioBuclesFunciones2 = document.getElementById("formEjercicioBuclesFunciones2");

formEjercicioBuclesFunciones2.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero1 = parseInt(formEjercicioBuclesFunciones2.querySelector("#numero_1_bf2").value);
  const numero2 = parseInt(formEjercicioBuclesFunciones2.querySelector("#numero_2_bf2").value);
  const numero3 = parseInt(formEjercicioBuclesFunciones2.querySelector("#numero_3_bf2").value);
  const numero4 = parseInt(formEjercicioBuclesFunciones2.querySelector("#numero_4_bf2").value);
  const numero5 = parseInt(formEjercicioBuclesFunciones2.querySelector("#numero_5_bf2").value);

  const suma = sumarNumeros([numero1, numero2, numero3, numero4, numero5]);

  document.getElementById("mensaje_ejercicioBuclesFunciones2").textContent = "La suma es: " + suma;
});

function sumarNumeros(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}
