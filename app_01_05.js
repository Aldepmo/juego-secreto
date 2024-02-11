// 01.Interactuando con HTML
// 05 Evento a un clic y primera función

/* 
Una acción es igual a un evento en javaScript,
por ejemplo la acción de pulsar o presionar un botón 
ejemplo presionar el botón de "Intentar".

Cuando tecleo es otro evento.
Cuando muevo el cursor es otro evento.
Si me coloco encima de un elemento es otro evento.
Lo cuál le permite a JS reaccionar y darle al usuario
respuestas sobre cada evento. Y esto es conocido
como la experiencia del usuario = UX
*/

// Siempre esta la ayuda de MDN como parte de la ayuda con la documentación oficial de JS

let titulo = document.querySelector("h1");
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector("p");
parrafo.innerHTML = 'Indica un número del 1 al 10';

// En HTML ejecutamos la función 

// En JS  declaramos la función
// Forma tradicional de declarar o crear una función

function intentoDeUsuario() {
    alert('Hiciste click en el boton "Intentar" y capturamos el evento en la función intentoDeUsuario');
}


