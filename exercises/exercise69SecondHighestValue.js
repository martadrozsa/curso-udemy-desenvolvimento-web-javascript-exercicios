/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
*/

// function secondHighestValue (numbersVector) {
//     let secondHighest = numbersVector[0]
//     let firstHighestValue = numbersVector[0]

//     for (let i = 0; i < numbersVector.length; i++) {
//         let current = numbersVector[i]
//         if (current > firstHighestValue) {
//             firstHighestValue = current
//         }
//     }

//     for (let i = 0; i < numbersVector.length; i++) {
//         let current = numbersVector[i]
//         if (current != firstHighestValue) {
//             if (current > secondHighest) {
//                 secondHighest = current
//             }
//         }
//     }


//     console.log(`The secondg highest number is ${secondHighest}`)
// }



function secondHighestValue (numbersVector) {
    let secondHighest = numbersVector[0]
    let firstHighest = numbersVector[0]

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        if (current > firstHighest) {
            secondHighest = firstHighest
            firstHighest = current
        }
    }


    console.log(`The secondg highest number is ${secondHighest}`)
}

let numbers = [10, 240, 33, 44, 50, 625, 27, 18, 89, 98, 112, 4, 58]
secondHighestValue(numbers)