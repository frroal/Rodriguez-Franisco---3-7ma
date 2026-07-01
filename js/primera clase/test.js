let Numero1
let Numero2
const { randomBytes } = require('node:crypto');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Dime cuanto es = ' + Math.floor(Math.random(Numero1)) + " + " + Math.floor(Math.random(Numero2)) , (answer) => {
    if(answer == Numero1 + Numero2){
        console.log("Acertaste!");
        rl.close();
    }
    else{
        console.log("Uh le erraste mal ahi");
        rl.close
    }
});