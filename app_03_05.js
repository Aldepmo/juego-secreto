// 03.Reiniciando el juego
// 05 Limpiar campo

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

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
    return Math.floor(Math.random()*10)+1;       
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
