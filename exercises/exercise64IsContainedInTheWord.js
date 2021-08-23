/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes que o caractere se repete na string. 
A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.
*/


function isContainedInTheWord (string, character) {

    let count = 0

    for (let i = 0; i < string.length; i++) {
    
        let charString = string.charAt(i).toLowerCase()
        if(charString === character) {
            count++
        }
    }
    return count
}

console.log(isContainedInTheWord('I have fun learning to program', 'a'))