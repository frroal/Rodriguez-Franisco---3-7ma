function division(n1, n2){
    if(n2 != 0){
        res = n1 / n2;
    }
    else{
        console.error("NO SE PUEDE DIVIDIR POR CERO")
        return;
    }
}

function multiplicacion(n1, n2){
    res = n1 * n2;
}

function suma(n1, n2){
    res = n1 + n2;
}

function resta(n1, n2){
    res = n1 - n2;
}

let res;
let num1;
let num2;

const funct = prompt("Quieres hacer una suma, resta, multiplicacion o divison?");
num1 = prompt("Primer numero?");
num2 = prompt("Segundo numero?");


funct(num1, num2);
