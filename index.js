const formEjercicio1 = document.getElementById("formEjercicio1");
const formEjercicio2 = document.getElementById("formEjercicio2");
const formEjercicio3 = document.getElementById("formEjercicio3");
const formEjercicio4 = document.getElementById("formEjercicio4");
const formEjercicio5 = document.getElementById("formEjercicio5");
const formEjercicio6 = document.getElementById("formEjercicio6");
const formEjercicio7 = document.getElementById("formEjercicio7");
const formEjercicio8 = document.getElementById("formEjercicio8");
const formEjercicio9 = document.getElementById("formEjercicio9");
const formEjercicio10 = document.getElementById("formEjercicio10");
const formEjercicioExtra = document.getElementById("formEjercicioExtra");

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

formEjercicio4.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero1 = formEjercicio4.querySelector("#numero_1_4").value;
  const numero2 = formEjercicio4.querySelector("#numero_2_4").value;
  const numero3 = formEjercicio4.querySelector("#numero_3_4").value;
  const numero4 = formEjercicio4.querySelector("#numero_4_4").value;
  const numero5 = formEjercicio4.querySelector("#numero_5_4").value;

  //console.log("numeros", numero1, numero2, numero3, numero4, numero5);

  let array = [numero1, numero2, numero3, numero4, numero5];
  let texto = "";

  array.forEach((numero, index) => {
    if (numero % 2 == 0) {
      texto += `El número ${numero} es par. `;
    } else {
      texto += `El número ${numero} es impar. `;
    }
  });
  document.getElementById("mensaje_4").textContent = texto;
});

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

formEjercicio6.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formEjercicio6.querySelector("#nombre_6").value;

  //console.log("nombre", nombre);

  const array = [
    "Juan",
    "Pedro",
    "Gaston",
    "Luis",
    "Jacinto",
    "Camila",
    "Julieta",
    "Luciana",
    "Marta",
    "Monica",
    "Leonardo",
    "Diego",
    "Victor",
  ];
  if (array.includes(nombre)) {
    document.getElementById("mensaje_6").textContent = `Existe ${nombre} en la Lista, podés pasar.`;
  } else {
    document.getElementById("mensaje_6").textContent = `No existe ${nombre} en la Lista, no podés pasar.`;
  }
});

formEjercicio7.addEventListener("submit", (e) => {
  e.preventDefault();

  const palabra = formEjercicio7.querySelector("#palabra_7").value;
  //console.log("palabra", palabra);

  let cantidadVocales = 0;
  palabra.split("").forEach((letra) => {
    if ("aeiou".includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  });

  document.getElementById("mensaje_7").textContent = `Cantidad de vocales en la palabra: ${cantidadVocales}`;
});

formEjercicio8.addEventListener("submit", (e) => {
  e.preventDefault();

  const frase = formEjercicio8.querySelector("#frase_8").value;
  //console.log("frase", frase);

  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }

  let fraseInvertida2 = frase.split("").reverse().join("");

  document.getElementById("mensaje_8").textContent = `Frase invertida: ${fraseInvertida2}`;
});

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

formEjercicio10.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = formEjercicio10.querySelector("#adivinanza_10").value;
  //console.log("adivinanza", numero);

  let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
  //console.log("numeroAleatorio", numeroAleatorio);
  let texto = "";
  if (numero == numeroAleatorio) {
    texto = `¡Felicidades! Adivinaste el número: ${numeroAleatorio}`;
  } else if (numero < numeroAleatorio) {
    texto = `El número es mayor que ${numero}`;
  } else {
    texto = `El número es menor que ${numero}`;
  }
  document.getElementById("mensaje_10").textContent = texto;
});

formEjercicioExtra.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = formEjercicioExtra.querySelector("#nombre_extra").value;
  const hobbie1 = formEjercicioExtra.querySelector("#hobby_1_extra").value;
  const hobbie2 = formEjercicioExtra.querySelector("#hobby_2_extra").value;
  const hobbie3 = formEjercicioExtra.querySelector("#hobby_3_extra").value;
  //console.log("nombre", nombre);
  //console.log("hobbies", hobbie1, hobbie2, hobbie3);

  const texto = `Hola ${nombre}! Qué buenos hobbies: ${hobbie1}, ${hobbie2}, ${hobbie3}`;

  document.getElementById("mensaje_extra").textContent = texto;
});
