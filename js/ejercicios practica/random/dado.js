let numero

random()

function random() {
    const min = Math.ceil(1)
    const max = Math.floor(6)
    numero = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numero);
}