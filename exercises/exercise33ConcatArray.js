/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

console.log('First way')

let integerVector = [1, 2, 3, 4]
let stringVector = ['A', 'B', 'C', 'D']
let doubleVector = [1.2, 2.1, 3.1, 4.1]

let concatArray = integerVector.concat(stringVector, doubleVector)
console.log(concatArray)



console.log('\n\nSecond way')

function concatVector (...args) {
    result = []
    for(let i = 0; i<arguments.length; i++){
        result = result.concat(arguments[i])
    }
    return result;
}

console.log(concatVector(integerVector, stringVector, doubleVector ))