let arrayUser = prompt("Dime tu array separado por comas y sin espacios");
let numero = prompt("Que numero quieres buscar?")
let vecesRepetidas = 0;

buscador(arrayUser, numero)

function buscador(userArray, number) {
    let array = userArray.split(',').map(item => Number(item.trim()));
    for (let i = 0; i < userArray.length - 1; i++) {
        if (userArray[i] == number) {
            vecesRepetidas++
        }
    }
    console.log(vecesRepetidas + 1)
}