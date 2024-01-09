/*
2. Crea un script que acepte dos valores introducidos en decimal y muestre el resultado de 
la suma en binario y en hexadecimal. Utiliza asignación desestructurada.
*/

alert("Ejercicio 02: Crea un script que acepte dos valores introducidos en decimal y muestre el resultado de la suma en binario y en hexadecimal. Utiliza asignación desestructurada.")


let numeroUsuario = Number(prompt("Introduzca un número decimal:"));
let numeroUsuario2 = Number(prompt("Introduzca un número decimal:"));
let suma = numeroUsuario + numeroUsuario2;

let { binario, decimal } = {
    binario: convertirABinario(suma),
    decimal: suma
}

function convertirABinario(suma) {
    let binario = "";
    do {
        binario = (suma % 2) + binario;
        suma = Math.floor(suma / 2);

    } while (suma > 0);

    return binario;
}

alert(`La suma de los dos números es: ${decimal}`);
alert(`La suma de los dos números convertido a binario es: ${binario}`);


