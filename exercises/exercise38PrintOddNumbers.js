/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function printOddNumbers(start = 0, end = 100) {
    if (start > end) {
        aux = start
        start = end
        end = aux
    }
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1) {
            console.log(i)
        }
    }
}

printOddNumbers(19, 3)