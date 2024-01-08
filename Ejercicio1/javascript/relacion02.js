/*
1. Crea un objeto cuyo contenido sea el número ordinal y 
como valor el número cardinal, es decir, 1: primero, 
2: segundo… hasta el 10: décimo. 
Crea una función que cada vez que se introduzca el 
número ordinal nos dé como resultado el cardinal del número, 
hasta que se introduzca un número distinto del 1 al 10 
o cualquier otro valor. Utiliza la instrucción for..in. 
HAY QUE HACERLO CON OBJETOS.
*/

let numeros = {
    1 : "primero",
    2 : "segundo",
    3 : "tercero",
    4 : "cuarto",
    5 : "quinto",
    6 : "sexto",
    7 : "séptimo",
    8 : "octavo",
    9 : "noveno",
    10 : "décimo",
}

let numeroUsuario;
let salirBucle = false;

do {
    numeroUsuario = Number(prompt("Introduzca un número:"));

    for (let numero in numeros) {
        if (numeroUsuario === Number(numero)) {
            alert(numeros[numeroUsuario]);            
        }
    }

    if (numeroUsuario < 1 || numeroUsuario > 10) {
        salirBucle = true;
        alert("Número fuera del rango válido.");
    }

} while (!salirBucle);

/*
2. Crea un script que acepte dos valores introducidos en decimal y muestre el resultado de 
la suma en binario y en hexadecimal. Utiliza asignación desectructurada.
*/

