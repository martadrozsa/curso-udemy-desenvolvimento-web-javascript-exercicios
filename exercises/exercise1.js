/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console 
a soma, subtração, multiplicação e divisão desses valores.
*/

function calculate(a, b) {
    let sum = a + b
    let subtraction = a - b
    let multiplication = a * b
    let division = a / b
    return {
        'sum': sum,
        'subtraction': subtraction, 
        'multiplication': multiplication, 
        'division': division
    }
}

console.log(calculate(10, 5))


