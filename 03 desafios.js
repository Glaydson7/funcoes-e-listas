// 1) Crie uma função que calcule o índice de massa corporal (IMC) 
// de uma pessoa, a partir de sua altura, em metros, e peso, em 
// quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso) {
    // Fórmula do IMC: peso / altura^2
    const imc = peso / (altura * altura);
    
    // Arredondar o resultado para duas casas decimais
    const imcArredondado = parseFloat(imc.toFixed(2));
    
    return imcArredondado;
}

// 2) Crie uma função que calcule o valor do fatorial de um número 
// passado como parâmetro.
function calcularFatorial(numero) {
    // Verifica se o número é não-negativo
    if (numero < 0) {
      return "Não é possível calcular o fatorial de um número negativo.";
    }
  
    // Caso base: fatorial de 0 é 1
    if (numero === 0) {
      return 1;
    }
  
    // Caso recursivo: fatorial de n é n * fatorial de (n-1)
    return numero * calcularFatorial(numero - 1);
  }
  
  
// 3) Crie uma função que converte um valor em dólar, passado como 
// parâmetro, e retorna o valor equivalente em reais. Para isso, 
// considere a cotação do dólar igual a R$4,80.
function converterDolarParaReais(valorEmDolar) {
    // Considerando a cotação do dólar igual a R$4,80
    const cotacaoDolar = 4.80;

    // Calcula o valor em reais
    const valorEmReais = valorEmDolar * cotacaoDolar;

    // Retorna o valor em reais
    return valorEmReais;
}


// 4) Crie uma função que mostre na tela a área e o perímetro de uma
// sala retangular, utilizando altura e largura que serão dadas 
// como parâmetro.
function calcularAreaEPerimetro(altura, largura) {
    // Calcular a área da sala retangular
    var area = altura * largura;
  
    // Calcular o perímetro da sala retangular
    var perimetro = 2 * (altura + largura);
  
    // Exibir os resultados na tela
    console.log("Área da sala: " + area + " metros quadrados");
    console.log("Perímetro da sala: " + perimetro + " metros");
  }
  


// 5) Crie uma função que mostre na tela a área e o perímetro de uma 
// sala circular, utilizando seu raio que será fornecido como parâmetro. 
// Considere Pi = 3,14.
function calcularAreaEPerimetro(raio) {
    // Considere Pi como 3.14
    const pi = 3.14;
  
    // Calcula a área da sala circular
    const area = pi * Math.pow(raio, 2);
  
    // Calcula o perímetro da sala circular
    const perimetro = 2 * pi * raio;
  
    // Mostra os resultados na tela
    console.log(`Área da sala circular: ${area.toFixed(2)}`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)}`);
  }
  

// 6) Crie uma função que mostre na tela a tabuada de um número dado 
// como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }