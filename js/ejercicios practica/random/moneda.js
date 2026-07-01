arrojar()

function arrojar() {
    const minimum = Math.ceil(1);
    const maximum = Math.floor(2);
    numero = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    if (numero == 1) {
        console.log("Cara");
    }
    else {
        console.log("Cruz");
    }
}