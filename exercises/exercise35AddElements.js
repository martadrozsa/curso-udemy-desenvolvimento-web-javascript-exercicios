/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. 
Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. 
É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os vetores no console.
*/


function addElements(vectorStack, vectorAdd) {
    for (let i = 0; i < vectorAdd.length; i++) {
        vectorStack.push(vectorAdd[i])
    }
    console.log('\nVector add: ' + vectorAdd)
    console.log('\nVector Stack: ' + vectorStack)
}


let vectorStack = [1, 2, 3, 4, 5]
let vectorAdd = [6, 7, 8, 9, 10]

addElements(vectorStack, vectorAdd)