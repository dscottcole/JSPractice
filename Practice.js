let array1 = ["b","c","a","f","e","d"]

let sorterNd = (arr) => {
    arr2 = [...arr]
    arr2.sort((a,b) => {
        return a.localeCompare(b)
    })
    return arr2
} 

let array2 = [5,2,3,1,4]

let numSortNd = (arr) => {
    let arr2 = [...arr]
    arr2.sort((a,b) => {
        return a - b 
    })
    return arr2
}

let sortedStrings = sorterNd(array1)
let sortedNumbers = numSortNd(array2)

console.log(sortedStrings)
console.log(sortedNumbers)

reducer = (accumulator, currentValue) => accumulator + currentValue

let reducedArray = array2.reduce(reducer)
let reducedArrayInit = array2.reduce(reducer,5)

console.log(reducedArray)
console.log(reducedArrayInit)