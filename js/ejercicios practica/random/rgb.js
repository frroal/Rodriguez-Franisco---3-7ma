colorRandom()

function colorRandom() {
    const minimum = Math.ceil(0);
    const maximum = Math.floor(255);
    numero1 = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    numero2 = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    numero3 = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    console.log("rgb(" + numero1 + ", " + numero2 + ", " + numero3 + ")");
}