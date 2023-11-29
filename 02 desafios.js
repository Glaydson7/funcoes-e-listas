// Em JAvaScript:

// 1) Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
    console.log("Olá, mundo!");
}

// Chamada da função
olaMundo();


// 2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log("Olá, " + nome + "!");
}

// Chamada da função
olaNome("João");


// 3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero) {
    return numero * 2;
}

// Exemplo de uso
let resultadoDobro = dobro(5);
console.log(resultadoDobro); // Saída: 10


// 4) Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

// Exemplo de uso
let resultadoMedia = media(3, 5, 7);
console.log(resultadoMedia); // Saída: 5


// 5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}

// Exemplo de uso
let maior = maiorNumero(8, 3);
console.log(maior); // Saída: 8


// 6) Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(numero) {
    return numero * numero;
}

// Exemplo de uso
let resultadoQuadrado = quadrado(4);
console.log(resultadoQuadrado); // Saída: 16
