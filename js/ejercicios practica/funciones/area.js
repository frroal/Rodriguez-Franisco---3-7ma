let base = prompt("Cual es la base del triangulo?")
let altura = prompt("Cual es la altura del triangulo?")
let answer;

calcularBase(base, altura)

console.log(answer)

function calcularBase(b, h) {
    answer = b * h / 2
}