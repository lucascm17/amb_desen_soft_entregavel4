const quicksort = require('../algo_fundamentais/Ordenacao')

// Teste 1: Verificar se a função quicksort ordena corretamente um array de números
test('Verificar se a função quicksort ordena corretamente um array de números', () => {
    const array = [4, 2, 7, 1, 5];
    const resultado = quicksort(array);
    expect(resultado).toEqual([1, 2, 4, 5, 7]); 
  });
  
  // Teste 2: Verificar se a função quicksort mantém a ordem de um array já ordenado
  test('Verificar se a função quicksort mantém a ordem de um array já ordenado', () => {
    const array = [1, 2, 3, 4, 5];
    const resultado = quicksort(array);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });