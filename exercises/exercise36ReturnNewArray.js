/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 
Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. 
A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
*/

function returnNewArray(numberArray, number) {

    let newArray = []
    for (let i = 0; i < numberArray.length; i++) {
        let current = numberArray[i]
        newArray.push(current * number)
    }
    return newArray

}

let numbers = [4, 5, 7, 12, 11, 10, 3]

console.log(returnNewArray(numbers, 2))


function returnNewArrayIfGreaterThanFive(numbersArray, num) {

    let newArray = []
    for (let i = 0; i < numbersArray.length; i++) {
        let current = numbersArray[i]
        if (current > 5) {
           newArray.push(current * num) 
        }    
    }
    return newArray

}


let nums = [4, 5, 7, 12, 11, 10, 3]

console.log(returnNewArrayIfGreaterThanFive(nums, 2))