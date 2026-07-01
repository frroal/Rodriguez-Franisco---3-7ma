let respuesta = prompt("Dame un numero");

clasificacion(respuesta)

function clasificacion(resp) {
    if (resp == 0) {
        console.log("Tu numero es cero");
    }
    if (resp > 0) {
        console.log("Tu numero es positivo");
    }
    if (resp < 0) {
        console.log("Tu numero es negativo");
    }
}