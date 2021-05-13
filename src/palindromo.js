function esPalindromo(palabra) {
    var cadena = Array.from(palabra);
    var igual = true
    for(var i = 0, j = cadena.length - 1; i < j; i++, j--) {
            if (cadena[i] != cadena[j]) {
                igual = false;
                break;
            }
    }
    return igual;
}

module.exports = esPalindromo;