// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
    const vowels = ['a','e','i','o','u']
    return str.split('').filter((l)=>{
      if (vowels.includes(l) || vowels.join('').toUpperCase().split('').includes(l)) {return false}
      else {return true}
    }).join('')
}