let arrayUser = prompt("Dime tu array separado por comas y sin espacios");
let valorMaximo = 0;
let valorMinimo = 999999;

encontrar(arrayUser)

console.log("El valor mas grande es: " + valorMaximo)

console.log("El valor mas chico es: " + valorMinimo)



function encontrar(userArray) {
    let array = userArray.split(',').map(item => Number(item.trim()));

    if (array.length == 1) {
        console.log("No se puede encontrar un mayor o menor en un array de un solo digito.")
    }
    else if (array.length >= 2) {
        valorMaximo = array[0];
        valorMinimo = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > valorMaximo) {
                valorMaximo = array[i];
            }
            if (array[i] < valorMinimo) {
                valorMinimo = array[i];
            }
        }
    }
}