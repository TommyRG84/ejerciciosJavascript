/*
1. Escribe un script que muestre tu nombre y el curso 
y el campo de la informática donde te gustaría trabajar.
*/

alert("Ejercicio 01: Escribe un script que muestre tu nombre y el curso y el campo de la informática donde te gustaría trabajar.");
alert("Alumno Tomás Ruiz González de 1º de DAM");
alert("Me gustaría dedicarme al diseño de interfaces de usuario y frontend")

/*
2. Realiza la suma de los números que se 
introduzcan por teclado hasta que se lea un cero.
*/

alert("Ejercicio 02: Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero.");


let numero = Number(prompt("Introduzca un número (0 para salir)"));
let suma = 0;

do {
    suma += numero;
    numero = Number(prompt("Introduzca un número (0 para salir)"));
} while (numero != 0);

alert("La suma de los número introducidos es " + suma);

/*
3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo por pantalla completo. Por ejemplo, 
introduzco el 1, 2, 3 y 4. El resultado es 1234.
*/

alert("Ejercicio 03: Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo por pantalla completo. Por ejemplo,introduzco el 1, 2, 3 y 4. El resultado es 1234.");

numero = prompt("Introduzca un número:");
let numeroUsuario = numero;

for (let i = 0; i < 3; i++) {
    numeroUsuario += numero;
    numero = prompt("Introduzca un número:");
}

alert("El número introducido es " + numeroUsuario);

/* 
4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. 
Por ejemplo, un 7.2 es notable.
*/

alert("Ejercicio 04: Leer el valor de la nota de un alumno y poner la nota correspondiente en texto.Por ejemplo, un 7.2 es notable.");

let notaAlumno = Number(prompt("Introduzca la nota obtenida:"));

if (notaAlumno >= 0 && notaAlumno < 5) {
    alert("La nota obtenida es insuficiente.");
} else if (notaAlumno >= 5 && notaAlumno < 6) {
    alert("La nota obtenida es suficiente.");
} else if (notaAlumno >= 6 && notaAlumno < 7) {
    alert("La nota obtenida es bien.");
} else if (notaAlumno >= 7 && notaAlumno < 9) {
    alert("La nota obtenida es notable.");
} else if (notaAlumno >= 9 && notaAlumno <= 10) {
    alert("La nota obtenida es sobresaliente.");
} else {
    alert("La nota no es válida.")
}

/*
5. Introducir 10 valores en un array, mostrar la suma 
de sus valores, el mayor valor, el menor valor 
y la media de los valores.
*/
alert("Ejercicio 05: Introducir 10 valores en un array, mostrar la suma de sus valores, el mayor valor, el menor valor y la media de los valores.")

numero = Number(prompt("Introduzca un número"));;
let array1 = [numero];
let min = numero;
let max = numero;
let media = numero;

for (let i = 0; i < 9; i++) {
    numero = Number(prompt("Introduzca un número"));
    array1.push(numero);
    media += numero;
    if (numero > max) {
        max = numero;
    }
    if (numero < min) {
        min = numero;
    }
}

alert("El número más alto introducido es " + max);
alert("El número más bajo introducido es " + min);
alert("La media de los número introducidos es " + media / array1.length);
alert(array1);

/*
6. Rellenar un array con valores aleatorios 
mediante una función matemática de 20 elementos 
tipo entero entre el 10 y el 20. 
El programa tendrá que mostrar el total de valores 
mayores que 15, menores que 15 e iguales a 15.
*/

alert("Ejercicio 06: Rellenar un array con valores aleatorios mediante una función matemática de 20 elementos tipo entero entre el 10 y el 20. El programa tendrá que mostrar el total de valores mayores que 15, menores que 15 e iguales a 15.");

let menorAQuince = [];
let igualAQuince = [];
let mayorAQuince = [];
let numeroAleatorio;
min = 10;
max = 20;

for (let i = 1; i <= 20; i++) {
    numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    if (numeroAleatorio < 15) {
        menorAQuince.push(numeroAleatorio);
    } else if (numeroAleatorio === 15) {
        igualAQuince.push(numeroAleatorio);
    } else {
        mayorAQuince.push(numeroAleatorio);
    }
}

alert("Los números menores a 15 son: " + menorAQuince.length);
alert("Las veces que se ha generado 15 son: " + igualAQuince.length);
alert("Los números generados mayores a 15 son: " + mayorAQuince.length);


/*
6. Introducir 10 valores en una línea separada 
por espacios en blancos. En un array deben de introducirse 
los valores pares y en otro los impares.
*/

alert("Ejercicio 07 (Opcional) Introducir 10 valores en una línea separada por espacios en blancos. En un array deben de introducirse los valores pares y en otro los impares.");

let numeros = prompt("Introduzca 10 valores separados por espacios: ");
let arrayNumeros = numeros.split(" ");
let arrayPares = [];
let arrayImpares = [];

for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] % 2 === 0) {
        arrayPares.push(arrayNumeros[i]);
    } else {
        arrayImpares.push(arrayNumeros[i]);
    }
}

alert("Los números impares introducisdos son: " + arrayImpares);
alert("Los números pares introducidos son: " + arrayPares);

