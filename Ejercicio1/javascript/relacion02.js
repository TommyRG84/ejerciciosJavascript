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


alert("Ejercicio 4");

/*
3. (OPCIONAL) Lee dos cadenas de caracteres por teclado y visualiza por pantalla lo siguiente:
(Utiliza la asignación desestructurada)
NOTA: No puedes utilizar ninguna función predefinida en JS
a. si la segunda es una subcadena de la primera o no lo es
b. la cantidad de caracteres de ambas cadenas
c. devolver la cadena con las vocales en mayúsculas y si la cadena tiene más de 5 caracteres, eliminar desde el quinto hacia adelante y mostrar puntos suspensivos
Elemplo:
Entrada 1: “AJjads 2h3iShJasrn aSfd 1f3t f 983d”
Entrada 2: “ads”
a. “La segunda cadena es subcadena de la primera”
b. “La cadena 1 tiene 36 caracteres y la segunda 3 caracteres”
c. “AJjAd…”
4. Realiza el ejercicio 3 utilizando alguna función predefinida.
*/

function pedirCadena(){
    return prompt("Introduce una cadena de texto:");
}
let { cadena1, cadena2 } = {
    cadena1: pedirCadena(),
    cadena2: pedirCadena(),
};

if (cadena1.indexOf(cadena2) != -1){
    alert(`${cadena2} es subcadena de ${cadena1}`);
}else{
    alert(`${cadena2} no es subcadena de ${cadena1}`);
}

alert(`La cadena 1 tiene ${cadena1.length} caracteres y la cadena 2 tiene ${cadena2.length} caracteres.`);

function modificarCadena(inputString){

    let vocalesMinusculas = "aeiou";
    let cadenaModificada = "";
    
    for(let i = 0; i < inputString.length; i++){
        let letra = inputString[i];

        if(vocalesMinusculas.indexOf(letra) != -1){
            cadenaModificada += letra.toUpperCase();
        }else{
            cadenaModificada += letra;
        }        
    }

    if(cadenaModificada.length > 5){
        cadenaModificada = cadenaModificada.slice(0,5) + "...";
    }

    return cadenaModificada;
}

alert(modificarCadena(cadena1));
alert(modificarCadena(cadena2));

/**
 * 5. Crea un script que calcule la potencia de un número sin utilizar **, 
 * pow o cualquier función que realice la tarea directamente. 
 * La acción debe de ser con números y exponentes positivos. 
 * Crea una función que realice esta acción y que sea llamada 
 * cada vez que se introduzcan los valores.
 */

alert("Ejercicio 05");

let base;
let exponente;

do{
    base = Number(prompt("Introduzca un número para obtener la potencia deseada:"));
    exponente = Number(prompt("Introduzca el exponente a elevar la base introducida:"));
    if(base < 0 || exponente < 0){
        alert("Introduzca valores positivos tanto para la base como para el exponente.");
    }
}while(base < 0 || exponente < 0);

function calcularPotencia(numero1, numero2){
    let resultado = base;
    if (exponente === 0){
        return 1;
    }else{
        for(let i = exponente; i > 0 ; i--){
            resultado = resultado * base;
        }
        return resultado;
    }    
}

alert(`El resultado de elevar ${base} por ${exponente} es ${calcularPotencia(base, exponente)}`);

/*
6. Realiza un script que muestre la tabla de multiplicar del 
valor introducido por teclado del 1 al 10. 
Una vez hecho esto se le preguntará si desea continuar. 
En el caso de que así sea, se continuará con los 10 siguientes 
números, así hasta que se le pulse cancelar. 
Debe de utilizarse una función flecha.
*/

alert("Ejercicio 06")

let numero = Number(prompt("Introduzca un número del 1 al 10 para saber su tabla de multiplicar:"));

let imprimirTablaMultiplicar = (numero) =>{
    let resultado;
    for(let i = 1; i <= 10; i++){
        resultado = numero * i; 
        alert(`${numero} x ${i} = ${resultado}`);       
    }    
}

imprimirTablaMultiplicar(numero);
let finBucle = confirm("Pulse aceptar para obtener la siguiente tabla de multiplicar o pulse cancelar para salir.");

do{
    
    if(finBucle){
        numero++;
        imprimirTablaMultiplicar(numero);
    }
    finBucle = confirm("Pulse aceptar para obtener la siguiente tabla de multiplicar o pulse cancelar para salir.");
}while(finBucle);