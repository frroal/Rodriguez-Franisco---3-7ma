let numero = prompt("El factorial de que numero te gustaria saber?")

calculo(numero);

function calculo(number) {
    let calc = 1;
    for (let i = 0; i < number; i++) {
        calc = calc * (i + 1);
    }
    console.log(calc);
}