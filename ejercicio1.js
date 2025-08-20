const formEjercicio1 = document.getElementById("formEjercicio1");

formEjercicio1.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formEjercicio1.querySelector("#nombre_1").value;
  const edad = formEjercicio1.querySelector("#edad_1").value;

  //console.log("nombre y edad", nombre, edad);
  let texto;
  if (edad < 99) {
    texto = `¡Hola, ${nombre}! Recién tenés ${edad} años, cuánta juventud!`;
  } else {
    texto = `¡Hola, ${nombre}! Con ${edad} años, ya tienes mucha experiencia.`;
  }

  document.getElementById("mensaje_1").textContent = texto;
});
