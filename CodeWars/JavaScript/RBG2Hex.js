// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
function rgb(r, g, b){
    return [r,g,b].map((n) => {
        if (n<=0) {return '00'}
        if (n>=255) {return 'FF'}
        return (('0'+Number(n).toString(16)).slice(-2).toUpperCase())
    }).join('')
}

console.log((rgb(146,289,199)))
