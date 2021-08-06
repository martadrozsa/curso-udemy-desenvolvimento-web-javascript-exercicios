/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function calculateAverage (numbersVector) {
    let sum = 0
    let average = 0

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        sum = sum + current
    }
    average = sum / numbersVector.length
    console.log(`Average: ${average}`)
}

let numbers = [10, 2, 33, 4, 5, 6, 27, 18]
calculateAverage(numbers)
