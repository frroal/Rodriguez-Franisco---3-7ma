let palabra = prompt("Que palabra quieres revisar si es palindromo");

console.log(buscarPalindromo(palabra));

function buscarPalindromo(word) {
    const wordclear = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    return wordclear === wordclear.split('').reverse().join('');
}