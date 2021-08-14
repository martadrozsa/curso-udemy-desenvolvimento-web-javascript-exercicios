/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. 
Porém, não utilize o operador de mutiplicação.
*/


function multiplication(x, y) {
    if (x >= 0 && y >= 0)  {
        let total = 0
        let i = 0
        while (i < y) {
            total += x
            i++
        }
        return total
    }   
}

console.log(multiplication(4, 2))
console.log(multiplication(5, 5))
console.log(multiplication(0, 7))

