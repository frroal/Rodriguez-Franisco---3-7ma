let nombre = prompt("Cual es tu nombre?");
let edad = prompt("Y tu edad?");

saludo(nombre);
calcularEdad(edad);

function saludo(name){
    console.log("Hola " + name);
}

function calcularEdad(age){
    let result;
    if(age < 40 && age > 0){
    result = 40 - age;
    console.log("Te faltan " + result + " anios para tener 40 años");     
    }
    else{
        console.log("Ya pasaste los 40");
    }
}