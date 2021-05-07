const burbuja = require('../src/burbuja');

var array = [8,9,3,5,1];
var expectedArray = [1,3,5,8,9];

let arrayPalabras = ['palabra', 'balon', 'agua'];
let expectedArrayPalabras = ['agua', 'balon', 'palabra'];

test('Probar regresa orden correcto de array de numeros', () => {
    expect(burbuja(array)).toEqual(expectedArray);
});

test('Probar regresa orden correcto de array de palabras', () => {
    expect(burbuja(arrayPalabras)).toEqual(expectedArrayPalabras);
});