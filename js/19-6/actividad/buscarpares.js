function buscaPares(numero){
    if(num % 2 === 0){
        console.log("El numero es par")
    }
    else{
        console.log("El numero es impar")
    }
}

let num = prompt("Que numero quieres saber si es par?");
buscaPares(num);