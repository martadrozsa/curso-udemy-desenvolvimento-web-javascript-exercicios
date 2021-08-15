/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/

function sumArray(numbersVector) {

    let sum = 0
    for (let i = 0; i < numbersVector.length; i++) {
        sum = sum + numbersVector[i]
    }
    console.log('The sum is ' + sum)

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sumArray(numbers)