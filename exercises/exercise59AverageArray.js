/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
*/

function averageArray(numbersVector) {

    let sum = 0

    for (let i = 0; i < numbersVector.length; i++) {
        sum = sum + numbersVector[i]
    }
    
    let average = sum / numbersVector.length

    console.log('The average is ' + average)

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
averageArray(numbers)