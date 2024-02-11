// 02.Funciones
// 02 Asigna texto a un elemento HTML

/*
    let titulo = document.querySelector("h1");
    titulo.innerHTML = 'Juego del número secreto';

    let parrafo = document.querySelector("p");
    parrafo.innerHTML = 'Indica un número del 1 al 10';

    function intentoDeUsuario() {
        alert('Hiciste click en el boton "Intentar" y capturamos el evento en la función intentoDeUsuario');
    }
*/

// Como buena práctica, si vemos un código repetido,
// tenemos que estar pendientes de ver si podemos optimizarlo.

// En este caso, y conociendo ahora el concepto de función,
// ¿por qué no colocar ese código en una función?
// Entonces, vamos a declarar una función. La voy a llamar asignarTextoElemento.

/*
function asignarTextoElemento() {
        let titulo = document.querySelector("h1");
        titulo.innerHTML = 'Juego del número secreto actualizado';
    }
*/

// Si yo copio este código, las líneas 5 y 6, dentro de la función, y lo llamo aquí,
// asignarTextoElemento(), vean que funcionara igual.

/*
    asignarTextoElemento();
*/

// Para llamar a la función es utilizar el nombre de la función y los paréntesis.
// Lo puedes hacer dentro de JavaScript como lo puedes hacer dentro de HTML en eventos.
// Pero solo en eventos. En el código de JavaScript lo puedes hacer en cualquier momento
// que estés fuera de un bloque, que es fuera de las llaves.
// También puedes llamar una función desde otra función.

/*
Aquí me gustaría explicar un punto que genera muchas dudas.
JavaScript es un lenguaje que ejecuta de forma secuencial.
Va leyendo de arriba hacia abajo. Línea 1, línea 2, línea 3, etc.
En el caso de las funciones, lo primero que hace es ver si hay
funciones declaradas o definidas. Lee las funciones y las deja
disponibles en algún lugar por si son llamadas en cualquier momento.
Esto significa que independientemente de que la función sea
declarada o definida arriba o al final, igual va a funcionar.
Puedo, en este caso, llamar a asignarTextoElemento() encima de la función.
Este es un concepto llamado hoisting (Elevación) que existe en JavaScript.
*/

/*
Pero estoy haciendo algo que aún queda por hacer.
Porque si te das cuenta, el código todavía está repetido.
Lo único que hicimos fue cambiar la posición de nuestro texto
y creamos una función que actualmente solo ejecuta una acción,
pero no puedo reutilizarla. Entonces, la idea ahora es
que esa función sea genérica. Y para ello, en JavaScript
existe el concepto que se llama parámetros.
Es la forma en que el comportamiento de la función
se va a modificar de acuerdo a lo que reciba.

Porque no va a haber una etiqueta fija,
no va a haber un texto fijo.
Sino que será recibido por la función.
La función no necesita conocer la etiqueta,
no necesita conocer el texto de manera fija.
Puede recibirlo cada vez que sea llamada.
Y eso es lo que vamos a hacer ahora.
*/

// La función puede recibir parametros = elemento, texto
// Y como mejor práctica cambiamos titulo por algo generico como elementoHTML

    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    }

// Ahora podemos invocar tantas veces como queramos a la función.

    asignarTextoElemento('h1', 'Juegos del hambre número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 100');
