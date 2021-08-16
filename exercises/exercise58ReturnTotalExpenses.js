/*Você está trabalhando numa aplicação pessoal de controle de despesas. 
Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. 
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/


function returnTotalExpenses(elements) {
    let sum = 0

    for (let element of elements) {
            sum = sum + element.price
    }
    return sum
}

let arrayElement = [{name: 'Online Newspaper', category: 'Information', price: 89.99}, {name: 'Movie theater', category: 'Entertainment', price: 150}]
console.log(returnTotalExpenses(arrayElement))