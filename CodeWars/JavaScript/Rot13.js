// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
function rot13(message){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return message.split('').map((m) => {
        let capital = false
        if (alphabet.indexOf(m) === -1) {
            if (alphabet.includes(m.toLowerCase())) {capital = !capital}
            else {return m}
        }
        const l = m.toLowerCase()
        const cipher = alphabet.indexOf(l)+13 > 25? alphabet[alphabet.indexOf(l)-13] : alphabet[alphabet.indexOf(l)+13]
        return capital? cipher.toUpperCase() : cipher
    }).join('')
}

console.log(rot13("Grfg 10"))
