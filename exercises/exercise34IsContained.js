/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/


function isContained (string1, string2) {
    let characterIsContained = true;

    for (let i = 0; i < string1.length; i++) {
        let charString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let charString2 = string2.charAt(j).toLowerCase()
            if(charString1 == charString2) {
                characterIsContained = true
                break
            } else {
                characterIsContained = false
            }
        }
        if(!characterIsContained) {
            return characterIsContained
        }
    }
    return characterIsContained
}

console.log(isContained('abc', 'cba'))
console.log(isContained('abc', 'cbad'))
console.log(isContained('abc', 'cbd'))


