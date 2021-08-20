/*Escreva uma função que recebe um array de números e um número alvo.
A função deve retornar quantas vezes o número alvo aparece em sequência.
Por exemplo, numeros = [ 5, 23, 1, 6, 6, 0, 18, 6, 4, 32, 6, 6, 1, 1]
alvo = 6
nesse caso, a função retorna 2, pois o número 6 aparece em sequência apenas 2 vezes, nas posições 3, 4 e nas posições 10 e 11.
*/

function findTargetNumberInSequence(numbers, target) {
    let total = 0
    let isInSequence = false
    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i]

        if (current == target && isInSequence == true) {
            total++
            isInSequence = false 
        } else if (current == target) {
            isInSequence = true 
        } else {
            isInSequence = false
        }  


    }
    return total
}

let numbers = [ 6, 5, 23, 1, 6, 6, 0, 18, 6, 4, 32, 6, 6, 1, 1]
console.log(findTargetNumberInSequence(numbers, 6))