/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. 
Desse valor, deve ser subtraído 30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário
no mês
*/

function calculateSalary(workedHours, amountReceivedPerHour) {
    let salary = workedHours * amountReceivedPerHour
    let salaryDiscounts = salary - salary * 30 / 100

    console.log(`Salary with discounts R$ ${salaryDiscounts}`)
}

calculateSalary(180, 60)