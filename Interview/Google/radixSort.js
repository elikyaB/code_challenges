// least significant digit because that seems harder
// index back through each number then sort
//  

function radixSort (arr) {
    const sorted = []
    let i = 0
    while (sorted.length < arr.length) {
        let val = arr[i]
        let str = val.toString()
        let len = str.length
        let isNegative = str.slice(0,1) == '-' ? true : false
        
        sorted.push(arr[i])
        i++
    }
    return sorted
}



// TESTS
const generateArray = require('./generateArray')
const randomArray = generateArray(10, -100, 100)
console.log(randomArray)
console.log(radixSort(randomArray))
// console.log(radixSort([12,6,3,7,13,8]))
// console.log(radixSort([-3,7,-1,-88,5,100]))