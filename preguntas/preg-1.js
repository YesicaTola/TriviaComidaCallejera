
var preguntas = [
  {
    pregunta: "¿Cuál es el plato bandera de la ciudad de El Alto?",
    respuestas: [
      "Ají de fideo",
      "Fiambre",
      "Revuelto de carne"
    ],
    //respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuál es el bocadillo callejero más popular en Bolivia?",
    respuestas: [
      "Relleno",
      "Empanada",
      "Salteña"
    ],
    //respuestaCorrecta: 3
  },
  {
    pregunta: "¿Cuál es el postre frío más popular en las calles bolivianas?",
    respuestas: [
      "Mocochinchi",
      "Helado de canela",
      "Gelatina"
    ],
    //respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué tipo de pan se utiliza en la elaboración del Sandwich de Chola en Bolivia?",
    respuestas: [
      "Pan sarnita",
      "Pan francés",
      "Pan de yuca"
    ],
    //respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál es el nombre de un popular plato de comida callejera boliviana que consiste en una masa de maíz rellena de queso y frita?",
    respuestas: [
      "Salteña",
      "Arepa",
      "Buñuelos"
    ],
    //respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué bebida caliente es típica de la comida callejera boliviana y está hecha a base de maíz morado y frutas?",
    respuestas: [
      "Chicha",
      "Api",
      "Té de coca"
    ],
    //respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuál es la razón más común porque la gente prefiere comida callejera?",
    respuestas: [
      "Porque es comida recién preparada",
      "Porque tienen un buen sazón",
      "Porque es económico"
    ],
    //respuestaCorrecta: 1
  },
  {
    pregunta: "¿Que horneado de Santa Cruz puedes hallar en cualquier parte?",
    respuestas: [
      "Sonso",
      "Buñuelo",
      "Cuñape"
    ],
    //respuestaCorrecta: 3
  },
  {
    pregunta: "¿Cuál es la salsa que no puede faltar en la mesa de la comida boliviana?",
    respuestas: [
      "Llajua",
      "Ketchup",
      "Mayonesa"
    ],
    //respuestaCorrecta: 1
  },
];

var puntajePorOpcion = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0]

]

// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

//Cambiar las cartas de preguntas
var i = 0;
function siguiente_pregunta() {
  document.getElementsByClassName('preguntas')[0].innerHTML = preguntas[i]['pregunta'];  //Cambiar encabezado pregunta

  document.getElementById('op1').innerHTML = preguntas[i]['respuestas'][0] //cambiar la primera opcion
  document.getElementById('op2').innerHTML = preguntas[i]['respuestas'][1] //cambiar la segunda opcion
  document.getElementById('op3').innerHTML = preguntas[i]['respuestas'][2] //cambiar la tercera opcion

  document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
};

siguiente_pregunta();
document.getElementById('op1').addEventListener("click", function() {
  actualizarPuntaje(0);

});

document.getElementById('op2').addEventListener("click", function() {
  actualizarPuntaje(1);

});

document.getElementById('op3').addEventListener("click", function() {
  actualizarPuntaje(2);

});


// Para ver los resultados
function mostrarResultado() {
  // Se remueven los hijos del div con clase "card-p1", dentro de él agregaremos los resultados
  document.getElementsByClassName("card-p1")[0].style.display = "none"

  document.getElementsByClassName("resultados")[0].style.display = "block"

  document.getElementById('resultado_titulo').innerHTML = "¿Cuánto conoces de las delicias en la calle?"

  if (puntaje > 7) {
    document.getElementById("estilo-excelente").innerHTML = "¡Excelente! Eres un verdadero foodie de comida callejera en Bolivia"

  } else if (puntaje > 5) {
    document.getElementById("estilo-bueno").innerHTML = "¡Esta muy bien! Se nota que eres un gran conocedor"

  } else if (puntaje > 3) {
    document.getElementById("estilo-aceptable").innerHTML = "¡Eres un conocedor promedio, pero puedes mejorar!"

  } else {
    document.getElementById("estilo-malo").innerHTML = "Te falta conocer más de tu tierra. ¡Ánimate a probar más de nuestras delicias!"
  }

}

function actualizarPuntaje(opcion) {
  var indice = opcion;
  puntaje += puntajePorOpcion[i][indice];

  i++
  if (i < 9) {

    siguiente_pregunta();
  } else {
    mostrarResultado();
  }
}

//Para reiniciar con el juego
function reiniciar() {

  document.getElementsByClassName("resultados")[0].style.display = "none";
  document.getElementsByClassName("card-p1")[0].style.display = "block";

}