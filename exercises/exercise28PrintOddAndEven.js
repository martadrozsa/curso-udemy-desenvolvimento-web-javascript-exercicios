/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function printOddAndEven (numbersVector) {
    let even = 0
    let odd = 0

    for (let i = 0; i < numbersVector.length; i++) {
        if (numbersVector[i] % 2 == 0) {
            even++
        }else {
            odd++
        }
    }
    console.log(`${even} even numbers and ${odd} odd numbers.`)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
printOddAndEven(numbers)
