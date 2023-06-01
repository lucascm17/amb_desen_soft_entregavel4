const verificarPrimo = require('../algo_fundamentais/NumPrimo')


// Teste 1: Verificar se o número 7 é primo
test('Verificar se o número 7 é primo', () => {
    const numero = 7;
    const resultado = verificarPrimo(numero);
    expect(resultado).toBe(true); // Espera-se que o resultado seja true, indicando que o número é primo
  });
  
  // Teste 2: Verificar se o número 10 não é primo
test('Verificar se o número 10 não é primo', () => {
    const numero = 10;
    const resultado = verificarPrimo(numero);
    expect(resultado).toBe(false); // Espera-se que o resultado seja false, indicando que o número não é primo
  });