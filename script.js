/*Adicione seu codigo abaixo */
const lista = [1,2,3,4,5,16,7,8,9]
console.log(lista)

function methodMap(list, mult){
    let result = []
    for(let i = 0; i < list.length; i++){
        const mapmap = list[i] * mult
            result.push(mapmap)
    }
    return result
}
console.log(methodMap(lista, 2))


function methodFilter(list, param){
    let result = []
    for(let i = 0; i < list.length; i++){
        let filter = list[i]
        if(filter >= param){
            result.push(filter) 
        }
    }return result
}
console.log(methodFilter(lista, 4))


function methodReduce(list){
    let contador = 0
    for(let i = 0; i < list.length; i++){
        let atualNumero = list[i]
        contador += atualNumero
    }return contador
}
console.log(methodReduce(lista))


function methodFind(list, param){
    for(let i = 0; i < list.length; i++){
        let numeroAtual = list[i]
        if(numeroAtual >=  param){
            return numeroAtual
        }
    }
}
console.log(methodFind(lista, 10))



function methodIncludes(list, param){
    for(let i = 0; i< list.length; i++){
       let numeroAtual = list[i]
       if(numeroAtual == param){
            return true
       }
    }return false
}
console.log(methodIncludes(lista, 16))


function methodIndexof(list, param){
    for(let i = 0; i < list.length; i++){
        let numeroAtual = list[i]
        if(param == numeroAtual){
            return i
        }
    }return -1
}
console.log(methodIndexof(lista, 4))