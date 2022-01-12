// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){
    return words.split(' ').sort((w1,w2) => {return parseInt(w1.match(/\d/))-parseInt(w2.match(/\d/))}).join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))