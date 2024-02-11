// 04 Arreglos Arrays
// 05 Resolviendo la Recursividad

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroSecreto);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);    
        // Para activar el botón de reiniciar el juego
        document.getElementById('reiniciar').removeAttribute('disabled');    
    }   else {
        // El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');    
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');    
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
  let valorIntento = document.querySelector('#valorUsuario');
  valorIntento.value = ''; // Vacio
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Antes que entre la recursividad línea 58
    // Podemos preguntar: Si ya sorteamos todos los números

    if (listaNumerosSorteados.length == numeroMaximo) {
        
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }   else {

            // Para preguntar si esta en la lista: usamos el método include
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                // si el número ya existe, generamos un nuevo número usando recursividad
                return generarNumeroSecreto();
            }   else {
                // adicionalmente guardamos ese número en la lista
                listaNumerosSorteados.push(numeroGenerado);
                // Si no existe, usamos el número generado
                return numeroGenerado;
            }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {

    // Limpiar la caja de intentos.

        limpiarCaja();

    // Indicar mensaje de inicio con el intervalo de números.
    // Generar el número secreto.
    // Inicializar el número de intentos.

        condicionesIniciales();
                    
    // Deshabilitar el botón de re iniciar o nuevo juego.

        document.querySelector('#reiniciar').setAttribute('disabled','true');
}
    condicionesIniciales();
