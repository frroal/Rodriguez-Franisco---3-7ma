let edad = prompt("Cual es tu edad?");
let entrada = prompt("Tenes entrada (si o no)");

verificar(edad, entrada);

function verificar(age, ticket) {
    if (age >= 18 && ticket == "si") {
        console.log("Puede pasar");
    }
    else {
        console.log("No puedes pasar")
    }
}