/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*/

function isAWeekday(day) {
    switch (day) {
        case 1:
        case 7:
            return 'Weekend'
        case 2:  
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Weekday'

        default:
            return 'Invalid day'
    }
}

console.log(isAWeekday(1))
console.log(isAWeekday(6))
console.log(isAWeekday(7))
console.log(isAWeekday(8))