/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function highestValue (numbersVector) {
    let highest = Number.MIN_SAFE_INTEGER
    let lower = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        if (current > highest) {
            highest = current
        }
        if (current < lower){
            lower = current
        }
    }
    console.log(`Highest number: ${highest} \nLower number: ${lower}`)
}

let numbers = [10, 2, 33, 44, 50, 6, 27, 18, 89, 11, 112, 4, 58]
highestValue(numbers)
