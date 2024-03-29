// 03.Reiniciando el juego
// 02 Mensaje, de número de intentos

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
    }   else {
        if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');    
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');    
        }
        intentos++;
    }
    return;

}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;       
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

