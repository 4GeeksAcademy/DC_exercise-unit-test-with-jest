

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 150;
    // retornamos el valor
    return valueInYen;
}

const fromEuroToYen = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInYen = valueInEuro * 150;
    // retornamos el valor
    return valueInYen;
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromEuroToYen  };