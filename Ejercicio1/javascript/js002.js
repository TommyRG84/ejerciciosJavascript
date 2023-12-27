alert("A continuación, introduzca su nombre");

let userName = prompt("Introuzca su nombre","Escríbalo aquí");

alert(`Tu nombre es ${userName}`);

let mayorEdad = confirm("¿Eres mayo de edad?");

if (mayorEdad === true){
    alert("Eres mayor de edad.");
}else {
    alert("No eres mayor de edad.");
}