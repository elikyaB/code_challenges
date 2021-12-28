// https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {
    return parseInt(a+b, 2).toString(10)
}

let n = 1000000000000000000000000
let x = 10111111011100000001011000110001

console.log((n>>>0).toString(2))

// incomplete