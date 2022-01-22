// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
function isInteresting(n, arr) {
    function test(n) {
        n = String(n)
        if (n.length>2 && (
            n === n[0]+'0'.repeat(n.length-1) ||
            '1234567890 9876543210'.includes(n) ||
            n.split('').reverse().join('') === n ||
            arr.includes(Number(n))
    )) {return true}}

    return test(n)? 2 
        : test(n+1) || test(n+2)? 1
        : 0
}