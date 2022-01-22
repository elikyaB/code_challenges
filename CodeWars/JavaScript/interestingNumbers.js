// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
function isInteresting(n, arr) {
    function intNum(n) {
        let i = null
        let d = null
        if (
            n.length>=3 && (
            n === n[0]+'0'.repeat(n.length-1) ||
            n === n[0].repeat(n.length) ||
            n.split('').every((n)=>{
                if (i===null) {i=Number(n)}
                if (i===Number(n)) {
                    i===9? i=0 : i++
                    return true
                }
            }) ||
            n.split('').every((n)=>{
                if (d===null) {d=Number(n)}
                if (d===Number(n)) {d--;return true}
            }) ||
            n.split('').reverse().join('') === n ||
            arr.includes(Number(n))
        )) {return true}
    }
    if (intNum(String(n))) {return 2} 
    else if (intNum(String(n+1)) || intNum(String(n+2))) {return 1} // check numbers ahead
    else {return 0} // all else fails
}

isInteresting(1)
isInteresting(10)
isInteresting(100)