/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5.
*/

function weightedAverage(studentCode, grade1, grade2, grade3) {
    let weighted1 = 0
    let weighted2 = 0
    let weighted3 = 0
    if (grade1 > grade2 && grade1 > grade3) {
        weighted1 = 4
        weighted2 = 3
        weighted3 = 3
    } else if ((grade2 > grade1 && grade2 > grade3)) {
        weighted1 = 3
        weighted2 = 4
        weighted3 = 3
    } else {
        weighted1 = 3
        weighted2 = 3
        weighted3 = 4
    }

    let averageResult = (grade1 * weighted1) + (grade2 * weighted2) + (grade3 * weighted3)
    
    if (averageResult >= 50.0) {
        console.log(`Student Code: ${studentCode}. Grades: ${grade1}, ${grade2}, ${grade3}. Final grade: ${averageResult}. Approved.`)
    } else {
        console.log(`Student Code: ${studentCode}. Grades: ${grade1}, ${grade2}, ${grade3}. Final grade: ${averageResult}. Failed.`)
    }
}

weightedAverage(12, 2.8, 6.0, 3.5)
weightedAverage(15, 3.8, 6.5, 5.5)
weightedAverage(10, 3.8, 2.5, 4.5)
