/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. 
Observe os exemplos abaixo para um melhor entendimento.
*/

function objectToArray (object) {

    let result = []

    for (let key in object) {
        result.push([key, object[key]])
    }
    return result
    
}


let date = ({
    name: 'Marta',
    profession: 'Software developer'
}) 

console.log(objectToArray(date))