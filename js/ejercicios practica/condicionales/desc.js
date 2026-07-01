aplicarDesc();

function aplicarDesc() {
    let estudiante = prompt("Eres estudiante?");
    estudiante = estudiante.toLowerCase()
    let edad;
    if (estudiante !== "si") {
        edad = prompt("Que edad tenes?");
    }
    if (estudiante == "si" || edad > 60) {
        console.log("Descuento aplicado")
    }
    else {
        console.log("No cumples con los requisitos para aplicarte el descuento")
    }
}