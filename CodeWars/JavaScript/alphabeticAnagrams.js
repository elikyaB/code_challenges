// https://www.codewars.com/kata/53e57dada0cb0400ba000688/train/javascript

function factorialize (n, f=1) {
    if (n==1) { return f } 
    if (n>1) {
        f *= n
        n -= 1
        return factorialize(n, f)
    }
}

let position = 1

function checkDupes (array) {
    let multiples = {}
    let divideOutDupe = 1
    array.forEach((a)=>{
        multiples[a] ? multiples[a] += 1 : multiples[a] = 1
    })
    Object.entries(multiples).forEach((m)=>{
        if (m[1]>1) {divideOutDupe *= factorialize(m[1])}
    })
    return divideOutDupe
}

function listPosition (word, start=true) {
    if (start) {position = 1} // prevent jank

    if (word.length>1) {
        let sorted = word.split('').sort()
        // console.log(word.split(''), sorted)
        
        sorted.findIndex((l)=>{
            if (l == word[0]) { return true }
            else {
                // console.log(`${position} += ${factorialize(word.length-1)} / ${checkDupes(sorted)}`)
                position += factorialize(word.length-1) / checkDupes(sorted) 
            }
            // console.log(l, word[0], position)
        })
        
        listPosition(word.slice(1), start=false)
    } 

    return position
}

console.log(listPosition('ABAB'))
console.log(listPosition('AAAB'))
console.log(listPosition('BAAA'))
console.log(listPosition('QUESTION'))
console.log(listPosition('BOOKKEEPER'))