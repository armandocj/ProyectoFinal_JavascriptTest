const separaPorN = require('../src/dividirYSacarMayor');

test('Probar que la funcion "separarPorN" separa arreglos de numeros y obtien el mayor de cada bloque', () => {
    expect(separaPorN([7,6,5,3,4,5,3,2,4], 3)).toEqual([7,5,4]);
    expect(separaPorN([8,7,6,5,4], 2)).toEqual(expect.arrayContaining([8,6,4]));
});

test('Probar que la funcion "separarPorN" no soporta strings en el arreglo', () => {
    expect(separaPorN([8,'hola',6,5,4], 3)).toEqual(expect.arrayContaining([NaN,5]));
});