/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros:
    um número n (número de termo);
    a1 (o primeiro termo); e 
    r (a razão).
Escreva os n termos, bem como a soma dos elementos.
*/

//exercise27GrowthRate


function arithmeticProgression (n, a1, r) {
    let an = a1 + (n - 1) * r
    let sn = ((a1 + an) * n) / 2
    return {
        'n termos' : an, 
        'sum': sn
    }
}

console.log(arithmeticProgression(16, 4, 3))
