
function threeCompany (cadena) {
    var output = ''

   Array.from(cadena).forEach(element => {
        output += element.repeat(3)
    });

    return output;
}

module.exports = threeCompany;