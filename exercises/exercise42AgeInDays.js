/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

function getAge(age) {
    let ageInDays = age * 365
    return ageInDays
}

console.log(getAge(31))
console.log(getAge(70))