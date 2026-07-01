let numero = prompt("Que tabla de multiplicar queres ver?")

tabla(numero);

function tabla(number) {
    console.log("La tabla del numero: " + number + " es:")
    for (let i = 1; i < 11; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}