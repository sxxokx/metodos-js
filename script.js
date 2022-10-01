/*Adicione seu codigo abaixo */
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const param = ((iten) => {
   return iten + 4 
})

function methodMap(array, param) {
    const newMap = []
    for (let i = 0; i < array.length; i++) {
        newMap.push(param (array[i], i, array))
    }
    return newMap
}
methodMap(lista, param)

function methodFilter(lista) {
    const filterNumber = []
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 6 ) {
            filterNumber.push(lista[i])
        }
    }
    return filterNumber
}
methodFilter(lista)

const paramReduce = ((itenInicial, itenValue) => {
    return itenInicial + itenValue
})

function methodReduce(array, param, initialValue = 0) {
    for (let i = 0; i < lista.length; i++) {
        initialValue = param(initialValue, array[i])
    }
    return initialValue
}
methodReduce(lista, paramReduce)

function methodFind(lista) {
    const findNumber = []
    for( let i = 0; i < lista.length; i++) {
        if (lista[i] > 8) {
            return lista[i]
        }
    } 
    return findNumber
}
methodFind(lista)


function methodIncludes(lista, param){
    for(let i = 0; i< lista.length; i++){
       let numeroAtual = lista[i]
       if(numeroAtual == param){
            return true
       }
    }return false
}
console.log(methodIncludes(lista, 16))


function methodIndexof(lista, param){
    for(let i = 0; i < lista.length; i++){
        let numeroAtual = lista[i]
        if(param == numeroAtual){
            return i
        }
    }return -1
}
console.log(methodIndexof(lista, 4))