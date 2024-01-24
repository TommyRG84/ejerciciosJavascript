/*
6. Realiza un script que muestre la tabla de multiplicar del 
valor introducido por teclado del 1 al 10. 
Una vez hecho esto se le preguntará si desea continuar. 
En el caso de que así sea, se continuará con los 10 siguientes 
números, así hasta que se le pulse cancelar. 
Debe de utilizarse una función flecha.
*/

alert("Ejercicio 06")

let minimo = 1;
let maximo = 10;

let numero = Number(prompt("Introduzca un número para saber su tabla de multiplicar:"));

let imprimirTablaMultiplicar = (numero) =>{
    let resultado;
    let mostrarTabla = "";
    for(let i = minimo; i <= maximo; i++){
        resultado = numero * i; 
        mostrarTabla += `${numero} x ${i} = ${resultado} \n`;       
    }    
    alert(mostrarTabla);
}

imprimirTablaMultiplicar(numero);
let finBucle = confirm("Pulse aceptar para obtener la siguiente tabla de multiplicar o pulse cancelar para salir.");

do{    
    if(finBucle){
        minimo +=10;
        maximo +=10;
        imprimirTablaMultiplicar(numero);
    }
    finBucle = confirm("Pulse aceptar para obtener los siguientes 10 múltiplos o pulse cancelar para salir.");
}while(finBucle);