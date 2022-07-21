// least significant digit because that seems harder
// index back through each number then push to bucket
// sort buckets then concat them together

function radixSort (array) {
    let min, max
    for (let i=0; i<array.length; i++) {
        if (min==undefined || array[i]<min) {min=array[i]}
        if (max==undefined || array[i]>max) {max=array[i]}
    }

    Math.length = (num) => {
        return num===0? 1 : Math.floor(Math.log10(Math.abs(num))+1)
    }

    const baseIndex = min<0 ? 10 : 0
    const radix = baseIndex + 10
    const k = Math.max(Math.length(min), Math.length(max))

    const sigDig = (num, i) => {
        return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10
    }


    for (let i=0; i<k; i++) { // MSD: let i=k-1; i>=0; i--
        buckets = Array.from({length:radix},()=>[])
        for (item of array) {
            let isNegative = item < 0
            let d = sigDig(item, i)
            if (!isNegative) {buckets[baseIndex+d].push(item)}
            else {buckets[baseIndex-1-d].push(item)}     
            console.log(buckets, item, d, i ,k)       
        }
        array = [].concat(...buckets)
    }
    return array
}

// TESTS
const generateArray = require('./generateArray')
const randomArray = generateArray(10, -100, 100)
console.log(randomArray)
console.log(radixSort(randomArray))
console.log(radixSort([12,6,3,7,13,8]))
console.log(radixSort([-3,7,-1,-88,5,100]))