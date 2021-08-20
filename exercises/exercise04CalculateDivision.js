/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

function division(dividend, divisor) {
    let result = Math.floor(dividend / divisor)
    let rest = dividend % divisor

    return {
        'result' : result,
        'rest' : rest
    }
}

console.log(division(71, 4))

