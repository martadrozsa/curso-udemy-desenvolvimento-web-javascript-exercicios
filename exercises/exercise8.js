/*08) Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém registro de todos as pontuações feitas por jogo. 
Após cada jogo ele anota o novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 

Dada uma lista de string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).

Obs.: O primeiro jogo não conta como novo recorde do melhor. Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)
*/

let scoreArray = ['10', '20', '20', '8', '25', '3', '0', '30', '1']


function compareGameScores (scoreArray) {
    let minimumValue = Number.MAX_SAFE_INTEGER
    let minimumValuePosition = -1
    
    for (let i = 0; i < scoreArray.length; i++) {
        let number = parseInt(scoreArray[i])
        if (number < minimumValue) {
            minimumValue = scoreArray[i] 
            minimumValuePosition = i + 1
        }     
    }

    let maxScore = parseInt(scoreArray[0])
    let count = 0

    for (let i = 0; i < scoreArray.length; i++) {
        let number = parseInt(scoreArray[i])
        if (number > maxScore) {
            maxScore = scoreArray[i]
            count++
        }   
    }

    return [count, minimumValuePosition]
}

console.log(compareGameScores(scoreArray))
