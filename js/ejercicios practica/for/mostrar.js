let numero = prompt("Hasta que numero quieres mostrar?");

mostrarNums(numero)

function mostrarNums(finalNumber) {
    for (let i = 0; i < finalNumber; i++) {
        console.log(i + 1);
    }
}