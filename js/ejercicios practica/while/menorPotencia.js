let numero = prompt("Dime un numero");

encontrar(numero)

function encontrar(number) {
    let i = 0;
    while (!(i * i >= number)) {
        i++;
    }
    if (i * i >= number) {
        console.log("La menor potencia mayor o igual a tu numero es la potencia de: " + i + ", que da como resultado = " + i * i)
    }
}