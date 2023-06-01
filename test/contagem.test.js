const contarAlunosAprovados = require('../algo_fundamentais/Contagem');

// Teste 1: Verificar se o número de alunos aprovados é um valor válido
test('Verificar se o número de alunos aprovados é um valor válido', () => {
  const alunosAprovados = contarAlunosAprovados();
  expect(alunosAprovados).toBeGreaterThanOrEqual(0);
  expect(alunosAprovados).toBeLessThanOrEqual(10);
});

//Teste 2: Verificar se o número de alunos aprovados é um número inteiro
test('Verificar se o número de alunos aprovados é um número inteiro', () => {
    const alunosAprovados = contarAlunosAprovados();
    expect(Number.isInteger(alunosAprovados)).toBe(true);
  })
