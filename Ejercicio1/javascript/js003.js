/*
1. Escribe un script que muestre tu nombre y el curso 
y el campo de la informática donde te gustaría trabajar.
*/

alert("Ejercicio 01");
alert("Alumno Tomás Ruiz González de 1º de DAM");
alert("Me gustaría dedicarme al diseño de interfaces de usuario y frontend")

/*
2. Realiza la suma de los números que se 
introduzcan por teclado hasta que se lea un cero.
*/

alert("Ejercicio 02:");


let numero = Number(prompt("Introduzca un número (0 para salir)"));
let suma = 0;

do {
    suma += numero;
    numero = Number(prompt("Introduzca un número (0 para salir)"));
}while (numero != 0);

alert("La suma de los número introducidos es " + suma);

/*
3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número y habrá que escribirlo por pantalla completo. Por ejemplo, 
introduzco el 1, 2, 3 y 4. El resultado es 1234.
*/

alert("Ejercicio 03");

numero = prompt("Introduzca un número:");
let numeroUsuario = numero;

for (let i = 0; i < 3; i++){
    numeroUsuario += numero;
    numero = prompt("Introduzca un número:");
}

alert ("El número introducido es " + numeroUsuario);

/*
4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto. 
Por ejemplo, un 7.2 es notable.
*/

alert("Ejercicio 04");

let notaAlumno = Number(prompt("Introduzca la nota obtenida:"));

if (notaAlumno >= 0 && notaAlumno < 5){
    alert("La nota obtenida es insuficiente.");    
}else if (notaAlumno >= 5 && notaAlumno < 6){
    alert("La nota obtenida es suficiente.");
}else if (notaAlumno >= 6 && notaAlumno < 7){
    alert("La nota obtenida es bien.");
}else if(notaAlumno >= 7 && notaAlumno < 9){
    alert("La nota obtenida es notable.");
}else if(notaAlumno >= 9 && notaAlumno <= 10){
    alert("La nota obtenida es sobresaliente.");
}else {
    alert("La nota no es válida.")
}

/*
5. Introducir 10 valores en un array, mostrar la suma 
de sus valores, el mayor valor, el menor valor 
y la media de los valores.
*/
alert("Ejercicio 05")

numero = Number(prompt("Introduzca un número"));; 
let array1 = [numero];
let min = numero;
let max = numero;
let media = numero;

for (let i = 0; i < 9 ; i++){
    numero = Number(prompt("Introduzca un número"));
    array1.push(numero);
    media += numero;
    if (numero > max){
        max = numero;
    }
    if (numero < min){
        min = numero;
    }
}

alert("El número más alto introducido es " + max);
alert("El número más bajo introducido es " + min);
alert("La suma de los número introducidos es " + media/array1.length);
alert(array1);