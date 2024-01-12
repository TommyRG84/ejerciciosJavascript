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
la suma en binario y en hexadecimal. Utiliza asignación desestructurada.
*/

alert("Ejercicio 02: Crea un script que acepte dos valores introducidos en decimal y muestre el resultado de la suma en binario y en hexadecimal. Utiliza asignación desestructurada.")

let numeroUsuario1 = Number(prompt("Introduzca un número decimal:"));
let numeroUsuario2 = Number(prompt("Introduzca un número decimal:"));
let suma = numeroUsuario1 + numeroUsuario2;

alert(`La suma de ambos números es ${suma}`);

let { binario, hexadecimal } = {
    binario: convertirABinario(suma),
    hexadecimal: convertirAHexadecimal(suma),
};

function convertirABinario(suma) {
    let binario = "";
    do {
        binario = (suma % 2) + binario;
        suma = Math.floor(suma / 2);

    } while (suma > 0);

    return binario;
}

function convertirAHexadecimal(suma){
    return suma.toString(16).toUpperCase();
}


alert(`La suma de los dos números convertido a binario es: ${binario}`);
alert(`La suma de los dos números en hexadecimal es: ${hexadecimal}`);
