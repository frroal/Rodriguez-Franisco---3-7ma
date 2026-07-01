let nombre = prompt("Cual es tu nombre?")

saludar(nombre)

function saludar(name) {
    name = name.toLowerCase()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    console.log("Hola " + name + "!")
}