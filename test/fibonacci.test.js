const fibonacci =  require('../algo_fundamentais/fibonacci')

test('Os 10 primeiros numeros da contagem de fibonacci devem ser os corretos', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})

test('Os 2 primeiros numeros da contagem de fibonacci devem 0 e 1', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
})