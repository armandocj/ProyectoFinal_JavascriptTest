const threeCompany = require("../src/threeCompany")

test('Probar que la funcion "threeCompany" repite 3 veces cada caracter del string', () => {
    expect(threeCompany('armando')).toEqual('aaarrrmmmaaannndddooo');
    expect(threeCompany('159')).toEqual('111555999');
    expect(threeCompany('que onda')).toEqual('qqquuueee   ooonnndddaaa');
});

test('Probar que la funcion "threeCompany" acepta arrays de caracteres', () => {
    expect(threeCompany(['hola','b'])).toEqual('holaholaholabbb');
});


test('Probar que la funcion "threeCompany" no soporta numero en lugar de strings', () => {
    expect(threeCompany(159)).toBe('');
});

test('Probar que la funcion "threeCompany" no soporta numeros y caracteres mezclados en un arreglo', () => {
    expect( 
        () => {
            threeCompany(['hola',3])
        }
    ).toThrow();
});