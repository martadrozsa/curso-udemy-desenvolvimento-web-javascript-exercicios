/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function returnString(num) {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += '+'
    }
    console.log(result)
 
}

returnString(4)
returnString(5)
returnString(6)