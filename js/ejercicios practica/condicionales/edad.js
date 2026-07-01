let resultado = prompt("Cual es tu edad?");

maome(resultado);

function maome(respuesta) {
    if (respuesta >= 18) {
        console.log("Sos mayor de edad");
    }
    else {
        console.log("Sos menor de edad");
    }
}