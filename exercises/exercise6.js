/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples.  
A segunda retornará o valor da aplicação sob o regime de juros compostos */


function calculateSimpleInterest(initialCapital, interestRate, timeOfApplication) {
    let simpleInterest = initialCapital * interestRate * timeOfApplication
    let formatNumber = `R$ ${simpleInterest.toFixed(2).toString().replace(".", ",")}`
    return formatNumber
}

console.log(calculateSimpleInterest(10000, 0.07, 24))


function calculateCompoundInterest(initialCapital, interestRate, timeOfApplication) {
    let interestAmount = initialCapital * ((1 + interestRate) ** timeOfApplication)
    let compoundInterest = interestAmount - initialCapital
    let formatNumber = `R$ ${compoundInterest.toFixed(2).toString().replace(".", ",")}`
    return formatNumber
}

console.log(calculateCompoundInterest(1400, 0.07, 2))