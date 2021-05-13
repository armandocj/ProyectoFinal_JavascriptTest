let contarVocales = cadena => {
    let countVocal=0;
    let countConst=0;

    cadena.split('').map(letra => {
        if ('aeiou'.indexOf(letra.toLowerCase()) != -1 )
            countVocal++
        else
            countConst++;
    })

    return [countVocal,countConst];
}

module.exports = contarVocales;