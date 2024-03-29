// 03.Reiniciando el juego
// 02 Mensaje, si acertó

    let numeroSecreto = generarNumeroSecreto();

    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
    }

    function verificarIntento() {
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        
        console.log(numeroSecreto);
        if(numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', 'Acertaste el número');    
        }   else {
            if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');    
            } else {
                asignarTextoElemento('p', 'El número secreto es mayor');    
            }
        }
        return;

    }
    function generarNumeroSecreto() {
        return Math.floor(Math.random()*10)+1;       
    }

    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
