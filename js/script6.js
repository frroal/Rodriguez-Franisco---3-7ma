// Condicionales
// Según la edad que diga si sos "niño" 0-12, "adolescente" 13-18, "adulto" 18-67, "abuelo" +67

let edad = 30;

if(edad < 12){
    console.log("Sos un chico");
}
else if(edad >= 12 && edad < 18){
    console.log("Sos un adolescente")
}
else if(edad >= 18 && edad <= 67){
    console.log("Sos un adulto")
}
else{
    console.log("Sos  un abuelo")
}