
function cambiarArreglo(arreglo) {
    let salida = [];
    arreglo.forEach(elemento => {
        salida.unshift(elemento);
    });
    return salida;
}


module.exports = cambiarArreglo;