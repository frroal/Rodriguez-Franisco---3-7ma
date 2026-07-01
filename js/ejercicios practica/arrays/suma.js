let arrayUser = prompt("Dime tu array separado por comas y sin espacios");
let answer = 0;

sumarArray(arrayUser)

console.log(answer)

function sumarArray(userArray) {
    let array = userArray.split(',').map(item => item.trim())

    for (let i = 0; i < array.length; i++) {
        answer = answer + Number(array[i])
    }
}