const calcularMDC = require('../algo_fundamentais/MaximoDivComum.')

// Teste 1: Verificar se o resultado do MDC é um valor válido
test('Verificar se o resultado do MDC é um valor válido', () => {
    const a = 6;
    const b = 9;
    const resultadoMDC = calcularMDC(a, b);
    expect(resultadoMDC).toBeGreaterThanOrEqual(0);
    expect(Number.isInteger(resultadoMDC)).toBe(true);
  });

  // Teste 2: Verificar se o resultado do MDC é calculado corretamente
test('Verificar se o resultado do MDC é calculado corretamente', () => {
    const a = 14;
    const b = 21;
    const resultadoMDC = calcularMDC(a, b);
    expect(resultadoMDC).toBe(7);
  });