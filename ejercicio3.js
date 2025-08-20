const formEjercicio3 = document.getElementById("formEjercicio3");

formEjercicio3.addEventListener("submit", (e) => {
  e.preventDefault();

  const producto1 = formEjercicio3.querySelector("#producto_1_3").value;
  const producto2 = formEjercicio3.querySelector("#producto_2_3").value;
  const producto3 = formEjercicio3.querySelector("#producto_3_3").value;

  //console.log("productos", producto1, producto2, producto3);

  let array = [];
  array.push(producto1, producto2, producto3);
  let texto = `Productos: ${array.join(", ")}. `;
  document.getElementById("mensaje_3").textContent = texto;
});
