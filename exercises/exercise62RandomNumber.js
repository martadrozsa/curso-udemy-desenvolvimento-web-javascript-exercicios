/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. 
Internamente, na função, será gerado um número aleatório de 1 a 10. 
A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. 
Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". 
Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

function randomNumber (number) {
    let random = Math.floor(Math.random() * 10)

    if (number === random){
        return `Congratuçations! The number drawn was ${number}.`
    } else {
        return `Too bad! The number drawn was ${random}.`
    }
    
}

console.log(randomNumber(5))
console.log(randomNumber(6))
console.log(randomNumber(2))
console.log(randomNumber(7))
console.log(randomNumber(1))