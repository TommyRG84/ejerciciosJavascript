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
