const formEjercicio2 = document.getElementById("formEjercicio2");

formEjercicio2.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero1 = parseFloat(formEjercicio2.querySelector("#numero_1_2").value);
  const numero2 = parseFloat(formEjercicio2.querySelector("#numero_2_2").value);

  //console.log("numero1 y numero2", numero1, numero2);

  let texto;
  texto = `Suma: ${numero1 + numero2}. `;
  texto += `Resta: ${numero1 - numero2}. `;
  texto += `Multiplicación: ${numero1 * numero2}. `;
  if (numero2 == 0) {
    texto += `División: No se puede dividir por cero. `;
  } else {
    texto += `División: ${numero1 / numero2}. `;
  }

  document.getElementById("mensaje_2").textContent = texto;
});
