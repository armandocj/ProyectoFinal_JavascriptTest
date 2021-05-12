function separaPorN (arreglo, cadaCuantos) {
    let salida = [];

    while(arreglo[0]){
        salida.push(Math.max(...arreglo.splice(0,cadaCuantos)));
    }

    return salida;
}

module.exports= separaPorN;