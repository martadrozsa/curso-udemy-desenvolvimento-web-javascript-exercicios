/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/


function returnArrayNumbers (elements) {
    let newArray = []

    for (let element of elements) {
        if (typeof element === "number" ){
            newArray.push(element)
        }
    }
    return newArray
}

let arrayElement = [10, 'Ana', 44, 'House', true, 18, 'Javascript', 89, 11, 'a', 12, 4, 58]
console.log(returnArrayNumbers(arrayElement))