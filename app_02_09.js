// 02.Funciones
// 09 Desafío hora de practicar

// 1.Crear una función que muestre "¡Hola, mundo!" en la consola.
/*
    let saludo = '¡Hola, Mundo Alura One!';

    function mensaje() {       
        console.log(saludo);    
        return;
    }
    
    mensaje();
*/

//     Según el instructor:
/*
    function mostrarHola() {
    console.log("¡Hola, mundo!");
    }

    mostrarHola();
*/

// 2. Crear una función que reciba un nombre como parámetro
//    y muestre "¡Hola, [nombre]!" en la consola.
/*
    let indicaTuNombre = prompt('Indica tu nombre');

    function tuNombre() {
        console.log(`¡Hola, ${indicaTuNombre}`);
        return;
    }

    tuNombre();
*/

// 3. Crear una función que reciba un número como parámetro
//    y devuelva el doble de ese número.

/*
    let tuNumero = prompt('¿Cuál es tu número?');

    function numeroDoble() {
        console.log(`El doble de tu numero: ${tuNumero} es: ${tuNumero*2}`);
        return;        
    }

    numeroDoble();
*/

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
/*
    function pedirNumeros() {
        var numeros = [];
        for (let i = 0; i < 3; i++) {
        numeros.push(prompt(`Ingrese el número ${i + 1}`));
        }
        return numeros;
    }
    
    function calcularPromedio() {
        var numeros = pedirNumeros();
        var suma = 0;
        for (let i = 0; i < numeros.length; i++) {
        suma += Number(numeros[i]);
        }
        var promedio = suma / numeros.length;
        console.log(`El promedio de los tres números es: ${promedio}`);
    }
    
    calcularPromedio();
*/  
// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
/*
    function compararNumeros() {
        let num1 = prompt("Ingrese el primer número");
        let num2 = prompt("Ingrese el segundo número");
    
        if (num1 > num2) {
        console.log(`El numero mayor es: ${num1}`);
        } else {
        console.log(`El numero mayor es: ${num2}`);
        }
    }
    
    compararNumeros();
*/
//     Según el instructor:
/*
    function encontrarMayor(a, b) {
        return a > b ? a : b;
    }
    
    let numeroMayor = encontrarMayor(15, 9);
    console.log(numeroMayor);
*/

// 6. Crear una función que reciba un número como parámetro
//    y devuelva el resultado de multiplicar ese número por sí mismo.

    function tuNumero() {
        let num = prompt("Ingresa un número");
        console.log(num*num);
        return;
    }

    tuNumero();