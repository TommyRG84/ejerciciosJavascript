/*
6. Rellenar un array con valores aleatorios 
mediante una función matemática de 20 elementos 
tipo entero entre el 10 y el 20. 
El programa tendrá que mostrar el total de valores 
mayores que 15, menores que 15 e iguales a 15.
*/

let menorAQuince = [];
let igualAQuince = [];
let mayorAQuince = [];
let numeroAleatorio;
let min = 10;
let max = 20;

for (let i = 1; i <= 20 ; i++){
    numeroAleatorio = Math.floor(Math.random()*(max-min+1)+min);
    if (numeroAleatorio < 15){
        menorAQuince.push(numeroAleatorio);
    }else if (numeroAleatorio === 15){
        igualAQuince.push(numeroAleatorio);
    }else{
        mayorAQuince.push(numeroAleatorio);
    }
}

alert("Los números menores a 15 son: " + menorAQuince);
alert("Las veces que se ha generado 15 son: " + igualAQuince);
alert("Los números generados mayores a 15 son: " + mayorAQuince);

