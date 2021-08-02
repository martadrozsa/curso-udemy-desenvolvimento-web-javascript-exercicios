/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. 
Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. 
Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. 
Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui” 
*/


function buyACar(car) {
    switch (car) {
        case 'hatch':
            return 'Purchase made successfully'
        
        case 'sedans':  
        case 'motorcycles':
        case 'pickup trucks':
            return "Are you sure you don't prefer this model"

        default:
            return 'We do not work with this type of car here'
    }
}

console.log(buyACar('hatch'))
console.log(buyACar('sedans'))
console.log(buyACar('motorcycles'))
console.log(buyACar('pickup trucks'))
console.log(buyACar('corolla'))