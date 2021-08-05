/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false
*/

function isLeapYear (year) {
    if (year <= 0) {
        return false
    } else if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true
    }  else {
        return false
    }
}

console.log(isLeapYear(1900))
console.log(isLeapYear(1992))
console.log(isLeapYear(2000))
console.log(isLeapYear(2016))
console.log(isLeapYear(2018))
console.log(isLeapYear(2020))
