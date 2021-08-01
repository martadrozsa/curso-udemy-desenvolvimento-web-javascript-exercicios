/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)*/

function triangleSize (side1, side2, side3) {
    if (side1 === side2 && side1 === side3) {
        return 'Equilateral'
    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
        return 'Scalene'
    } else {
        return 'Isosceles'
    }
}

console.log(triangleSize(2, 1, 3))
console.log(triangleSize(2, 2, 2))
console.log(triangleSize(2, 3, 3))