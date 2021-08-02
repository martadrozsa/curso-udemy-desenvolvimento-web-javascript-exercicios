/* 12) Faça um algoritmo que calcule o fatorial de um número */

/*
using while

let n = 5
let fat = 1

while (n > 1) {
    fat = fat * n
    n = n - 1
}

console.log(fat)
*/


function factorial (n) {
    let factorial = 1
    let result = 0

    for (let i = n; i > 1; i--) {
        factorial = factorial * i
    }

    return factorial
}

console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))
