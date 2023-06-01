
function calcularSomaNumerosAleatorios(n) {
    var numero;
    var soma = 0;
    var i = 0;
  
    while (i < n) {
      numero = Math.trunc(Math.random() * 10);
      soma = soma + numero;
      i = i + 1;
    }
  
    return soma;
  }
  

  module.exports = calcularSomaNumerosAleatorios

