/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function insideOutside (numbersVector) {
    let inside = 0
    let outside = 0

    for (let i = 0; i < numbersVector.length; i++) {
        let current = numbersVector[i]
        if (current >= 10 && current <= 20) {
            inside++
        } else {
            outside++
        }
    }
    console.log(`Inside: ${inside} \nOutside: ${outside}`)
}

let numbers = [10, 2, 33, 4, 5, 6, 27, 18, 89, 11, 12, 4, 58]
insideOutside(numbers)