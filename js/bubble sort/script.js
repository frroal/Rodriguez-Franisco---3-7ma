const numbers = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

console.log(numbers)

let sorted = false;

let aux;

while (!sorted) {
    sorted = true;
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            aux = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = aux
            sorted = false;
        }
    }
}

console.log(numbers)