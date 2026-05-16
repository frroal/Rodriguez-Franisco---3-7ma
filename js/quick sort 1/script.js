const randomNumbers = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

console.log(randomNumbers);

qSort(0, randomNumbers.length - 1)

console.log(randomNumbers);

function qSort(lowestIndex, upperIndex) {
    let i = lowestIndex - 1;
    let aux;
    let pivot = randomNumbers[upperIndex];
    for (j = lowestIndex; j < upperIndex; j++) {
        if (randomNumbers[j] < pivot) {
            i++;
            aux = randomNumbers[j];
            randomNumbers[j] = randomNumbers[i];
            randomNumbers[i] = aux;
        }
    }

    i++
    randomNumbers[upperIndex] = randomNumbers[i];
    randomNumbers[i] = pivot;

    if (i == lowestIndex) {
        return;
    }

    qSort(lowestIndex, i - 1)

    qSort(i + 1, upperIndex)
}