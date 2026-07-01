let numero = prompt("Que numero debe adivinar la computadora?")

adivinar(numero)

function adivinar(number) {
    let intento = 0;
    while (intento != number) {
        intento = intento + 1;
    }
    console.log("intentos: " + intento);
}