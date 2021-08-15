/* Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. 
Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.
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
