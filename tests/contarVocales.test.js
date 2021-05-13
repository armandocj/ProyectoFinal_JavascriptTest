const contarVocales = require('../src/contarVocales');

test('Probar que la funcion "contarVocales" regresa la cantidad correcta de vocales y consonantes', () => {
    expect(contarVocales('armando')).toEqual([3,4]);
    expect(contarVocales('ARMANDO')).toEqual([3,4]);
});

test('Probar que la funcion "contarVocales" No soporta numeros como caracteres en el string', () => {
    expect(contarVocales('13256') === [0,0]).toBeFalsy();
});

test('Probar que la funcion "contarVocales" No soporta numeros, tira una excepcion', () => {
    expect(
        () => {
            contarVocales(264)
        }
    ).toThrow();
});