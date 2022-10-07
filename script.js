/*Adicione seu codigo abaixo */
const lista = [1,5,3,4,5,16,7,8,9]
console.log(lista)

function methodMap(list, callBack){
    let result = []
    for(let i = 0; i < list.length; i++){
        
           result.push(callBack(list[i], i, lista))
    }
    return result
}
console.table(methodMap(lista, callBackMap))

function callBackMap(element, index, array){
    return `Número ${element} no index ${index} veio desse array ${array}`

}


function methodFilter(list, callBack){
    let result = []
    for(let i = 0; i < list.length; i++){
        if(callBack(list[i], i, list)){
            result.push(list[i])
        }
    }return result
}
console.log(methodFilter(lista, callBackFilter))

function callBackFilter(element, index, array){
    if(element > 3 && index && array.length > 0){
        return true
    }

}

function methodReduce(list, callBack){
    let contador = 0
    for(let i = 0; i < list.length; i++){
        let atualNumero = list[i]
        contador += atualNumero
        if(i == list.length-1){
            return callBack(contador, 0)
        }
    }
}
console.log(methodReduce(lista, callBackReduce))

function callBackReduce(acumulador, atual){
    return acumulador + atual
}


function methodFind(list, callBack, param){
    for(let i = 0; i < list.length; i++){
        let numeroAtual = list[i]
        if(callBack(numeroAtual, param)){
            return numeroAtual
        }
    }
}
console.log(methodFind(lista, callBackFind, 10))



function callBackFind(element, param){
    if(element >=  param){
        return true
    }

}


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