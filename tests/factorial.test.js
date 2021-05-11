const factorial = require('../src/factorial');

test('Probar que la funcion factorial regrese resultado numerico correcto', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(5)).not.toBeNaN();
});

test('Probar que la funcion factorial no funciona con strings', () => {
    expect(factorial('algun numero')).toEqual('No es numero');
    expect(typeof factorial('4') === 'number').toBe(false);
});