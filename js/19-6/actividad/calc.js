let res = 0;
let num1 = 0;
let num2 = 0;

function sumar(n1, n2){
    res = n1 + n2;
}

function restar(n1, n2){
    res = n1 - n2;
}

function multiplicar(n1, n2){
    res = n1 * n2;
}

function dividir(n1, n2){
    if(n2 != 0){
        res = n1 / n2;
    }
    else{
        console.error("No puedes dividir por 0");
        return;
    }
}

const acciones = {
    "sumar": sumar,
    "restar": restar,
    "dividir": dividir,
    "multiplicar": multiplicar
};

let funcion = prompt("Que quieres hacer? Sumar, restar, dividir o multiplicar?");
let numStr1 = prompt("Cual es el primer numero?");
let numStr2 = prompt("Cual es el segundo numero?");
num1 = Number(numStr1);
num2 = Number(numStr2);

console.log(typeof num1 + " " + typeof num2);

if (acciones[funcion]) {
    acciones[funcion](num1, num2);
    console.log(res)
} else {
    console.error("La funcion '" + funcion + "' no existe.");
}