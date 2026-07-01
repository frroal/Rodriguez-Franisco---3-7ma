let numero = prompt("La suma de hasta que numero queres ver?")

suma(numero)

function suma(number) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        result = result + i + 1;
    }
    console.log("La suma de todos los numeros hasta el numero elegido es de: " + result)
}