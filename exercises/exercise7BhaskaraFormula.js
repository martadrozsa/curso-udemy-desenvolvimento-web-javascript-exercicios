/* 07) Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo” */

function bhaskaraFormula(a, b, c) {
    let delta = Math.pow(b, 2) - (4 * a * c)
    if (delta < 0) {
        return 'Negative delta'
    }
    let x1 = (- b + Math.sqrt(delta)) / 2 * a
    let x2 = (- b - Math.sqrt(delta)) / 2 * a

    return {
        'x1' : x1,
        'x2' : x2

    }
}

console.log(bhaskaraFormula(1, -5, 6))
console.log(bhaskaraFormula(3, 1, 2))