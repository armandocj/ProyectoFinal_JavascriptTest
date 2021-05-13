const burbuja = require('../src/burbuja');

var array = [8,9,3,5,1];
var expectedArray = [1,3,5,8,9];

let arrayPalabras = ['palabra', 'balon', 'agua'];
let expectedArrayPalabras = ['agua', 'balon', 'palabra'];

test('Probar que funcion "burbuja" regresa orden correcto de array de numeros', () => {
    expect(burbuja(array)).toEqual(expectedArray);
});

test('Probar que funcion "burbuja" regresa orden correcto de array de palabras', () => {
    expect(burbuja(arrayPalabras)).toEqual(expectedArrayPalabras);
});

test('Probar que funcion "burbuja" tira una excepcion cuando recibe Null', () => {
    expect( () => {
        burbuja(null)
    } ).toThrow();
});