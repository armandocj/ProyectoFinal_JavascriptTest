
function factorial(numeroFactorial) {
    if(!(typeof numeroFactorial === 'number'))
        return 'No es numero';

    var factorial = 1;
    for (var i = 1; i <= numeroFactorial; i++) {
        factorial *= i;
    }
    return factorial;
};

module.exports = factorial;