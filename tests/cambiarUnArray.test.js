const cambiarArreglo = require('../src/cambiarUnArray');

test('Probar que la funcion "cambiarArreglo" invierte el orden de un arreglo ya sea de strings o numeros', () => {
    expect(cambiarArreglo([4,6,8,5,3])).toEqual([3,5,8,6,4]);
    expect(cambiarArreglo(['hola', 'buenos', 'dias']))
        .toEqual(expect.arrayContaining(['dias', 'buenos', 'hola']));
    expect(cambiarArreglo(['hola', 345, 'dias'])).toEqual(['dias', 345, 'hola']);
});

test('Probar que la funcion "cambiarArreglo" no soporta caracteres ni numeros en lugar de arreglos', () => {
    expect(
        () => {
            cambiarArreglo('patito');
        }
    ).toThrow();

    expect(
        () => {
            cambiarArreglo(5796);
        }
    ).toThrow();
});