let arrayUser = prompt("Dime tu array separado por comas y sin espacios");
let arrayInverted = [];

invertir(arrayUser)

function invertir(userArray) {
    let array = userArray.split(',').map(item => Number(item.trim()));
    for (let i = 0; i < userArray.length; i++) {
        arrayInverted[userArray.length - i - 1] = userArray[i]
    }
    arrayInverted = arrayInverted.filter(item => item !== ',');
    console.log(userArray)
    console.log(arrayInverted)
}
