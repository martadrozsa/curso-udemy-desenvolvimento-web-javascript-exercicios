/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.
*/


/*function removeVowels(string) {
    return string.replace(/[aeiou]/ig, '')
}

console.log(removeVowels('house'))
*/

function removeVowels (string) {

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    
    vowels.forEach(vowels => string = string.replace(vowels, ''))
    return string
}

console.log(removeVowels('house'))