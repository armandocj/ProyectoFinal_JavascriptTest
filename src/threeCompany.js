
function threeCompany (cadena) {
    var n = cadena.length;
    var output = ''

   Array.from(cadena).forEach(element => {
        output += element.repeat(3)
    });

    return output;
}

module.exports = threeCompany;