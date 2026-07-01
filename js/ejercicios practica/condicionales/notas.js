let nota = prompt("Dime tu nota");

calificacion(nota);

function calificacion(calificacion) {
    if (calificacion >= 9) {
        console.log("A");
    }
    if (calificacion >= 7 && calificacion <= 8) {
        console.log("B");
    }
    if (calificacion >= 5 && calificacion <= 6) {
        console.log("C");
    }
    if (calificacion >= 3 && calificacion <= 4) {
        console.log("D");
    }
    if (calificacion >= 0 && calificacion <= 2) {
        console.log("F");
    }
}