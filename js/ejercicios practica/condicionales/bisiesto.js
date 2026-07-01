calcular();

function calcular() {
    let año = prompt("Que año es?");
    if (año % 4 == 0 && año % 100) {
        console.log("Tu año no es bisiesto")
    }
}