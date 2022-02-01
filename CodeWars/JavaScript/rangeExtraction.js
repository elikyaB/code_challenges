// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
function solution(list){
    let result = ''
    let start = null
    let previous = null
    for (n of list) {
        if (previous+1!==n) {
            previous-start==1? result+=`,${previous}`
            : start<previous? result+=`-${previous}` 
            : null ;
            result==''? result+=`${n}` : result+=`,${n}`
            start = n
        }
        if (list.slice(-1)==n && start!==n) {return result+=`${start+1<n?'-':','}${n}`}
        previous = n
    }
    return result
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
console.log(solution([ -71, -70, -68, -67, -64, -62, -59, -57, -56, -55, -53 ]))
console.log(solution([-80,-78,-75,-74,-72,-69,-66,-64,-63,-62,-59,-56,-55,-52,-51,-49,-48,-46,-44,-43]))