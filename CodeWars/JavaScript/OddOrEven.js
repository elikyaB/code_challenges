// https://www.codewars.com/kata/619f200fd0ff91000eaf4a08/train/javascript
function oddOrEven(n) {
    return n%2 === 1 ? 'Either' : (n/2)%2 === 1 ? 'Odd' : 'Even'
}

console.log(oddOrEven(7))