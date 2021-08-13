/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. 
Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
*/

function getMonth (number) {
    switch(number) {
        case 1:
            return 'January'
        case 2:
            return 'February'
        case 3:
            return 'March'
        case 4:
            return 'April'
        case 5:
            return 'May'
        case 6:
            return 'June'
        case 7:
            return 'July'
        case 8:
            return 'August'
        case 9:
            return 'September'
        case 10:
            return 'October'
        case 11:
            return 'November'
        case 12:
            return 'December'
    }
}

console.log(getMonth(1))
console.log(getMonth(4))
console.log(getMonth(6))
console.log(getMonth(8))
console.log(getMonth(12))