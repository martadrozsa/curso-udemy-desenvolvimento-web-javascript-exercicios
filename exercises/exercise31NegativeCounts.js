/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
*/

function negativeCounts (numbersVector) {
    let negativeNumbers = 0

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        if (current < 0) {
            negativeNumbers++
        }    
    }
    console.log(`Negative numbers: ${negativeNumbers}`)
}

let numbers = [10, 2, -33, -4, 5, 6, 27, -18, 89, -11, 12, 4, 58, 15, -10, 48, 100, -3]
negativeCounts(numbers)


