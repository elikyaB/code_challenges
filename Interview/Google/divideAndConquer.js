function divideAndConquer (arr, ele, l=null, r=null) {
    let i
    if (l!==null) {i = l + Math.floor((r-l)/2)}
    else {i = Math.floor(arr.length/2)}
    if (ele == arr[i]) {return i}
    if (ele < arr[i]) {
        r = i
        if (l!==null) {
            if (r-l>1) {return divideAndConquer(arr, ele, l, r)}
            return ele > arr[l] ? l+1 : l
        } else {l = 0}
    }
    else {
        l = i
        if (r!==null) {
            if (r-l>1) {return divideAndConquer(arr, ele, l, r)}
            return ele > arr[r] ? r+1 : r
        } else {r = arr.length-1}
    }
    return divideAndConquer(arr, ele, l, r)
}

// TESTS
// const testArr = [1,2,3,5,7,8,10,15,45,69,117,350,420,666,777]
// console.log(testArr.length)
// console.log(divideAndConquer(testArr,732))

module.exports = divideAndConquer