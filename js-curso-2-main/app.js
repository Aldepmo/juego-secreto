// 01.Interactuando con HTML
// 08 Desafío

// Cambia el contenido de la etiqueta h1 con document.querySelector y
// asigna el siguiente texto: "Hora del desafío".

let contenidoEtiquetaH1 = document.querySelector("h1");
contenidoEtiquetaH1.innerHTML = 'Hora del desafío';

// Crea una función que muestre en la consola el mensaje:
// "El botón fue clicado" siempre que se presione el botón "Console".

function botonConsolePresionado() {
    console.log('El botón Console fue clicado');
}

// Crea una función que se ejecute cuando se haga clic en el
// botón "prompt", preguntando el nombre de una ciudad de
// Brasil. Luego, muestra una alerta con el mensaje concatenando
// la respuesta con el texto: "Estuve en {ciudad} y me acorde
// de ti".

let ciudad = prompt('Indica una ciudad');

function botonPromptClicado() {
    alert(`Estuve en ${ciudad} y me acorde de tí`);
}

// Crea una función que muestre una alerta con el mensaje:
// "Yo amo JS" siempre que se presione el botón "Alert".

function mensajeDeAmor() {
    alert('Yo amo JS');
}

// Al hacer clic en el botón "suma", pide 2 números
// y muestra el resultado de la suma en una alerta.


function pedir2Numeros() {
    // parseInt:
    // Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
    let numeroUno = parseInt(prompt('Indica tu primer número'));
    let numeroDos = parseInt(prompt('Indica tu segundo número'));
    let suma = numeroUno + numeroDos;
    alert(`La suma de ${numeroUno} + ${numeroDos} = ${suma}`);
}

