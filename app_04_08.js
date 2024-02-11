// 04 Listas o Arrays
// 08 Desafío: Hora de Practicar


// 1. Crea una lista vacía llamada "lista generica".

let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación llamada 
// lenguajesDeProgramacion" con los siguientes elementos:
// 'JavaScript', 'C', 'C++', 'Kotlin', y 'Python'

let lenguajesDeProgramacion = ['JavaScript','C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Ruby');
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.pop();
console.log(lenguajesDeProgramacion);

// 3. Agrega a la lista "lenguajesDeProgramacion" los siguientes
// elementos: 'Java', 'Ruby', y 'GoLang'.

lenguajesDeProgramacion.push('java', 'GoLang', 'Ruby');
console.log(lenguajesDeProgramacion);

// 4. Crea una función que muestre en la consola
// todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarEnConsolaLenguajesDeProgramacion() {
    console.log(lenguajesDeProgramacion);
    return;
}
mostrarEnConsolaLenguajesDeProgramacion();

// 5. Crea una función que muestre en la consola todos
// los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  mostrarLenguagesReversoSeparadamente();

// 6. Crea una función que calcule la media de los elementos en una lista de números.

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log((`La media de ${numeros} es:`), media);

// 7. Crea una función que muestre en la consola el número mayor y menor en una lista.

function encontrarMayorMenor(lista2) {
    let mayor = lista2[0];
    let menor = lista2[0];
  
    for (let i = 1; i < lista2.length; i++) {
      if (lista2[i] > mayor) {
        mayor = lista2[i];
      }
      if (lista2[i] < menor) {
        menor = lista2[i];
      }
    }
  
    console.log((`El número Mayor de ${lista2} es:`), mayor);
    console.log((`El número Menor de ${lista2} es:`), menor);
  }
  
  let numeros7 = [15, 8, 25, 5, 12, 35, 4];
  encontrarMayorMenor(numeros7);

  // 8. Crea una función que retorne la suma de todos los elementos en una lista.

  function calcularSuma(lista8) {
    let suma8 = 0;
    for (let i = 0; i < lista8.length; i++) {
      suma8 += lista8[i];
    }
    return suma8;
  }
  
  let numeros8 = [15, 8, 25, 5, 12];
  let suma8 = calcularSuma(numeros8);
  console.log(`La suma de ${numeros8} es:`, suma8);

// 9. Crea una función que reciba una lista como parámetro y
// retorne el índice de un elemento también pasado como parámetro.
// Si ese elemento no existe en la lista, retorna -1.

function encontrarIndiceElemento(lista9, elemento) {
    for (let i = 0; i < lista9.length; i++) {
      if (lista9[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

  let lista9 = [2, 4, 6, 8];
console.log(encontrarIndiceElemento(lista9, 4));
console.log(encontrarIndiceElemento(lista9, 5));