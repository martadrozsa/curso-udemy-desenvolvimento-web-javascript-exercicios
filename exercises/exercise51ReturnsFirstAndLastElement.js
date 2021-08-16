/*Crie uma função que receba um array e retorne o primeiro e o último elemento desse array como um novo array.
*/

function returnsFirstAndLastElement (numbers) {
    let firstElement = numbers[0]
    let lastElement = numbers[numbers.length-1]

    let newArray = [] 
    newArray.push(firstElement)
    newArray.push(lastElement)

    console.log(newArray)

}


let arrayNumber = [5, 6, 7, 8, 9, 10]
returnsFirstAndLastElement(arrayNumber)

