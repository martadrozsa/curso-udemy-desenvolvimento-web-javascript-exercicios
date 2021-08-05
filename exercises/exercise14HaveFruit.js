/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: 
Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos com escassez de kiwis”. 
Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
Teste com estas três opções. Crie também um default, que retornará uma mensagem de erro no console
*/



function haveFruit(fruit) {
    switch (fruit) {
        case 'apple':
            return 'We do not sell this fruit here'
        
        case 'kiwi':  
            return 'We are short of kiwi fruit'
        
        case 'watermelon':
            return 'Here it is, 3 dollars a kilo!'

        default:
            return 'Invalid opption'
    }
}

console.log(haveFruit('apple'))
console.log(haveFruit('kiwi'))
console.log(haveFruit('watermelon'))
console.log(haveFruit('banana'))