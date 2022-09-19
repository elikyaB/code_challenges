// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
function nextBigger(n){
    const num = String(n)
    if (num.length==1) {return -1}

    const leftDigitSwitch = (l) => {
        if (l<0) {return -1}
        if (num[l]>=num[l+1]) {return leftDigitSwitch(l--)}

        let next = Infinity, rest = []
        num.slice(l).split('').forEach((d)=>{
            if (d>num[l] && d<next) {
                if (next != Infinity) {rest.push(next)}
                next = d
            } else {rest.push(d)}
        })

        return parseInt(num.slice(0,l) + next + rest.sort().join(''))
    }

    let i=num.length-2, j=i+1
    return num[j] > num[i]
        ? parseInt(num.slice(0,i) + num[j] + num[i])
        : leftDigitSwitch(i-1)
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(414))
console.log(nextBigger(144))
console.log(nextBigger(340))
console.log(nextBigger(123456789))
console.log(nextBigger(1234567890))
console.log(nextBigger(9876543210))
console.log(nextBigger(9999999999))
console.log(nextBigger(59884848459853))