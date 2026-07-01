let promedio;
let suma = 0;
let j = 0;
let notaAlta = 0;
let desaprobados = 0;

const notas = [7, 4, 9, 3, 8, 6, 5, 10, 2, 7];
const notasAprobadas = [];

for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
    promedio = suma / notas.length;
    if (notas[i] >= 6) {
        notasAprobadas[j] = notas[i];
        j = j + 1;
    }
    else {
        desaprobados = desaprobados + 1;
    }
}
for (let i = 0; i < notasAprobadas.length; i++) {
    if (notasAprobadas[i] > notasAprobadas[i + 1]) {
        notaAlta = notasAprobadas[i];
    }
}
console.log("El promedio de notas es: " + promedio);
console.log("La nota mas alta es: " + notaAlta);
console.log("La cantidad de alumnos desaprobados es: " + desaprobados);
