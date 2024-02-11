// 02.Funciones
// 04 Genera un número aleatorio

    let numeroSecreto = generarNumeroSecreto();

    console.log(numeroSecreto);

    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    }

    function intentoDeUsuario() {
        alert('Hiciste click en el boton "Intentar" capturamos el evento en la función intentoDeUsuario');
    }
/*
En el curso anterior hicimos algo interesante que es generar
ese número aleatorio o pseudoaleatorio a través de
funciones matemáticas que nos proporciona el propio Javascript

¿Será que podemos crear una función para generar el número aleatorio? 
 Sí, con este concepto de función podríamos incluso aplicar ese número
 pseudoaleatorio a otras operaciones.

 Imaginemos que queremos definir un rango diferente o mover el rango
 en lugar de 0 a 10, de 10 a 20. Todo eso iría encapsulado en esa función
*/
    function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1;       
    }

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');