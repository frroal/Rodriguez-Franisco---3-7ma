let arrayUser = prompt("Dime tu array separado por comas y sin espacios");

eliminador(arrayUser);

function eliminador(userArray) {
    let arrayItem = userArray.split(',').map(item => Number(item.trim()));
    let arrayPuro = [...new Set(arrayItem)];
    console.log("Array original:", arrayItem);
    console.log("Array sin duplicados:", arrayPuro);
}