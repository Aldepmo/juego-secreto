// 01.Interactuando con HTML    
// 03 Proyecto inicial

/*
Acceso al DOM (Document Objet Model) mediante el uso de selectores
usando el método document.querySelector(parámetro);
el parámetro que espera es cuál va a ser el selector, en este caso = h1
y tomamos el valor seleccionado y lo asignamos a una variable, en este caso let = titulo
Las variables de uso primitivo como textos, números, booleanos, son diferentes
a las variables de tipo objeto como esta: let titulo = document.querySelector("h1");
ya que una variable de tipo objeto es más compleja
pues tiene sus propios métodos los cuales definen su comportamiento. 
*/

let titulo = document.querySelector("h1");
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector("p");
parrafo.innerHTML = 'Indica un número del 1 al 10';