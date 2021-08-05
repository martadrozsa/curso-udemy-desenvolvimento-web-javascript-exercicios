/*17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
    Plano       Aumento
    A           10%
    B           15%
    C           20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. 
Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function salaryIncrease(workPlan, currentSalary) {

    switch (workPlan) {
        case 'A':
            return currentSalary * 1.1
        
        case 'B':
            return currentSalary * 1.15
        
        case 'C':
            return currentSalary * 1.2
        
        default:
            return 'Invalid plan'
    }
}

console.log(salaryIncrease('A', 1000))
console.log(salaryIncrease('B', 1000))
console.log(salaryIncrease('C', 1000))
console.log(salaryIncrease('D', 1000))