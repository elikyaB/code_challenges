// least significant digit because that seems harder
// index back through each number then push to bucket
// sort buckets then concat them together

function radixSort (array, method='lsd') {
    // HELPERS
    Math.length = (num) => {
        return num===0? 1 : Math.floor(Math.log10(Math.abs(num))+1)
    }

    const sigDig = (num, i) => {
        return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10
    }

    let baseIndex = 0
    let radix = 10
    let k = 1

    const lsd = (i) => {
        let buckets = Array.from({length:radix},()=>[])
        for (item of array) {
            let isNegative = item < 0
            let d = sigDig(item, i)
            if (!isNegative) {buckets[baseIndex+d].push(item)}
            else {
                if (radix==10) {
                    let negatives = Array.from({length:radix},()=>[])
                    baseIndex = 10; 
                    radix = 20;
                    buckets = negatives.concat(buckets)
                }
                buckets[baseIndex-1-d].push(item)
            }
            console.log(buckets, item, d, i, k)
        }
        array = [].concat(...buckets)
    }

    const msd = (i) => {
        let min, max
        for (let i=0; i<array.length; i++) {
            if (min==undefined || array[i]<min) {min=array[i]}
            if (max==undefined || array[i]>max) {max=array[i]}
        }
        k = Math.max(Math.length(min), Math.length(max))
        if (min<0) {radix = 20; baseIndex = 10;}

        let buckets = Array.from({length:radix},()=>[])

        for (item of array) {
            let isNegative = item < 0
            let d = sigDig(item, i)
            if (!isNegative) {buckets[baseIndex+d].push(item)}
            else {
                if (radix==10) {
                    let negatives = Array.from({length:radix},()=>[])
                    baseIndex = 10; 
                    radix = 20;
                    buckets = negatives.concat(buckets)
                }
                buckets[baseIndex-1-d].push(item)
            }
            console.log(buckets, item, d, i, k)
        }
    }

    if (method=='lsd') {for (let i=0; i<k; i++) {lsd(i)}}
    if (method=='msd') {for (let i=k-1; i>=0; i--) {msd(i)}}

    return array
}

// TESTS
const generateArray = require('./generateArray')
const randomArray = generateArray(10, -10, 10)
console.log(randomArray)
console.log(radixSort(randomArray, 'msd'))
// console.log(radixSort([12,6,3,7,13,8]))
// console.log(radixSort([-3,7,-1,-88,5,100]))