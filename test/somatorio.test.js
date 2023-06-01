const calcularSomaNumerosAleatorios = require('../algo_fundamentais/somatorio')


test('Verificar se a soma dos números é um valor válido', () => {
    const soma = calcularSomaNumerosAleatorios();
    expect(soma).toBeGreaterThanOrEqual(0);
    expect(soma).toBeLessThanOrEqual(45);
  });
  
  test('Verificar se a soma dos números é sempre menor ou igual a 45', () => {
    // Executar o teste 100 vezes para verificar a propriedade da soma ser menor ou igual a 45
    for (let i = 0; i < 100; i++) {
      const soma = calcularSomaNumerosAleatorios();
      expect(soma).toBeLessThanOrEqual(45);
    }
  });