// 02.Funciones
// 06 Capturando el valor del input

let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Usaremos input en HTML para capturar el valor introducido por el usuario en vez de prompt
// Y creamos la variable numeroDeUsuario en lugar del alert

function verificarIntento() {

    //  alert('Hiciste click en el boton "Intentar" capturamos el evento en la función intentoDeUsuario');
    // El codigo de abajo sería para un solo input: 
    //  let numeroDeUsuario = document.querySelector('input');
    // El codigo de abajo es para varios inputs
    // getElementById devuelve el objeto y yo quiero el valor por lo que agrego el atributo .value
    // Se usa parseInt para convertir un string en numero

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario)); // verifico el tipo de dato para numeroDeUsuario
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); // verifico el tipo de dato para numeroSecreto
    console.log(numeroDeUsuario);

    // Ahora comparo el numero secreto=numeroSecreto vs el valor introducido por el usuario=numeroDeUsuario
    // El valor que retorna en un booleano True/False
    // Se puede usar el triple === al comparar manzanas vs manzanas, es decir igual en valor y en tipo de dato.

    console.log(numeroDeUsuario === numeroSecreto);
    return;
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;       
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
