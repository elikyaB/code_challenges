// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str){
    return str.split(' ').map((w) => {
        return w.search(/\W/) < 0 ? w.split('').slice(1).concat(w[0]+'ay').join('') : w
    }).join(' ')
}

console.log(pigIt('hi fly guy !'))