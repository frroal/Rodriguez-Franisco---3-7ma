minimo = prompt("Que numero debe ser el minimo?");
maximo = prompt("Y que numero debe ser el maximo?");

randomEntre(minimo, maximo);

function randomEntre(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    numero = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    console.log(numero);
}