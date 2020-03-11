// map
// Crear una función map que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// obtenga el resultado
// lo pushee a un nuevo array
// devuelva el array final con el resultado de cada una de las llamadas al callback.
// Ejemplo:

const numeros = [1, 2, 3]
const duplicar = x => x * 2

const mapear = (numeros, duplicar) => {
    const resultados = []
    for (const numero of numeros) {
        const resultado = duplicar(numero)
        resultados.push(resultado)
    }
    return resultados
}

mapear(numeros, duplicar) // [2, 4, 6]
console.log(mapear(numeros, duplicar))


// filter
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".
// Ejemplo:

const numeros1 = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const filtrar = (numeros1, multiploDe10) => {
    const multiplosDe10 = []
    for (const numero of numeros1) {     
        if (multiploDe10(numero)) {
            multiplosDe10.push(numero)
        }
    }
    return multiplosDe10
}

console.log(filtrar(numeros1, multiploDe10)) // [10, 40, 50]

// every
// Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si todas las llamadas al callback devolvieron true
// Ejemplo:

const esPositivo = x => x >= 0

const todos = (numeros1, fn) => {
    let validacion = true
    for (let numero of numeros1) {
        if(!fn(numero)) {
            validacion = false
        } 
    }
    return validacion
}


console.log(todos(numeros1, multiploDe10)) // false
console.log(todos(numeros1, esPositivo)) // true

// some
// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true
// Ejemplo:

const numeros2 = [7, 2, 3, 6, 33, 8]

const algunos = (numeros1, fn) => {
    let validacion = false
    for (let numero of numeros1) {
        if(fn(numero)) {
            validacion = true
        } 
    }
    return validacion
}

console.log(algunos(numeros2, multiploDe10)) // false
console.log(algunos(numeros2, esPositivo)) // true

// find
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined
const numeros3 = [8, 2, 3, 4, 33, 50]

const hallar = (numeros3, fn) => {
    for (let numero of numeros3) {
        if(fn(numero)) {
            return numero
        }
    }
    return undefined
}

console.log(hallar(numeros3, multiploDe10)) // 40

// findIndex
// Crear una función findIndex que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined

const hallarIndice = (numeros3, fn) => {
    for (let i in numeros3) {
        if(fn(numeros3[i])) {
            return i
        }
    }
    return undefined
}

console.log(hallarIndice(numeros3, multiploDe10)) // 3

// dropWhile
// Crear una función dropWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos a partir del primer callback que devolvió false
// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const numeros4 = [40, 30, 50, 8, 2, 3, 20]

const dropWhile = (numeros4, fn) => {
    let falso = []
    for (let i in numeros4) {
        if (!fn(numeros4[i])) {
            falso = numeros4.slice(i)
            return falso
        }
    }
}

console.log(dropWhile(numeros4, multiploDe10)) // [8, 2, 3, 20]

// takeWhile
// Crear una función takeWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos hasta el primer callback que devolvió false
// (Inverso del dropWhile)

const takeWhile = (numeros4, fn) => {
    let verdadero = []
    for (let i in numeros4) {
        if (!fn(numeros4[i])) {
            verdadero = numeros4.slice(0, i)
            return verdadero
        }
    }
}


console.log(takeWhile(numeros4, multiploDe10)) // [40, 30, 50]