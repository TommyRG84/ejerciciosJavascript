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
let salirBucle = confirm("Pulse aceptar para obtener la siguiente tabla de multiplicar o pulse cancelar para salir.");

do{
    
    if(salirBucle){
        numero++;
        imprimirTablaMultiplicar(numero);
    }
    salirBucle = confirm("Pulse aceptar para obtener la siguiente tabla de multiplicar o pulse cancelar para salir.");
}while(salirBucle);