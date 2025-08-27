const formEjercicioBucles1 = document.getElementById("formEjercicioBucles1");

let productosAgregados = [];
const precios = [
  ["pan", 300],
  ["cafe", 380],
  ["aceite", 47],
  ["leche", 80],
  ["fideos", 62],
  ["vinagre", 50],
  ["harina", 51],
  ["galletitas", 350],
  ["shampoo", 200],
];

function productoValido(producto) {
  if (!producto) return false;

  //return precios.some(([nombre]) => nombre === producto);
  return precios.find(([nombre]) => nombre === producto);
}

function calcularSumaPrecios(productos) {
  const preciosASumar = productos.map((producto) => {
    const precio = precios.find(([nombre]) => nombre === producto)?.[1] || 0;
    return precio;
  });

  let preciosSumados = 0;
  preciosASumar.forEach((precio) => {
    preciosSumados += precio;
  });

  return preciosSumados;
}

formEjercicioBucles1.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.submitter.textContent === "Enviar") {
    const producto = formEjercicioBucles1.querySelector("#producto_b1").value;

    let resultado;
    if (productoValido(producto)) {
      productosAgregados.push(producto);
      resultado = `Producto ${producto} agregado.`;
      formEjercicioBucles1.querySelector("#producto_b1").value = "";
    } else {
      resultado = "Por favor, ingrese un producto de la lista.";
    }

    resultado += `<br />La lista de productos es: ${productosAgregados.join(", ")}`;

    document.getElementById("mensaje_ejercicioBucle1").innerHTML = resultado;
  } else {
    const sumaPrecios = calcularSumaPrecios(productosAgregados);

    document.getElementById(
      "mensaje_ejercicioBucle1"
    ).textContent = `La suma de precios es: $${sumaPrecios}. Los productos ingresados son: ${productosAgregados.join(
      ", "
    )}`;
  }
});
