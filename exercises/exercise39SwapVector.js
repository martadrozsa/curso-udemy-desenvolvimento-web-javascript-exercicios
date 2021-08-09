/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/


let aux = []
function swap(vectorA, vectorB) {

    if (vectorA.length == vectorB.length) {
        for (let i = 0; i < vectorA.length; i++) {
        aux[i] = vectorA[i]
        vectorA[i] = vectorB[i]
        vectorB[i] = aux[i]
        } 
    } else {
        return 'The vectors have different sizes!'
    }
    
    console.log(vectorA)
    console.log(vectorB)
}


let numbersA = [10, 22, 33, 45]
let numbersB = [21, 12, 30, 55]
swap(numbersA, numbersB)

