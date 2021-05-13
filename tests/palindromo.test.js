const esPalindromo = require('../src/palindromo');

test('Probar que funcion "esPalindromo" detecta palabras que son palindromos', () => {
    expect(esPalindromo('anna')).toBeTruthy();
    expect(esPalindromo('arribalabirra')).toBeTruthy();
});

test('Probar que funcion "esPalindromo" detecta palabras que NO son palindromos', () => {
    expect(esPalindromo('case')).toBeFalsy();
    expect(esPalindromo('armando')).toBeFalsy();
});

test('Probar que funcion "esPalindromo" No funciona con numeros, siempre regresa true', () => {
    expect(esPalindromo(123456)).toBeTruthy();
    expect(esPalindromo(1234321)).toBeTruthy();
});

test('Probar que funcion "esPalindromo" No funciona con null, tira una excepcion', () => {
    expect(
        () => {
            esPalindromo(null);
        }
    ).toThrow();
});