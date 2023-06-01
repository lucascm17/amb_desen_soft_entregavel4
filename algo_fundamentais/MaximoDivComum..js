
function calcularMDC(a, b) {
    while (b !== 0) {
      const resto = a % b;
      a = b;
      b = resto;
    }
    return a;
  }
  
  
  module.exports = calcularMDC;
