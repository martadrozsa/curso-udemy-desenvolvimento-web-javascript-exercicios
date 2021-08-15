/*Criar uma função que receba um array de números e retorne o menor número desse array.
*/


function smallestNumber (numbersVector) {
    let smallest = numbersVector[0]

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        if (current < smallest){
            smallest = current
        }
    }
    console.log(`Smallest number: ${smallest}`)
}

let numbers = [10, 33, 44, 50, 6, 27, 2, 18, 89, 11, 112, 4, 58]
smallestNumber(numbers)
