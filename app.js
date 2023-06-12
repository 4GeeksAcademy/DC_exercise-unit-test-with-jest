

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 139;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 0.005;
    // retornamos el valor
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};