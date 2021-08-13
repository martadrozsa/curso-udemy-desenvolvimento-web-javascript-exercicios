/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 
Deverá diferenciar números de strings.
*/

function biggerOrEqual(num1, num2) {
    if (typeof num1 >= typeof num2) {
        return true
    } else{
        return 'false'
    }
}

console.log(biggerOrEqual(0, 0))
console.log(biggerOrEqual(0, "0"))
console.log(biggerOrEqual(5, 1))
