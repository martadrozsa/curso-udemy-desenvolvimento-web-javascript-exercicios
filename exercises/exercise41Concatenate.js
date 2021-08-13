/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.
*/

/*
function greeting(name) {
    return "Hello, " + name + "!"
}
*/


function greeting(name) {
    const greeting = "Hello"
    return [greeting, name].join(', ').concat("!")
}

console.log(greeting('Marta'))