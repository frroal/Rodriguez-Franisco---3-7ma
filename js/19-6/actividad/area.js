let res;
let num1;
let num2;

function area(b, h){
    if(b == 0 || h == 0){
        res = b + h;
    }
    else{
        res = b * h;
    }
}

num1 = prompt("Base del rectangulo?");
num2 = prompt("Alto del rectangulo?");
area(num1, num2);
console.log("El area es: " + res)