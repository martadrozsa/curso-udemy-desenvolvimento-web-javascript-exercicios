/* 05) Desenvolva uma função para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)
*/

function formatNumber(value) {
    let valueNumber = `R$ ${value.toFixed(2).toString().replace(".", ",")}`
    return valueNumber
}

console.log(formatNumber(0.30000000000000004))


