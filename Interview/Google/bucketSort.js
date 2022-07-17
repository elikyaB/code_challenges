// make buckets based on arr.length
// arr.map elements to bucket
// sort each bucket
// add buckets back into original arr

function bucketSort(arr) {
    const buckets = []
    const numOfBuckets = Math.round(Math.sqrt(arr.length))
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const bucketRange = (Math.abs(min) + Math.abs(max)) / numOfBuckets
    // console.log(numOfBuckets, min, max, bucketRange)
    for (let i=0; i<arr.length; i++) {
        let ele = arr[i]
        for (let b=0; b<numOfBuckets; b++) {
            if (ele <= min+(b+1)*bucketRange) {
                if (buckets[b]==undefined) {buckets[b] = [ele]}
                else {
                    for (let e=0; e<buckets[b].length; e++) {
                        if (ele < buckets[b][e]) {buckets[b].splice(e,0,ele); break}
                        else if (e == buckets[b].length-1) {buckets[b].push(ele); break}
                    }
                }
                // console.log(buckets)
                break
            }
        }
    }
    return [].concat(...buckets)
}

// TESTS
const generateArray = require('./generateArray')
const randomArray = generateArray(10, -100, 100)
console.log(randomArray)
console.log(bucketSort(randomArray))
console.log(bucketSort([12,6,3,7,13,8]))
console.log(bucketSort([-3,7,-1,-88,5,100]))