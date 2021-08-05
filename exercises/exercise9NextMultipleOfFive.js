/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: 
Todo aluno recebe uma nota de 0 a 100. 
Alunos com nota abaixo de 40 são reprovados. 
As notas possuem a seguinte regra de arredondamento: 
    Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
    Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, 
ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado
*/

function nextMultipleOfFive(grade) {
    let rest = grade % 5 
    let nextMultiple = (grade - rest) + 5
    return nextMultiple   
}

function studentGrade(grade) {

    let finalGrade = 0
    let round = nextMultipleOfFive(grade)    
    let diff = round - grade

    if (diff < 3) {
        if(round >= 40) {
            finalGrade = grade + diff
            console.log('Approved student' + '\nFinal grade:' + finalGrade )
        } else if (round < 40) {
            console.log('Failed student' + '\nFinal grade:' + finalGrade)
        }
    } else if (grade >= 40) {
        console.log('Approved student' + '\nFinal grade:' + grade )
    } else {
        console.log('Failed student' + '\nFinal grade:' + grade)
    } 
}        

studentGrade(100)
studentGrade(30)
studentGrade(38)
studentGrade(88)
studentGrade(61)

