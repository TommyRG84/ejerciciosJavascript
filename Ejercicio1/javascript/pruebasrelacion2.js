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

