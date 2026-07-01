let answer;
let funcion = prompt("A que tipo de grados quieres pasar");

funcion = funcion.toLowerCase();

let grados = prompt("Cuantos grados quieres pasar a " + funcion);

const funciones = {
    "celsius": aCelcius,
    "farenheit": aFarenheit
};

if (funciones[funcion]) {
    funciones[funcion](grados);
    console.log(answer);
}

function aCelcius(degrees) {
    answer = (degrees - 32) * 5 / 9;
}

function aFarenheit(degrees) {
    answer = (degrees * 9 / 5) + 32;
}