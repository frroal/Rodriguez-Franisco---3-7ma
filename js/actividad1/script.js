// 2 var (nota, asistencia), si el alumno tiene nota 6 >= && asistencia > 75 aprobado, nota < 6 && asistencia >= 75 reprobado
let nota, asistencia;

if(nota >= 6 && asistencia >= 75){
    console.log("Aprobado!");
}
else if (nota < 6 && asistencia >= 75){
    console.log("Recupera");
}
else{
    console.log("Se fue libre");
}