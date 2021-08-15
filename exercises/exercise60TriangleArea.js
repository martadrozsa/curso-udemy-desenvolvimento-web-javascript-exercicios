/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. 
A precisão deverá ser de duas casas decimais, arredondando se necessário.
*/

function triangleArea (base, height) {
    let triangleArea = (base * height) / 2

    return `Triangle area: ${triangleArea.toFixed(2)}`
    
}

console.log(triangleArea(4, 3))
console.log(triangleArea(10, 15))