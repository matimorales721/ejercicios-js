const formEjercicio5 = document.getElementById("formEjercicio5");

formEjercicio5.addEventListener("submit", (e) => {
  e.preventDefault();

  const calificacion1 = parseFloat(formEjercicio5.querySelector("#calificacion_1_5").value);
  const calificacion2 = parseFloat(formEjercicio5.querySelector("#calificacion_2_5").value);
  const calificacion3 = parseFloat(formEjercicio5.querySelector("#calificacion_3_5").value);
  const calificacion4 = parseFloat(formEjercicio5.querySelector("#calificacion_4_5").value);
  const calificacion5 = parseFloat(formEjercicio5.querySelector("#calificacion_5_5").value);

  //console.log("calificaciones", calificacion1, calificacion2, calificacion3, calificacion4, calificacion5);

  let calificaciones = [calificacion1, calificacion2, calificacion3, calificacion4, calificacion5];

  //let numerador = calificaciones.reduce((a, b) => a + b, 0); //
  let numerador = 0;
  calificaciones.forEach((calificacion) => {
    numerador += calificacion;
  });

  let denominador = calificaciones.length;
  let promedio = numerador / denominador;
  document.getElementById("mensaje_5").textContent = `Promedio: ${promedio}`;
});
