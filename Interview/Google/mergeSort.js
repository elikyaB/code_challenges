function mergeSort (array) {

    let sorted = []

    const separate = (arr) => {
        let len = arr.length
        if (len<=1) {return sorted.push(arr)}
        let half = Math.ceil((len-1)/2)
        let left = arr.slice(0,half)
        let right = arr.slice(half)
        console.log(half, left, right)
        separate(left), separate(right)
    }

    const merge = (arr) => {
        let len = arr.length
        let results = []
        let swapHappened = false
        while (results.length < len) {
            console.log(arr[0], arr[1])
            if (arr[0] <= arr[1] || arr[1] == undefined) {results.push(...arr.splice(0,1))}
            else {results.push(...arr.splice(1,1)); swapHappened = true;}
            console.log(arr, results, swapHappened)
        }
        if (swapHappened) {return merge(results)}
        else {return results}
    }

    return merge(array)
}

// TESTS
const generateArray = require('./generateArray')
const randomArray = generateArray(10, -10, 10)
// console.log(randomArray)
// console.log(mergeSort(randomArray))
console.log(mergeSort([10,9,8,7,6,5,4,3,2,1,0]))