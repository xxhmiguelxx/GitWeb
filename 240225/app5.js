function suma(n1, n2){

    return parseInt(n1)+parseInt(n2);

}

function resta(n1, n2){

    return parseInt(n1)-parseInt(n2);

}

function multi(n1, n2){

    return parseInt(n1)*parseInt(n2);

}

function divi(n1, n2){

    return parseInt(n1)/parseInt(n2);

}

let opcion= parseInt(prompt(`
    
    Operacion:
    1.- Suma
    2.- Resta
    3.- Multiplicacion
    4.- Division
    
    `




));

switch (opcion){


    case 1:
        var numero1=prompt("Ingresa un numero1: ");

var numero2=prompt("Ingresa un numero2: ");

let resultado1 = suma(numero1,numero2);
console.log("El resultado es: "+ resultado1);
break;

case 2:
    var numero1=prompt("Ingresa un numero1: ");
var numero2=prompt("Ingresa un numero2: ");
    var resultado2 = resta(numero1,numero2);
console.log("El resultado es: "+ resultado2);
break;

case 3:
    var numero1=prompt("Ingresa un numero1: ");
var numero2=prompt("Ingresa un numero2: ");
    let resultado3 = multi(numero1,numero2);
console.log("El resultado es: "+ resultado3);
break;

case 4:

var numero1=prompt("Ingresa un numero1: ");
var numero2=prompt("Ingresa un numero2: ");

let resultado4 = divi(numero1,numero2);
console.log("El resultado es: "+ resultado4);
break;



    


}