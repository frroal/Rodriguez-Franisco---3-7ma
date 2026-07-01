let tiempo = prompt("Desde que numero debe ser el timer?")

timer(tiempo)

function timer(time) {
    while (tiempo != 0) {
        console.log(tiempo);
        tiempo = tiempo - 1;
    }
    if (tiempo == 0) {
        console.error("Despegue!")
    }
}