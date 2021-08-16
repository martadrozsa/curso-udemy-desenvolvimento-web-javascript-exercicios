/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
*/

function returnsEvenNumberOfEvenIndex (numbers) {
    let evenArray = []

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i]
        if (current % 2 === 0 && i % 2 === 0) {
            evenArray.push(current)
        }
    }
    return evenArray
}

let arrayNumber = [1, 15, 44, 18, 89, 11, 13, 19, 12, 4, 58]
console.log(returnsEvenNumberOfEvenIndex(arrayNumber))


