/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que:
    de 0,0 a 4,9 seja atribuído o conceito D
    de 5,0 a 6,9 seja atribuído o conceito C
    de 7,0 a 8,9 seja atribuído o conceito B 
    de 9,0 a 10,0 seja atribuído o conceito A
*/


function gradeVector (gradeVector) {
    let concept = []

    for (let i = 0; i < gradeVector.length; i++) {
        let currentGrade = gradeVector[i]
        if (currentGrade >= 0 && currentGrade <= 4.9 ) {
            concept.push('D')
        } else if (currentGrade >= 5.0 && currentGrade <= 6.9 ) {
            concept.push('C')
        } else if (currentGrade >= 7.0 && currentGrade <= 8.9 ) {
            concept.push('B')
        } else if (currentGrade >= 9.0 && currentGrade <= 10.0 ) {
            concept.push('A')
        } else {
            return 'Invalid concept'
        }
    }
    return concept
}

let grade = [10.0, 6.0, 6.5, 4.8, 5.5, 7.6, 9.4, 3.2]
console.log(gradeVector(grade))