let arrayUser = prompt("Dime tu array separado por comas y sin espacios");
let arrayPares = [];

encontrar(arrayUser);

console.log(arrayPares)

function encontrar(userArray) {
    let array = userArray.split(',').map(item => Number(item.trim()));
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPares[j] = array[i];
            j++
        }
    }
}