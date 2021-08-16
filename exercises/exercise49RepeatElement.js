/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repeatElement (element, quantity) {
    let arrayNumber = [] 
    for (let i = 0; i < quantity; i++) {
        arrayNumber.push(element)
    }
    return arrayNumber
}


console.log(repeatElement(2, 5))