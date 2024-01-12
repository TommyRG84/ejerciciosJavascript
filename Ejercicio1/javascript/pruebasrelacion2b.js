

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

let cadena1 = "Hola estoy probando esta mierda."
alert(cadena1);
alert(modificarCadena(cadena1));